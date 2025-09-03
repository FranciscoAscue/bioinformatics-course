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

### Comando sudo 



## Copiar `cp`

## Mover o renombrar`mv` 

## Descomprimir archivos `gunzip`

## Buscar dentro de archivo `grep` 

## Mostrar contenido `cat`

## Mostrar contenido en otra ventana `less`






