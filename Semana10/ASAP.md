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


# Verion 2026 - II 

```bash
sudo apt install clustalw 
``` 

## exportar las secuencias fasta cada cromatograma (ugene) - (bioedit)

```bash
seq1_r.fasta (reverso complementario)
seq2_f.fasta
```

### opcional - descargan una secuencia de referencia 

```bash
efetch -db nucleotide -id KX165598.1 -format fasta > KX165598.1.fasta
```
### si tienes refencia 

```bash
cat seq1* KX* > ITS_multi.fasta 

clustalw ITS_multi.fata 
```

### sale formatos: .aln .dnd 

Puede abrir el formato aln en ugene - (bioedit) - (mega)

Revisan el consenso. 