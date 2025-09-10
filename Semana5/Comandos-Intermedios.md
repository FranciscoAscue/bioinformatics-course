---
title: Comando de Linux intermedios
---
## Datos 

```csv
Stalin,Sanchez,12  
Carlos,Flores,9  
Claudio,Yenque,1  
Avril,Delgado,14  
Sebastian,Tito,17  
Antony,Flores,19  
Yosselin,Yañez,12  
Jacerp,Puma,10
```
## Comando `sort`

Es un comando de ordenación , puede ser según criterio alfabético, numérico o alfanumérico.

```bash
sort -t ',' -k3nr archivo.txt
``` 

`-t` : nuestro separador de columnas. 
`-k3` : el numero de columna. 
`n` : ordenación numérica.
`d`: ordenación alfabética.
`r` : invierte el orden. 
## Comando `cut`

Es un comando que sirve para separar columnas, usando para ello un delimitador con la opción `-d ","`  y indicando el campo o `-f 2` para separar columnas de un archivo. 

```bash
cut -d',' -f 2 archivo_sort.txt > apellidos.txt
``` 

Para crear un documento nuevo usaremos `>` para redireccionar.
## Comando `uniq`

Este comando permite identificar los registros únicos de un archivo. 

```bash
uniq apellidos.txt
uniq -c apellidos.txt
``` 

Con la opción `-c` podemos contar la repetición.

### Como puedo filtrar filas ? 

```bash
grep -i "Flores" archivo.txt
``` 

## Búsqueda en NCBI 

Detalles de búsqueda: 

```
("Zonotrichia capensis"[Organism] OR zonotrichia capensis[All Fields]) AND "Zonotrichia capensis"[porgn] AND mitochondrion[filter]
```

Para realizar la búsqueda a travez de entrez :

```bash
esearch -db nucleotide -query '("Zonotrichia capensis"[Orga  
nism] OR ("Zonotrichia capensis"[Organism] OR zonotrichia capensis[All Fields]))  
AND "Zonotrichia capensis"[Primary Organism] AND mitochondrion[filter]'
```

Para descargar 

```bash
esearch -db nucleotide -query '("Zonotrichia capensis"[Orga  
nism] OR ("Zonotrichia capensis"[Organism] OR zonotrichia capensis[All Fields]))  
AND "Zonotrichia capensis"[Primary Organism] AND mitochondrion[filter]' | efetch > z.capensis_mito.fasta
```

Ahora vamos a verificar el  numero de secuencias descargadas: 

```bash
grep ">" z.capensis_mito.fasta | wc -l
```

Aquí estamos usando el pipe `|` y este comando permite conectar comandos en una sola linea. 
## Comando `sed`

El comando sed permite editar un documento, podemos hacer reemplazos y borrar coincidencias, para aplicar el comando sed usaremos la siguiente sintaxis:

```bash
sed 's/busqueda/reemplazo/'
```

Este comando reemplazara las coincidencias con la búsqueda, pero en algunas ocasiones vamos a querer hacer un reemplazo global para ello colocaremos la letra `g` al final del comando.

```bash
sed 's/busqueda/reemplazo/g'
```

Para hacer el reemplazo de separadores como `tab`  usaremos el símbolo `\t`

## Expresiones regulares REGEX

Algunas expresiones permite como `.*` permite tomar los datos que continúan como un comodín, y nos permite hacer un reemplazo mas eficiente:

```bash
sed 's/Flores.*/Flores,15/g' archivo.txt
```

Aplicando esto a un archivo fasta podemos usar sed para limpiar los códigos:

```bash
sed 's/.1 .*/.1/g' z.capensis_mito.fasta > z.capensis_mito_edit.fasta
```

## Combinar columnas `paste`


## Lenguaje `awk`



## Comando `xargs`

