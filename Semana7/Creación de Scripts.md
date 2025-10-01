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

