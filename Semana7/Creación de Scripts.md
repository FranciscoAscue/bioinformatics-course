---
title: Scripts en Bash
---
## Nano como editor de terminal

```bash
nano script.bash
```

### Ejemplo script simple:

```bash
#!/bin/bash  

##Var  
Carpeta=$1  
Arch=$2  
  
##Exe  
mkdir $Carpeta  
echo "Dormire por 40 minutos"  
sleep 40m  
  
mv $Arch $Carpeta  
## Mensaje  
  
echo "Termino mi script"  
echo "Se creo la carpeta : "$Carpeta
```

### Comprimir con contraseña

```bash
#!/bin/bash  
  
##Var  
Carpeta="Protegidos"  
Arch="marcador.txt"  
  
##Exe  
mkdir $Carpeta  
mv $Arch $Carpeta  
zip -r -e "Protegidos.zip" $Carpeta  
  
##Mensaje  
echo "Se protegio el Archivo"  
echo "Se creo la Carpeta Protegida"
```

**Para ejecutarlo**

```bash
bash script.bash
```

Para hacerlo por defecto deben darle permiso de ejecución:

 ```bash
 chmod 777 script.bash
 ./script.bash
 ```

Variables de entorno:

```bash
echo $PATH
```

Nos da las direcciones donde están los ejecutables del sistema:

```
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:
/usr/local/games:/snap/bin
```

Con estas direcciones podemos definir ejecutables en el sistema, basta con mover nuestro script con los **permisos** adecuados para que se convierta en un comando del sistema.

Generalmente cuando instalamos programas "a mano" necesitamos que ese script o programa este en todo el sistema, siempre y cuando sea *autónomo* de lo contrario puede hacer un *link dinámico*.

### Link's dinámicos

```bash
# ln -s {direccion ejecutable} {direccion PATH}
cd /usr/bin
sudo ln -s /home/fascue/CURSO/script2.bash .
```

### Alias

Permite crear atajos para comando asignándole un alias:
```bash
alias lh=ls -lh
```

Tengan mucho cuidado modificando los archivos como `.bashrc` ya permiten definir diferentes `alias` del sistema pero puede des configurar su usuario.

## Script para bioinformatica

Para ello vamos a crear un proyecto: "Sobre secuencias de ADN de una `especie`"
Pasos: 
- Buscar entre 50 a 100 secuencias de ADN de una especie con un marcador molecular incluir algunas secuencias de una especie relacionada `grupo externo`
- Descarga con `ncbi-entrez`  `Hacerlos con pipelines en terminal` 
- Aprender a gestionar archivos fasta con `samtools` y `seqtk`
- Alineamiento múltiple de secuencias `mafft` `clustal`
- Filogenia `iqtree2` : Maximun likelihood
-  Editar los arboles con programas como `figtree` y `treeviewer`


