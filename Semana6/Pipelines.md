---
title: Creación de pipelines
---
## AWK

### ¿Qué es `awk`?

`awk` ejecuta programas escritos en el lenguaje awk, el cual está especializado en la manipulación de texto y en el procesamiento de campos y registros. Un programa awk consta de patrones y acciones; cuando la entrada coincide con un patrón se ejecuta la acción asociada. La entrada se interpreta como una secuencia de registros (por defecto, líneas), cada uno dividido en campos (`$1`, `$2`, …). De forma predeterminada los campos se separan por espacios o tabulaciones.

![](https://cdn.packtpub.com/article-hub/articles/3756c603b388981ea030241baa0925da.png)
### Casos de uso

- **Filtrar registros**: `awk` permite seleccionar líneas que cumplan condiciones sobre ciertos campos. Por ejemplo, para obtener solo las variantes de un VCF cuya profundidad (campo 8) sea mayor que 30:    
- **Extraer columnas de un VCF**: para imprimir cromosoma, posición y genotipo (campo 10) de cada variante:

**Comando de Búsqueda**
```bash
awk -F',' '$3 ~ /12/' alumnos.txt
```

**Filtrado con lógica**
```bash
awk -F',' '$3 >= 12 && $1 ~ /Flores/' alumnos.txt
```

**Controlar la impresión de columnas**
```
awk -F',' '$3 >= 12 && $2 ~ /Flores/ { print $4" "$1}' alumnos.txt
```

**Sumar columnas y dividir por el numero de filas**
```bash
awk -F',' '{sum+=$3}END{print sum/NR}' alumnos.txt
```

****
### Consejos

- Usa la opción `-F` para definir separadores de campos personalizados (por ejemplo, tabulador con `-F "\t"`).
- Puedes encapsular programas awk en archivos (`-f script.awk`) para reutilizar código complejo.
## Seqtk

`Seqtk` es una herramienta ligera y rápida para procesar secuencias en formato **FASTA** o **FASTQ**. Puede leer archivos comprimidos con gzip y realizar operaciones como conversión de formatos, submuestreo, filtrado por longitud o generación del complemento inverso[hpc.nih.gov](https://hpc.nih.gov/apps/seqtk.html#:~:text=Seqtk%20is%20a%20fast%20and,be%20optionally%20compressed%20by%20gzip).

### Comandos útiles

- **Submuestrear lecturas**: seleccionar aleatoriamente el 10 % de lecturas de un archivo FASTQ:

```bash
seqtk sample z.capensis_mito.fasta 0.01
```
Pueden verificar que se muestrea 5 fastas : 
```bash
seqtk sample z.capensis_mito.fasta 0.01 | grep '>' | wc -l
```

- **Filtrar por longitud mínima**: extraer solo secuencias de más de 100 pb:
    
```bash 
seqtk seq -L 100 z.capensis_mito.fasta
seqtk seq -L 1000 z.capensis_mito.fasta | seqtk seq -C ## Limpian los codigos
```

	
- **Obtener el complemento reverso**: invertir y complementar las secuencias en un FASTA:

```bash
seqtk seq -r z.capensis_mito.fasta
grep -A 6 KC693267.1 z.capensis_mito.fasta | seqtk seq -r #Filtrando un solo fasta
```


### Consejos

- `seqtk sample` admite números enteros para seleccionar exactamente _n_ secuencias en lugar de una fracción.
    
- Puedes combinar `seqtk` con tuberías; por ejemplo, generar un submuestreo y filtrar por longitud en un solo comando.
    

## Git

`Git` es un sistema de control de versiones que permite a los usuarios registrar **instantáneas** de su trabajo (commits), lo que facilita revisar el progreso, arreglar errores y comprender cuándo y por qué se realizaron cambios [phoenixnap.com](https://phoenixnap.com/kb/git-commit#:~:text=Git%20is%20a%20version%20control,and%20why%20changes%20were%20made). 

### Commit

El comando `git commit` crea una instantánea de los archivos que están en el área de preparación (staging) e incluye metadatos como autor, fecha y un mensaje descriptivo[phoenixnap.com](https://phoenixnap.com/kb/git-commit#:~:text=What%20Is%20git%20commit%3F). Un flujo típico es:

`git add archivo1 archivo2   # selecciona los cambios a incluir git commit -m "Descripción de los cambios"`

### Clone

Para iniciar el trabajo con un proyecto existente se usa `git clone`. Este comando clona un repositorio en un directorio nuevo, crea ramas de seguimiento remoto para cada rama del repositorio original y revisa una rama inicial basada en la rama activa del repositorio remoto[git-scm.com](https://git-scm.com/docs/git-clone#:~:text=Clones%20a%20repository%20into%20a,cloned%20repository%E2%80%99s%20currently%20active%20branch). Ejemplo:

`git clone https://github.com/usuario/proyecto.git cd proyecto`

### Push

Cuando terminas tu trabajo local y quieres compartir los cambios, `git push` actualiza las referencias remotas usando las referencias locales y envía los objetos necesarios al servidor remoto[git-scm.com](https://git-scm.com/docs/git-push#:~:text=git,along%20with%20associated%20objects). Un uso común es:

`git push origin main`

### Otros comandos básicos

- `git status`: muestra el estado de los archivos (modificados, sin seguimiento, preparados).
    
- `git pull`: actualiza tu copia local combinando los cambios remotos en tu rama actual.
    
- `git branch`: lista ramas locales o crea nuevas (`git branch nueva-rama`).
    
- `git switch`: cambia de rama (`git switch nombre-rama`) o crea y cambia con `-c`.
    
- `git log`: muestra el historial de commits; puedes limitar por fechas o rutas.
    

Estos comandos te permiten gestionar scripts y notas del curso, compartirlos en un repositorio remoto (por ejemplo, GitHub o GitLab) y mantener un historial claro de tus análisis.

## xargs

`xargs` (abreviatura de _extended arguments_) es una utilidad de UNIX que convierte la entrada estándar en argumentos para un comando. Esto resulta útil cuando una herramienta produce una lista de elementos que otra herramienta sólo acepta como argumentos, por ejemplo, para evitar el error «argument list too long». Algunos comandos (como `grep` o `awk`) pueden leer desde la entrada estándar, pero otros (`cp`, `rm`, `echo`, etc.) necesitan argumentos explícitos.

### Ejemplos

- **Contar secuencias en varios archivos FASTA**: para cada archivo `*.fasta` en el directorio, contar cuántas cabeceras (`>`) tiene:
    
    `ls *.fasta | xargs -n 1 -I {} sh -c 'echo -n "{}: "; grep -c ">" {}'`
    
- **Convertir múltiples FASTQ a FASTA**: procesar una lista de archivos utilizando `seqtk` en cada uno:
    
    `ls *.fastq | xargs -n 1 -I {} seqtk seq -A {} > {}.fasta`
    
- **Submuestrear en paralelo**: ejecutar varias instancias de `seqtk sample` en paralelo usando `-P` para especificar el número de procesos simultáneos:
    
    `ls *.fastq | xargs -n 1 -P 4 -I {} seqtk sample {} 0.05 > {}_sub.fastq`
    
- **Descargar secuencias desde NCBI**: si tienes un archivo `ids.txt` con accesiones, puedes usar `xargs` para llamar a `efetch` repetidamente (requiere tener instalados los scripts de _Entrez_):
    
    `cat ids.txt | xargs -n 1 -I {} sh -c 'efetch -db nucleotide -id {} -format fasta >> sequences.fasta'`
    

### Consejos

- Usa la opción `-n` para limitar cuántos argumentos se pasan a cada ejecución del comando.
    
- La opción `-I {}` permite insertar el argumento en una posición específica dentro de la línea de comando.
    
- Con `-P` puedes paralelizar tareas independientes; ideal para aprovechar varios núcleos en análisis de muchos archivos.
    

## Ejercicios de pipelines

Los siguientes retos están diseñados para que combines los comandos vistos en clase (`grep`, `sed`, `cut`, `sort`, `uniq`, `paste`, redirecciones, tuberías, `awk`, `seqtk`, `xargs`, `efetch`, `esearch`, etc.) y construyas **pipelines** reproducibles. Trabaja con archivos de secuencias (FASTA/FASTQ), tablas CSV y anotaciones **GFF**.

1. **Descarga y preparación de un conjunto de secuencias**
    
    - Usa `esearch` para obtener los primeros 20 accesiones del gen 16S de _Escherichia coli_ en la base de datos `nuccore`.
        
    - Almacena esos IDs en un archivo `ids_16s.txt` (`esearch -db nuccore -query "Escherichia coli[Organism] AND 16S[Gene]" | efetch -format acc > ids_16s.txt`).
        
    - Usa `xargs` con `efetch` para descargar las secuencias en formato FASTA y guárdalas en `ecoli_16s.fasta`.
        
    - Comprueba cuántas secuencias descargaste usando `grep -c ">"` o un script `awk`.
        
2. **Resumir longitudes de secuencia**
    
    - A partir de `ecoli_16s.fasta`, calcula la longitud de cada secuencia con `awk` y guarda los resultados en un archivo `lengths.txt`.
        
    - Ordena las longitudes (`sort -n`), usa `uniq -c` para obtener la frecuencia de cada longitud y redirige el resumen a `longitud_frecuencias.txt`.
        
    - Une el archivo de IDs con el de longitudes utilizando `paste` para crear una tabla de dos columnas (`ID\tLongitud`).
        
3. **Anotación y filtrado de GFF**
    
    - Descarga un archivo de anotación GFF3 de NCBI (por ejemplo, de un genoma bacteriano) y descomprímelo.
        
    - Usa `grep -v "^#"` para eliminar las líneas de cabecera y `awk` para extraer las columnas **cromosoma**, **tipo de característica** y **atributos**.
        
    - Filtra únicamente las anotaciones de tipo `gene` y guarda los resultados en `genes.tsv`.
        
    - Extrae los IDs de gen y sus posiciones de inicio y fin usando `cut` o expresiones regulares con `sed`.
        
4. **Integración de anotaciones con secuencias**
    
    - Con el archivo `genes.tsv`, selecciona los genes cuya longitud (fin - inicio + 1) sea mayor a 1000 pb usando `awk`.
        
    - Obtén las secuencias de estos genes a partir del FASTA original mediante `seqtk subseq` (requiere un archivo con regiones en formato BED; puedes generarlo con `awk '{print $1, $2-1, $3}' genes_largos.tsv` y convertirlo a tabulaciones).
        
    - Utiliza `cut`, `paste` y `awk` para construir un archivo CSV con los campos: **ID del gen**, **longitud**, **producto** (extraído de la columna de atributos) y **secuencia**.
        
5. **Análisis de lecturas y calidad**
    
    - Suponiendo que tienes un archivo `lecturas.fastq` con lecturas de Illumina, usa `seqtk seq -A` para convertirlo a FASTA y luego `awk` para calcular la longitud media de las lecturas.
        
    - Usa `grep` o `awk` para buscar lecturas que contengan un motivo específico (por ejemplo, `ATGCAT`), contando cuántas veces aparece el motivo.
        
    - Implementa un pipeline donde sub-muestreas el 5 % de las lecturas (`seqtk sample`), filtras por longitud (>150 pb) y extraes solo aquellas que contienen el motivo, todo en un único comando enlazado por tuberías y redirecciones.
        
6. **Resumir una tabla CSV**
    
    - Dada una tabla `muestras.csv` con columnas `muestra,organismo,fecha,profundidad`, utiliza `cut` y `sort` para agrupar por organismo y resumir cuántas muestras hay de cada uno (`cut -d, -f2`).
        
    - Emplea `awk -F, '{sum[$2]++; next} END {for (org in sum) print org "," sum[org]}'` para producir un resumen rápido en CSV.
        
7. **Automatizar procesos con `xargs` y bucles**
    
    - Si tienes múltiples archivos GFF y quieres extraer todos los genes de cada uno, escribe un comando `ls *.gff | xargs -n 1 -I {} bash -c 'grep -v "^#" {} | awk -F"\t" "$3 == \"gene\"" > {}.genes.tsv'`.
        
    - Luego, combina todos los resultados (`cat *.genes.tsv > todos_los_genes.tsv`) y obtén estadísticas globales (número total de genes, promedio de longitud, etc.) con `awk`.
        

Estos ejercicios te ayudarán a reforzar la creación de **pipelines** potentes combinando las herramientas vistas en clase. 