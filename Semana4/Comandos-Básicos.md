---
title: Comandos Básicos
tags:
  - week4
  - comandos
  - linux
theme: moon
highlightTheme: monokai
---
## Comando `cd`

Permite cambiar de directorio y podemos usarlo con direcciones globales:

```bash
cd /home/usuario/
```

Ahora si ustedes están en una dirección puede acceder directamente a una carpeta solamente poniendo el nombre de la misma.

```bash
cd Plantillas
```

Para acelerar las ejecuciones pueden usar la tecla `tab`, esto les permite autocompletar. 

Ahora poder retroceder en los directorios sin direcciones globales ustedes pueden usar los `..` para ello simplemente apuntamos el comando `cd` a esa dirección.

## Comando `ls`

Para observar las carpetas (azul) y los archivos (plomo) podemos usar el comando `ls` y también podemos darle opciones:

```bash
ls -a
```

Lo que les lista el contenido oculto. 

Dentro los directorios siempre van a encontrar 2 carpetas especiales: 

`.` y `..` sirven para moverse, donde el punto indica `aqui` y los 2 puntos `atras` 

## Crear Directorios `mkdir`

sirve para crear directorios ( carpetas ) vacías, para borrarlo pueden usar el comando `rmdir`.
Podemos crear un árbol de directorios en Linux, para ello usaremos el mismo comando pero con la opción `-p`

```bash
mkdir -p CURSO/{GENETICA,LINUX,CITOGENETICA,PRACTICAS}
```

La lógica para crear directorios internos es simplemente repetir el patrón. Importante que cuando solamente crean una carpeta interna no es necesario usar `{}`. 

## Borrar `rm` 

Se utiliza indistintamente para borrar ya sea carpetas o archivos, en el caso de carpetas que tienen contenido interno pueden usar la opción `-r` recursivo.

## Instalar programas `apt install`

Esto sirve instalar programas que no tienen en el sistema, pero generalmente deben tener permisos en su terminal para ello vamos a usar un comando anterior que es `sudo`
### Comando sudo 
```bash
sudo ComandoX
sudo apt install tree
``` 

## Copiar `cp`

Este comando permite copiar archivos a una dirección por ejemplo:
```bash
cp archivo.txt CURSO/LINUX
cp archivo.txt CURSO/LINUX/segundo.txt ## Cambia nombre
``` 

## Mover o renombrar`mv` 

Este comando permite mover archivos a una dirección por ejemplo:
```bash
mv archivo.txt CURSO/LINUX
mv archivo.txt CURSO/LINUX/segundo.txt ## Cambia nombre
``` 

El comando `mv` también para renombrar los archivos o carpetas.
## Descargar archivos `wget` 

Este comando permite descargar archivos de internet, para ello debemos darle la direccion del archivo: `https://....` o `ftp://....` 
## Descomprimir archivos `gunzip`


## Mostrar contenido `cat`

El comando `cat` muestra todo el contenido

```bash
cat *csv
cat Toxicity-13F.csv
```

Podemos mostrar solo una parte :

```bash
head *csv
tail Toxicity-13F.csv
head -n 1 Toxicity-13F.csv
```

## Mostrar contenido en otra ventana `less`

Sirve para mostrar el contenido de un archivo en otra ventana, para salir de esa vista deben apretar la tecla `q`
 
```bash
less Toxicity-13F.csv
less -S Toxicity-13F.csv
```

Estos comandos de visualización pueden abrir archivos bien grandes sin mucha demanda de el uso de su computadora. 
## Buscar dentro de archivo `grep` 

Este comando permite buscar dentro de un documento un patrón :  `'NonToxic'` usando el siguiente comando:

```bash
grep 'NonToxic' Toxicity-13F.csv
```

Pueden indicarles el numero de linea donde fue encontrado

```bash
grep -n 'NonToxic' Toxicity-13F.csv
```

Ademas podemos darle contexto a la Búsqueda usando `-A 1` para una linea despues de la búsqueda. 
`-B 1` Para una linea antes de la búsqueda. 

## Entrez NCBI 

Para descargar archivos del NCBI ustedes deben instalar el comando:

```bash
sudo apt install ncbi-entrez-direct
```

Para ello debemos usar el comando de descarga 
```bash
efetch -db nucleotide -id KY438895.1 -format fasta
```

Para redirigir la descarga a un archivo 

```bash
efetch -db nucleotide -id KY438895.1 -format fasta > seq.fasta
```

## Mas detalles de los archivos `ls -lh`

Para mostrar las características de los archivos podemos usar opciones, en general en `Linux` vamos a seguir la siguiente regla: 

<div style="font-size: 32px; text-align: center">
	<p style=" color: #476EAE; display:inline-block; font-"><b>comando</b></p>
	<p style=" color: #FCB53B; display:inline-block">-o / --opciones</p>
	<p style=" color: #48B3AF; display:inline-block">objetivo</p>
</div> 
Como podemos ver algunos comando pueden tener una opción o mas de una opción, esto depende el `comando / programa`, por lo que puede variar según la situación o el uso que la vamos a dar.
Por ejemplo el comando `ls -lh` nos permite mostrar los documentos y en esta caso tenemos 2 diferencias notables, primero tenemos dos opciones  `-l` muestra una lista y `-h` que permite ver el peso del archivo en formato "Humano", pero no tiene una separación, sino que el comando puede aceptar las opciones combinadas `-lh`. La otra diferencia es que no existe un `objetivo`, en muchos comandos el objetivo puede ser establecido por defecto en el mismo lugar donde uno se encuentra o sino alguna otra variable genérica. 

Ahora veamos que ocurre con este comando:
```
ls -lh

-rw-rw-r-- 1 fascue fascue 4,3M set  8 16:30 allgenes_s.svg  
-rw-rw-r-- 1 fascue fascue 2,4M set  8 16:29 cavia_aln.fasta  
-rw-rw-r-- 1 fascue fascue 179K set  8 16:24 cavia.fasta  
-rw-rw-r-- 1 fascue fascue 4,3K set  8 16:27 cavia.fasta.fai  
-rw-rw-r-- 1 fascue fascue 171K set  8 16:28 cavia_fil.fasta  
-rw-rw-r-- 1 fascue fascue 1,5M set  8 16:33 cytb1.svg  
drwxrwxr-x 2 fascue fascue 4,0K set  8 16:11 Carpeta  
-rw-rw-r-- 1 fascue fascue  59K set  8 16:33 snps.csv
```

Vamos a observar detalles genéricos, que incluyen fechas y propietarios. Lo mas relevante aquí sera los permisos que tiene los documentos o carpetas: 

==Carpeta (empieza con d "directorio"):==

``` 
drwxrwxr-x 2 fascue fascue 4,0K set  8 16:11 Carpeta  
```

==Documento:==

```
-rw-rw-r-- 1 fascue fascue 2,4M set  8 16:29 cavia_aln.fasta  
```

Podemos ver que los atributos que siguen a las letras pueden darnos algunas características de que esta relacionada a los permisos y están en 3 triadas : 

<div style="font-size: 32px; text-align: center">
	<p style=" color: #476EAE; display:inline-block">rwx</p>
	<p style=" color: #FCB53B; display:inline-block">rwx</p>
	<p style=" color: #48B3AF; display:inline-block">rwx</p>
</div> 
- El primer trió ( son permisos del propietario del archivo )
- El segundo trió ( son permisos del grupo del archivo )
- El tercer trió ( son permisos de otros usuarios )

Para cambiar estos permisos utilizaremos el comando `chmod` indicando los permisos usando estas equivalencias:

	Permiso de lectura (r)   : 4
	Permiso de escritura (w) : 2
	Permiso de ejecución (x) : 1

Adicional mente se puede usar la notación `+r,+w,+x` para asignar permisos pero indicando el nivel al cual se asignara: `chmod u+x file.sh` 

En donde 
	`u` hace referencia al usuario propietario
	`g` al grupo de usuario
	`o` otros usuarios

## Editor de código en linea de comandos

Vamos a utilizar `nano` que también puede ser ejecutando con el comando `pico`, nos van a permitir editar archivos de forma visual en la terminal. La utilidad es cuando tienen acceso a un servidor por linea de comandos, pueden disponer de estos editores para modificaciones sin recurrir a programas visuales. 

