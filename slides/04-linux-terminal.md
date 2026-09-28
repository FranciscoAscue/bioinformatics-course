---
theme: academic
layout: course-cover
title: Linux y terminal
author: Francisco Ascue
week: Semana 04
unit: Unidad 1 · Construir el método
colorSchema: dark
transition: fade-out
mdc: true
drawings:
  persist: false
---

<div class="template-badge">¿Qué puedo hacer en la terminal de linux?</div>

# Linux y terminal

<p class="lead">¿Cuales son los principios para trabajar en una terminal de linux? </p>
<p class="lead">Esta clase tiene como finaliad dar los principios de linux/terminal para trabajar en bioinformatica</p>

<!--
[sin clic] Preguntar: ¿alguien ha abierto una terminal antes? ¿Qué les pareció?
-->

---
layout: center
---

<div class="template-badge">Ruta de la clase</div>

# Aplicaciones de linux en bioinformatica

<div class="grid grid-cols-5 gap-3 mt-8 text-center text-sm">
  <div v-click class="step"><b>1</b><strong>¿Por qué Linux?</strong><small>el entorno del análisis</small></div>
  <div v-click class="step"><b>2</b><strong>Shell</strong><small>bash, zsh y la terminal</small></div>
  <div v-click class="step"><b>3</b><strong>Comandos</strong><small>navegar, crear, filtrar</small></div>
  <div v-click class="step"><b>4</b><strong>Redirección</strong><small>pipes y flujos de datos</small></div>
  <div v-click class="step"><b>5</b><strong>Bioinformática</strong><small>particularidades del análisis</small></div>
</div>

<div v-click class="synthesis mt-8 text-center">En cada paso: <strong>¿qué resuelve?, ¿qué supone?, ¿qué puede reemplazar?</strong></div>

---
layout: statement
class: glow-right
---

<div class="template-badge">Pregunta guía</div>

# ¿Por qué los bioinformáticos trabajan en Linux?
<br>
<div class="grid grid-cols-3 gap-7 mt-10 w-full">
  <div v-click class="panel"><strong>Software</strong><p>BLAST, BWA, GATK, Samtools… se distribuyen y mantienen nativamente en Linux.</p></div>
  <div v-click class="panel violet"><strong>Servidores HPC</strong><p>Los clústeres de cómputo de alto rendimiento corren Linux; sin terminal no hay acceso.</p></div>
  <div v-click class="panel green"><strong>Reproducibilidad</strong><p>Un script Bash captura exactamente qué se ejecutó, en qué orden y con qué parámetros.</p></div>
</div>

<div v-click class="synthesis mt-8 text-center">La terminal es una herramienta fundamental en la bioinformatica moderna.</div>

---
layout: visual-right
image: https://www.fpgakey.com/uploads/images/editor/20200709/183155A%20High-level%20GNU%20Linux%20system%20architecture.png
fit: contain
credit: Linux System Overview
sourceUrl: https://www.fpgakey.com/tutorial/section505?srsltid=AU7gw4U3zfBRB9xQwDb5ZpLXqVuv-SJUsl9KmqS6ho5N5-e9hiYfW0n8
---

<div class="template-badge">El sistema operativo</div>

## Linux: núcleo y distribuciones
<v-clicks>

- **Núcleo (kernel)** Linux + herramientas GNU = sistema completo.
- Distribuciones comunes en bioinformática: **Ubuntu**, **Debian**, **CentOS/RHEL**, **Arch**.
- macOS comparte filosofía UNIX; Windows puede usar **WSL2**.
- Software libre: el código fuente de las herramientas es accesible y auditable.

</v-clicks>
<div v-click class="synthesis mt-5">Conocer la distribución importa porque cambian el gestor de paquetes y las rutas del sistema.</div>

---
layout: visual-right
image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymC12h_a3SjMOAhpm8-3-aXqXoDnv1q4xkd3jkeOdvJRecB3YSKy_B2M&s=10
fit: contain
credit: Linux System Overview
sourceUrl: https://www.fpgakey.com/tutorial/section505?srsltid=AU7gw4U3zfBRB9xQwDb5ZpLXqVuv-SJUsl9KmqS6ho5N5-e9hiYfW0n8
---

<div class="template-badge">El sistema operativo</div>

## Linux: núcleo y distribuciones

- **Núcleo (kernel)** Linux + herramientas GNU = sistema completo.
- Distribuciones comunes en bioinformática: **Ubuntu**, **Debian**, **CentOS/RHEL**, **Arch**.
- macOS comparte filosofía UNIX; Windows puede usar **WSL2**.
- Software libre: el código fuente de las herramientas es accesible y auditable.



<div class="synthesis mt-5">Conocer la distribución importa porque cambian el gestor de paquetes y las rutas del sistema.</div>


---

<div class="template-badge">13 · PIZARRA</div>



---
layout: default
---

<div class="template-badge">Anatomía del sistema</div>

### El árbol de directorios de Linux

<div class="grid grid-cols-2 gap-2 mt-2">
  <div v-click class="panel">
    <div class="eyebrow">Directorios clave</div>
    <table class="text-sm w-full mt-2">
      <tr><td><code>/</code></td><td>raíz del sistema</td></tr>
      <tr><td><code>/home/user</code></td><td>carpeta personal (<code>~</code>)</td></tr>
      <tr><td><code>/bin /usr/bin</code></td><td>ejecutables del sistema</td></tr>
      <tr><td><code>/tmp</code></td><td>archivos temporales (se borra al reiniciar)</td></tr>
      <tr><td><code>/etc</code></td><td>configuración del sistema</td></tr>
      <tr><td><code>/data /mnt</code></td><td>puntos de montaje comunes en HPC</td></tr>
    </table>
  </div>
  <div v-click class="panel amber">
    <div class="eyebrow">Rutas</div>
    <p class="text-sm"><strong>Absoluta:</strong> empieza en <code>/</code><br>
    ej. <code>/home/user/data/reads.fastq</code></p>
    <p class="text-sm mt-3"><strong>Relativa:</strong> desde el directorio actual<br>
    ej. <code>../data/reads.fastq</code></p>
    <p class="text-sm mt-3"><code>.</code> = directorio actual  <br>
     <code>..</code> = directorio padre</p>
  </div>
</div>

<div v-click class="warn mt-5"><strong>Mayúsculas y minúsculas importan:</strong> <code>Genome.fa</code> ≠ <code>genome.fa</code> en Linux.</div>

---
layout: default
---

<div class="template-badge">La interfaz de texto</div>

## ¿Qué es una shell?

<div class="grid grid-cols-3 gap-5 mt-7">
  <div v-click class="panel"><div class="eyebrow">Definición</div><h2>Intérprete de comandos</h2><p>Programa que lee lo que escribes, lo interpreta y ejecuta otros programas.</p></div>
  <div v-click class="panel amber"><div class="eyebrow">Bash</div><h2>Bourne Again Shell</h2><p>Shell por defecto en la mayoría de sistemas Linux. Base de la mayoría de scripts bioinformáticos.</p></div>
  <div v-click class="panel violet"><div class="eyebrow">Zsh</div><h2>Z Shell</h2><p>Predeterminada en macOS desde 2019. Compatible con Bash, con autocompletado y plugins avanzados (Oh My Zsh).</p></div>
</div>

<div v-click class="synthesis mt-7 text-center">Bash y Zsh comparten la mayor parte de la sintaxis; las diferencias importan en scripts de producción.</div>

---
layout: default
---

<div class="template-badge">Leer el prompt</div>

## La línea de comandos, paso a paso

```bash
[user@servidor ~]$ comando --opcion argumento
```

<div class="grid grid-cols-4 gap-4 mt-6 text-sm">
  <div v-click class="stat-card"><strong><code>user</code></strong><p>nombre de usuario actual</p></div>
  <div v-click class="stat-card"><strong><code>servidor</code></strong><p>nombre del equipo / host</p></div>
  <div v-click class="stat-card"><strong><code>~</code></strong><p>directorio actual (<code>/home/user</code>)</p></div>
  <div v-click class="stat-card"><strong><code>$</code></strong><p>usuario normal (<code>#</code> = root)</p></div>
</div>

<div class="mt-7" v-click>

```bash
$ echo "Hola bioinformática"   # imprimir texto
$ pwd                           # directorio actual
$ whoami                        # usuario actual
$ date                          # fecha y hora del sistema
```

</div>

<div v-click class="synthesis mt-5 text-center"><strong>Tab</strong> autocompleta · <strong>↑/↓</strong> navega historial · <strong>Ctrl+C</strong> interrumpe · <strong>Ctrl+L</strong> limpia pantalla</div>

---
layout: default
---

<div class="template-badge">Comandos esenciales · Navegación</div>

## Moverse y explorar el sistema de archivos

<div class="grid grid-cols-2 gap-6 mt-5">
  <div>

```bash
# Navegar
pwd           # Print Working Directory
cd /ruta/     # Change Directory
cd ~          # ir a home
cd ..         # subir un nivel
cd -          # volver al directorio anterior

# Listar
ls            # listar archivos
ls -l         # formato largo (permisos, tamaño)
ls -lh        # tamaño legible (KB, MB)
ls -la        # incluir archivos ocultos (.)
ls -lt        # ordenar por fecha
```

  </div>
  <div v-click>

```bash
# Ver árbol
tree -L 2     # árbol hasta 2 niveles

# Ejemplo de salida ls -lh:
# -rw-r--r-- 1 user bio 2.1G genome.fa
# │           │      │   │    └── nombre
# │           │      │   └── tamaño
# │           │      └── grupo
# │           └── propietario
# └── permisos (rwx)
```

  </div>
</div>

<div v-click class="warn mt-5"><strong>Permisos (rwx):</strong> r = leer · w = escribir · x = ejecutar. Sin <code>x</code> un script no puede correr.</div>

---
layout: default
---

<div class="template-badge">Comandos esenciales · Archivos</div>

## Crear, copiar, mover y eliminar

<div class="grid grid-cols-2 gap-6 mt-4">
  <div>

```bash
# Crear
mkdir resultados          # crear directorio
mkdir -p data/raw/fastq   # crear jerarquía completa
touch notas.txt           # crear archivo vacío

# Copiar y mover
cp origen.fa destino.fa   # copiar archivo
cp -r carpeta/ backup/    # copiar directorio (-r)
mv archivo.fa data/       # mover o renombrar
```

  </div>
  <div v-click>

```bash
# Eliminar (¡CUIDADO! No hay papelera)
rm archivo.txt            # eliminar archivo
rm -r carpeta/            # eliminar directorio
rm -i archivo.txt         # pedir confirmación

# Ver contenido
cat archivo.txt           # imprimir todo
less archivo.txt          # paginador interactivo
head -20 reads.fastq      # primeras 20 líneas
tail -20 reads.fastq      # últimas 20 líneas
```

  </div>
</div>

<div v-click class="warn mt-5"><strong>No existe un "undo" para <code>rm</code></strong> en Linux. Usar <code>rm -i</code> o confirmar antes de ejecutar con datos críticos.</div>

---
layout: default
---

<div class="template-badge">Comandos esenciales · Texto</div>

## Buscar, filtrar y procesar texto

<div class="grid grid-cols-2 gap-6 mt-4">
  <div>

```bash
# Buscar patrones (grep)
grep "ATCG" secuencias.fa        # buscar patrón
grep -c ">" archivo.fa           # contar coincidencias
grep -v "^#" variants.vcf        # excluir líneas con #
grep -i "gene" anotacion.gff     # ignorar mayúsculas
grep -n "error" log.txt          # mostrar número de línea

# Buscar archivos (find)
find . -name "*.fastq"           # buscar por extensión
find . -name "*.fa" -size +1G    # archivos > 1 GB
```

  </div>
  <div v-click>

```bash
# Ordenar y contar
sort archivo.txt                 # ordenar
sort -k2,2n tabla.tsv            # por columna 2 numérica
uniq -c lista.txt                # contar repetidos
wc -l archivo.fastq              # contar líneas
wc -c genome.fa                  # contar caracteres

# Cortar columnas (cut / awk)
cut -f1,3 tabla.tsv              # columnas 1 y 3
awk '{print $1, $3}' tabla.tsv   # idem con awk
awk '$3 > 30' quality.tsv        # filtrar por valor
```

  </div>
</div>

<div v-click class="synthesis mt-5 text-center"><code>grep</code> + <code>cut</code> + <code>awk</code> = el navaja suiza del texto bioinformático.</div>

---
layout: default
---

<div class="template-badge">Redirección y tuberías</div>

## El flujo de datos entre comandos

<div class="grid grid-cols-2 gap-6 mt-5">
  <div>

```bash
# Redirección de salida
comando > salida.txt        # sobrescribir
comando >> salida.txt       # añadir al final
comando 2> errores.txt      # redirigir stderr
comando &> todo.txt         # stdout y stderr juntos

# Entrada
comando < entrada.txt       # leer desde archivo
```

  </div>
  <div v-click>

```bash
# Tuberías (pipe |)
# La salida de un comando es la entrada del siguiente

grep ">" genome.fa | wc -l
# contar secuencias en un FASTA

cat reads.fastq | grep "^@" | wc -l
# contar lecturas en un FASTQ

sort variants.vcf | uniq -c | sort -rn | head -10
# variantes más frecuentes
```

  </div>
</div>

<div v-click class="synthesis mt-5 text-center">Los pipes son la filosofía Unix: herramientas pequeñas que se combinan para resolver problemas grandes.</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://doi.org/10.1371/journal.pbio.1001745" target="_blank">Buffalo V. (2015). Bioinformatics Data Skills. O'Reilly Media.</a></Footnote>
</Footnotes>

---
layout: default
---

<div class="template-badge">Variables y entorno</div>

## Variables de shell y entorno del sistema

<div class="grid grid-cols-2 gap-6 mt-4">
  <div>

```bash
# Variables de usuario
nombre="genoma_ref"
echo $nombre              # imprimir variable
echo "Archivo: ${nombre}.fa"

# Variables de entorno importantes
echo $HOME    # directorio home
echo $PATH    # rutas donde bash busca programas
echo $USER    # usuario actual
echo $SHELL   # shell activa (/bin/bash o /bin/zsh)

# Ver todas las variables de entorno
env | less
printenv PATH
```

  </div>
  <div v-click>

```bash
# Modificar PATH (añadir herramienta al entorno)
export PATH="$PATH:/opt/miniconda3/bin"

# Variables en scripts
muestras=("control1" "control2" "caso1")
for muestra in "${muestras[@]}"; do
    echo "Procesando: $muestra"
done

# Expansión de llaves
echo resultado_{1..5}.txt
# resultado_1.txt resultado_2.txt ... resultado_5.txt
```

  </div>
</div>

<div v-click class="warn mt-5"><strong>Sin comillas dobles</strong> las variables con espacios se parten: usar siempre <code>"$variable"</code>.</div>

---
layout: default
---

<div class="template-badge">Permisos y seguridad</div>

## Entender los permisos de archivos

```bash
ls -l script.sh
# -rwxr-xr-- 1 user bio 1234 Sep 28 script.sh
#  │││ │││ │││
#  │││ │││ └──── otros (r--)
#  │││ └──────── grupo (r-x)
#  └──────────── propietario (rwx)
```

<div class="grid grid-cols-2 gap-6 mt-5">
  <div v-click>

```bash

# Cambiar permisos (chmod)

chmod +x script.sh         # hacer ejecutable

chmod 755 script.sh        # rwxr-xr-x (numérico)

chmod 644 datos.txt        # rw-r--r--

chmod -R 755 carpeta/      # recursivo

# Cambiar propietario (chown)

chown user:grupo archivo.txt
```

  </div>
  <div v-click class="panel amber">
    <div class="eyebrow">Tabla de permisos numéricos</div>
    <table class="text-sm w-full mt-2">
      <tr><th>Nº</th><th>Permisos</th><th>Uso típico</th></tr>
      <tr><td><code>755</code></td><td>rwxr-xr-x</td><td>scripts, directorios</td></tr>
      <tr><td><code>644</code></td><td>rw-r--r--</td><td>archivos de datos</td></tr>
      <tr><td><code>600</code></td><td>rw-------</td><td>claves SSH, configs</td></tr>
      <tr><td><code>777</code></td><td>rwxrwxrwx</td><td>evitar en producción</td></tr>
    </table>
  </div>
</div>

---
layout: default
---

<div class="template-badge">Procesos y recursos</div>

## Monitorear y gestionar procesos

<div class="grid grid-cols-2 gap-6 mt-4">
  <div>

```bash
# Ver procesos activos
top                  # monitor en tiempo real
htop                 # versión mejorada de top
ps aux               # listar todos los procesos
ps aux | grep bwa    # buscar proceso específico

# Gestionar procesos
Ctrl+C    # interrumpir proceso en primer plano
Ctrl+Z    # pausar proceso (enviar a segundo plano)
bg        # reanudar proceso en segundo plano
fg        # traer proceso al primer plano
jobs      # listar procesos en segundo plano
```

  </div>
  <div v-click>

```bash
# Ejecutar en segundo plano
bwa mem ref.fa reads.fastq > aln.sam &
# El & al final libera la terminal

# Monitorear uso de recursos
df -h           # espacio en disco
du -sh carpeta/ # tamaño de directorio
free -h         # memoria RAM disponible

# Matar procesos
kill PID             # terminar proceso
kill -9 PID          # forzar terminación
killall nombre_prog  # matar todos los procesos
```

  </div>
</div>

<div v-click class="synthesis mt-5 text-center">En un servidor HPC, no terminar procesos huérfanos puede bloquear recursos para otros usuarios.</div>

---
layout: statement
class: glow-left
---

<div class="template-badge">Conexión remota</div>

## SSH: trabajar en servidores remotos

```bash
ssh usuario@servidor.universidad.edu.pe
ssh -p 2222 usuario@192.168.1.100     # puerto específico
```

<div class="grid grid-cols-3 gap-6 mt-8 w-full">
  <div v-click class="panel"><strong>Copiar archivos</strong><p><code>scp archivo.fa user@server:/data/</code><br>Copia segura entre local y remoto.</p></div>
  <div v-click class="panel violet"><strong>sftp</strong><p><code>sftp user@server</code><br>Sincroniza solo cambios; más eficiente para grandes volúmenes.</p></div>
  <div v-click class="panel green"><strong>Screen / Tmux</strong><p><code>screen -S analisis</code><br>Mantiene sesiones activas aunque se cierre la conexión SSH.</p></div>
</div>

<div v-click class="synthesis mt-7 text-center">Usar <strong>tmux</strong> o <strong>screen</strong> antes de lanzar análisis largos: la desconexión no interrumpe el proceso.</div>

---
layout: default
---

<div class="template-badge">Compresión y archivado</div>

## Manejar archivos comprimidos en bioinformática

<div class="grid grid-cols-2 gap-6 mt-4">
  <div>

```bash
# Gzip (formato estándar en bioinformática)

gzip reads.fastq             # comprime → reads.fastq.gz
gunzip reads.fastq.gz        # descomprime
gzip -d reads.fastq.gz       # idem

zcat reads.fastq.gz          # ver sin descomprimir
zcat reads.fastq.gz | head   # primeras líneas 
bgzip genome.fa              # gzip indexable (samtools)

# Tar (archivar + comprimir)

tar -czf backup.tar.gz carpeta/   # crear
tar -xzf backup.tar.gz            # extraer
tar -tzf backup.tar.gz            # listar contenido
```

  </div>
  <div v-click class="panel amber">
    <div class="eyebrow">Formatos comunes comprimidos</div>
    <table class="text-sm w-full mt-2">
      <tr><th>Formato</th><th>Extensión</th><th>Herramienta</th></tr>
      <tr><td>FASTQ comprimido</td><td><code>.fastq.gz</code></td><td><code>zcat, seqtk</code></td></tr>
      <tr><td>FASTA comprimido</td><td><code>.fa.gz</code></td><td><code>samtools faidx</code></td></tr>
      <tr><td>VCF comprimido</td><td><code>.vcf.gz</code></td><td><code>bcftools, tabix</code></td></tr>
      <tr><td>BAM (binario)</td><td><code>.bam</code></td><td><code>samtools view</code></td></tr>
    </table>
  </div>
</div>

<div v-click class="synthesis mt-5 text-center">Los datos NGS siempre viajan comprimidos; trabajar con <code>zcat</code> evita descomprimir y duplicar el espacio en disco.</div>

---
layout: default
class: compact
---

<div class="template-badge">Particularidades bioinformáticas · Formatos de texto</div>

## Los formatos que verás a diario

| Formato | Descripción | Separador | Comando útil |
|---|---|---|---|
| **FASTA** | secuencias de ADN/proteína | `>cabecera` | `grep -c ">" genome.fa` |
| **FASTQ** | lecturas NGS + calidad | `@cabecera` | `wc -l reads.fq \| awk '{print $1/4}'` |
| **SAM/BAM** | alineamientos | TAB / binario | `samtools view -h aln.bam \| head` |
| **VCF** | variantes genéticas | TAB | `grep -v "^#" variants.vcf \| wc -l` |
| **GFF/GTF** | anotaciones genómicas | TAB | `awk '$3=="gene"' anno.gff \| wc -l` |
| **BED** | coordenadas genómicas | TAB | `cut -f1-3 regions.bed \| sort -k1,1` |

<div v-click class="synthesis mt-5 text-center">Conocer el formato permite filtrar sin software especializado: <code>grep</code>, <code>awk</code> y <code>cut</code> son suficientes para inspeccionar.</div>

---
layout: default
---

<div class="template-badge">Particularidades bioinformáticas · Rutas</div>

## Gestionar software con Conda / Mamba

<div class="grid grid-cols-2 gap-6 mt-4">
  <div>

```bash
# Instalar Miniconda (una vez)
wget https://repo.anaconda.com/miniconda/\
     Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh

# Crear entornos aislados
conda create -n bwa_env bwa samtools -c bioconda
conda activate bwa_env
conda deactivate

# Buscar e instalar paquetes
conda search fastqc -c bioconda
conda install -c bioconda fastqc
mamba install -c bioconda trimmomatic   # más rápido
```

  </div>
  <div v-click>

```bash
# Exportar entorno (reproducibilidad)
conda env export > environment.yml
conda env create -f environment.yml

# Listar entornos y paquetes
conda env list
conda list                      # paquetes activos

# Canales bioinformáticos
# bioconda → BLAST, BWA, SAMtools, FastQC…
# conda-forge → dependencias generales
```

  </div>
</div>

<div v-click class="synthesis mt-5 text-center">Un <code>environment.yml</code> + un script Bash reproducen el análisis en cualquier máquina Linux.</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://bioconda.github.io/" target="_blank">Bioconda Team. (2018). Bioconda: sustainable and comprehensive software distribution for the life sciences. Nature Methods.</a></Footnote>
</Footnotes>

---
layout: default
---

<div class="template-badge">Buenas prácticas · Organización</div>

## Estructura de un proyecto bioinformático

<div class="grid grid-cols-2 gap-2 mt-2">
  <div>

```
proyecto/
├── data/
│   ├── raw/          # datos originales (solo lectura)
│   │   └── reads_R1.fastq.gz
│   └── processed/    # datos transformados
├── results/
│   ├── qc/           # reportes FastQC
│   ├── alignments/   # archivos BAM
│   └── variants/     # archivos VCF
├── scripts/          # Bash, Python, R
├── envs/
│   └── environment.yml
├── logs/             # salida de cada paso
└── README.md         # descripción del proyecto
```

  </div>

  <div class="mt-15">
    <div class="panel violet">
      <div class="eyebrow">Principios de organización</div>
      <ul class="text-sm mt-2">
        <li><strong>Raw data es sagrado:</strong> nunca modificar, solo leer.</li>
        <li><strong>Un script por paso:</strong> más fácil de depurar.</li>
        <li><strong>Logs con fecha:</strong> <code>analysis_$(date +%Y%m%d).log</code></li>
        <li><strong>README obligatorio:</strong> describir datos, software y versiones.</li>
      </ul>
    </div>
  </div>
</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://doi.org/10.1371/journal.pcbi.1000424" target="_blank">Noble WS. (2009). A quick guide to organizing computational biology projects. PLoS Comput Biol.</a></Footnote>
</Footnotes>

---
layout: default
---

<div class="template-badge">Expresiones regulares · Regex</div>

## grep avanzado: patrones con significado

<div class="grid grid-cols-2 gap-6 mt-4">
  <div>

```bash
# Metacaracteres básicos

.      # cualquier carácter

*      # 0 o más del anterior

+      # 1 o más (grep -E o egrep)

?      # 0 o 1 del anterior

^      # inicio de línea

$      # fin de línea

[AGC]  # cualquier carácter del conjunto

[^AGC] # cualquier carácter EXCEPTO los del conjunto
```

  </div>
  <div v-click>

```bash
# Ejemplos en bioinformática

# Cabeceras FASTA que empiezan con chr
grep "^>chr" genome.fa

# Lecturas con calidad en cola (chars bajos)
grep -E "[!\"#$%]" reads.fastq

# Buscar codón de inicio ATG
grep -o "ATG[ACGT]\{30\}" secuencia.fa

# Variantes en cromosoma 1
grep "^chr1\b" variants.vcf
grep -E "^chr[0-9]+\t" variants.vcf

# Líneas NO vacías y NO comentarios
grep -vE "^$|^#" archivo.gff
```

  </div>
</div>

<div v-click class="synthesis mt-5 text-center"><code>grep -E</code> (extended regex) es más legible que <code>grep</code> básico para patrones complejos.</div>

---
layout: default
class: compact
---

<div class="template-badge">Síntesis · comandos esenciales</div>

<div style="font-size: 0.58em">
<table>
  <thead>
    <tr><th>Categoría</th><th>Comandos clave</th><th>Para qué</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Navegación</strong></td><td><code>pwd</code>, <code>cd</code>, <code>ls -lh</code></td><td>orientarse en el sistema</td></tr>
    <tr><td><strong>Archivos</strong></td><td><code>cp</code>, <code>mv</code>, <code>rm -i</code>, <code>mkdir -p</code></td><td>gestionar la estructura</td></tr>
    <tr><td><strong>Texto</strong></td><td><code>cat</code>, <code>less</code>, <code>head</code>, <code>tail</code></td><td>inspeccionar contenido</td></tr>
    <tr><td><strong>Buscar</strong></td><td><code>grep -v</code>, <code>grep -c</code>, <code>find</code></td><td>filtrar e identificar</td></tr>
    <tr><td><strong>Procesar</strong></td><td><code>cut</code>, <code>awk</code>, <code>sed</code>, <code>sort</code>, <code>uniq</code></td><td>transformar columnas</td></tr>
    <tr><td><strong>Flujo</strong></td><td><code>|</code>, <code>&gt;</code>, <code>&gt;&gt;</code>, <code>&lt;</code>, <code>&amp;&gt;</code></td><td>conectar y redirigir</td></tr>
    <tr><td><strong>Comprimir</strong></td><td><code>gzip</code>, <code>zcat</code>, <code>tar</code>, <code>bgzip</code></td><td>datos NGS</td></tr>
    <tr><td><strong>Sistema</strong></td><td><code>top</code>, <code>df -h</code>, <code>du -sh</code>, <code>chmod</code></td><td>recursos y permisos</td></tr>
    <tr><td><strong>Remoto</strong></td><td><code>ssh</code>, <code>scp</code>, <code>rsync</code>, <code>tmux</code></td><td>servidores HPC</td></tr>
    <tr><td><strong>Entorno</strong></td><td><code>conda activate</code>, <code>export PATH</code></td><td>software aislado</td></tr>
  </tbody>
</table>
</div>

<div v-click class="synthesis mt-5 text-center" style="font-size: 0.8em">No memorizar: practicar. El <code>--help</code> y <code>man comando</code> son la documentación siempre disponible.</div>

---
layout: statement
class: glow-bottom
---

<div class="template-badge">Síntesis</div>

# La terminal no es difícil; es diferente.

## La dificultad es aprender a leer el error y buscar la solución.

<br>
<br>
<div class="grid grid-cols-3 gap-5 mt-8 w-full">
  <div v-click class="panel"><strong>Navegar</strong><p>conocer el árbol de directorios</p></div>
  <div v-click class="panel violet"><strong>Procesar</strong><p>filtrar, transformar y redirigir texto</p></div>
  <div v-click class="panel green"><strong>Automatizar</strong><p>scripts reproducibles con control de errores</p></div>
</div>

---
layout: end
transition: fade-out
---

<div class="template-badge">Salida</div>

## Antes de cerrar la terminal, pregunta…

<v-clicks>

- ¿Qué directorio estoy y dónde está el archivo que necesito?

- ¿Guardé el comando exacto en el log o en el README?
- ¿Tengo espacio suficiente en disco antes de descomprimir?
- ¿Estoy en el entorno Conda correcto para este análisis?

</v-clicks>
