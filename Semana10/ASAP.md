---
Title: Automated Sanger Analysis Pipeline (ASAP)
---
## Instalar ASAP

Para instalar ASAP deben instalar previamente lo siguiente:
```bash
sudo apt install emboss seqtk python3 python3-pip ncbi-blast+ clustalw 
```

Luego instalamos *Biopython*

```bash
pip3 install Biopython
```

Descargamos el script:

```bash
git clone https://github.com/addityea/ASAP.git
```

Colocamos el script en el sistema (PATH)

*1ra Opción*

```bash
echo $PATH
cd /usr/bin
sudo ln -s $HOME/CURSO/ASAP/ASAP.py
```

*2da Opción (solo aveces) *

```bash
cd /usr/bin
cp $HOME/CURSO/ASAP/ASAP.py .
```


## Ejecutamos ASAP

```bash
ASAP.py FR 15.10F_003_C04_2016-05-19.ab1 15.10R_004_D04_2016-05-19.ab1 ASAP/test/References/Reference_Seq.fa
```


## En Practica

1. Descargar las secuencias de *Faciola hepatica* de su classroom y aplicar ASAP de forma iterativa a todas las muestras. 
2. Deben juntar las secuencias consenso en un multifasta.
3. Alinear las secuencias consenso.
4. Filogenia de las muestras.

