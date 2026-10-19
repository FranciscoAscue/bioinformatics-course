---
theme: academic
layout: course-cover
title: Scripting Bash
author: Francisco Ascue
week: Semana 07
unit: Unidad 1 · Automatización
colorSchema: auto
transition: fade-out
mdc: true
drawings:
  persist: false
---

<div class="template-badge">Automatización bioinformática</div>

# Scripting Bash

<p class="lead">Guardar comandos, recibir parámetros y repetir análisis sobre distintas muestras.</p>

---
layout: theory
---

## Un script reúne comandos en un archivo

**Ventajas:** repetir un análisis, cambiar parámetros y procesar varias muestras.

Guardar como <code>resumen.sh</code>:

```bash
#!/usr/bin/env bash
seqkit stats "$1"
```

<code>$1</code> es el primer argumento: la ruta del FASTA.

---

## Cómo ejecutar un script

```bash
bash resumen.sh secuencias.fasta
```

O dar permiso de ejecución:

```bash
chmod u+x resumen.sh
./resumen.sh secuencias.fasta
```

- <code>bash</code> invoca directamente el intérprete.
- <code>./</code> usa el intérprete indicado en el **shebang**.
- Usar Bash si el script contiene sintaxis específica de Bash.

---

## Variables y comillas

```bash
entrada="secuencias.fasta"
minimo=1000

seqkit seq -m "$minimo" "$entrada" > filtradas.fasta
```

- Asignar sin espacios alrededor de <code>=</code>.
- Usar <code>$variable</code> para recuperar el valor.
- Las comillas conservan rutas con espacios como un único argumento.

---

## Recibir parámetros por posición

Guardar como <code>filtrar.sh</code>:

```bash
#!/usr/bin/env bash
entrada=$1
minimo=$2
salida=$3

seqkit seq -m "$minimo" "$entrada" > "$salida"
```

Ejecutar:

```bash
bash filtrar.sh secuencias.fasta 1000 filtradas.fasta
```

**Orden:** entrada, longitud mínima y salida.

---

## Pasar variables mediante el entorno

Dentro de <code>filtrar_env.sh</code>:

```bash
#!/usr/bin/env bash
minimo=${MIN_LEN:-1000}
seqkit seq -m "$minimo" "$1" > "$2"
```

Ejecutar con un valor específico:

```bash
MIN_LEN=1500 bash filtrar_env.sh secuencias.fasta largas.fasta
```

Si no se define <code>MIN_LEN</code>, se usa **1000**.

---

## Exportar una variable a procesos hijos

```bash
export THREADS=4
seqkit stats -j "$THREADS" secuencias.fasta
```

<code>export</code> permite que los procesos hijos reciban la variable.

Para usarla solo en una ejecución:

```bash
THREADS=4 bash analizar.sh secuencias.fasta
```

El script debe leer y utilizar el valor; definirlo no cambia automáticamente los hilos.

---

## Pasar opciones con nombre

Fragmento de un script:

```bash
while getopts "i:m:o:" opcion; do
  case "$opcion" in
    i) entrada=$OPTARG ;;
    m) minimo=$OPTARG ;;
    o) salida=$OPTARG ;;
    *) exit 2 ;;
  esac
done
```

La interfaz sería:

```bash
bash filtrar_opciones.sh -i secuencias.fasta -m 1000 -o largas.fasta
```

<code>getopts</code> lee opciones; el resto del script valida los valores y ejecuta el filtro.

---

## Comprobar entradas antes de procesar

```bash
if [[ ! -r "$entrada" || ! -s "$entrada" ]]; then
  echo "Entrada ilegible o vacía: $entrada" >&2
  exit 1
fi

if [[ ! "$minimo" =~ ^[1-9][0-9]*$ ]]; then
  echo "La longitud debe ser un entero positivo" >&2
  exit 2
fi
```

- <code>-r</code>: el archivo puede leerse.
- <code>-s</code>: tiene contenido.
- <code>exit</code>: termina con un estado explícito.

---

## Script completo: filtrar un FASTA

Guardar esta versión como <code>filtrar.sh</code>:

```bash
#!/usr/bin/env bash
set -euo pipefail

entrada=${1:?Falta el FASTA}
minimo=${2:?Falta la longitud mínima}
salida=${3:?Falta la salida}

[[ -r "$entrada" && -s "$entrada" ]] || exit 1
[[ "$minimo" =~ ^[1-9][0-9]*$ ]] || exit 2
[[ ! -e "$salida" ]] || {
  echo "La salida ya existe" >&2
  exit 1
}
seqkit seq -m "$minimo" "$entrada" > "$salida"
```

La carpeta de salida debe existir. Una selección sin registros puede producir un archivo vacío.

---

## Fallos y mensajes

```bash
set -euo pipefail
```

| Opción | Función |
|---|---|
| <code>-e</code> | Salir ante fallos, con excepciones en condiciones |
| <code>-u</code> | Detectar variables no definidas |
| <code>pipefail</code> | Detectar fallos anteriores al último comando del pipe |

```bash
bash filtrar.sh secuencias.fasta 1000 largas.fasta 2> filtro.log
```

Un fallo puede dejar una salida parcial: revisarla antes de reutilizarla.

---

## Repetir el análisis para varios FASTA

```bash
mkdir -p results
for entrada in data/*.fasta; do
  [[ -f "$entrada" ]] || continue
  nombre=$(basename "$entrada" .fasta)
  bash filtrar.sh "$entrada" 1000 "results/$nombre.fasta"
done
```

- Cada iteración procesa un archivo.
- El nombre identifica la salida de la muestra.
- Las comillas preservan nombres con espacios.

---

## Funciones para reutilizar operaciones

```bash
resumir() {
  seqkit stats -T "$1" > "$2"
}

resumir secuencias.fasta original.tsv
resumir largas.fasta filtradas.tsv
```

La función recibe argumentos igual que un script.

**Uso:** aplicar la misma operación a varias entradas sin duplicar comandos.

---

## Pasar valores a otros lenguajes

Filtrar un TSV con cabecera, identificador y longitud:

```bash
minimo=1000
awk -F '\t' -v limite="$minimo" \
  'NR == 1 || $2 >= limite' longitudes.tsv
```

Pasar datos a Python:

```bash
python contar_clases.py < datos.csv > clases.tsv
```

- <code>-v</code> entrega la variable a AWK.
- Python recibe el CSV por stdin —programa de la semana 06—.

---

## Un script puede incluir la descarga

Con Entrez Direct y SeqKit instalados:

```bash
#!/usr/bin/env bash
set -euo pipefail

consulta='"Zonotrichia capensis"[Organism] AND mitochondrion[Filter]'
esearch -db nuccore -query "$consulta" \
  | efetch -format fasta > secuencias.fasta
seqkit stats -T secuencias.fasta > resumen.tsv
```

Guardar consulta, fecha y accesiones para identificar los datos descargados.

---
layout: lab
---

## Ejercicio: procesar varias muestras

1. Preparar varios FASTA o descargarlos desde NCBI.
2. Ejecutar <code>filtrar.sh</code> con un umbral definido.
3. Generar una salida por muestra.
4. Comparar estadísticas antes y después.
5. Conservar script, parámetros y logs.

---

## Documentación

- [GNU Bash · manual](https://www.gnu.org/software/bash/manual/bash.html)
- [GNU Bash · parámetros](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html)
- [SeqKit · comandos](https://bioinf.shenwei.me/seqkit/usage/)

