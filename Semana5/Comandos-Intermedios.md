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

## Busqueda en NCBI 

```
("Zonotrichia capensis"[Organism] OR zonotrichia capensis[All Fields]) AND "Zonotrichia capensis"[porgn] AND mitochondrion[filter]
```


## Comando `sed`

## Lenguaje `awk`

## Comando `xargs`

