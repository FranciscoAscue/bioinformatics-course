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

### Incializar un repositorio (local)
```bash
git config --global user.name "FranciscoAscue"
git config --global user.email "correo@gmail.com" 
git init
```

