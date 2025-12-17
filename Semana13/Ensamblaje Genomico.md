---
title: Ensamblaje genomico
---
### Ensamblaje de Novo

```bash
sudo apt install spades 
## conda install -c bioconda spades
mkdir Ensamblaje
```

```bash
spades.py --isolate -k 21,31 -t 4 -1 Filtrado/file_forward_paired.fq.gz -2 Filtrado/file_reverse_paired.fq.gz -o Ensamblaje
```

### Ensamblaje por referencia


```bash
sudo apt install bowtie2
```

#### Preparamos el genoma (indexado)
```bash
#bowtie2-build GENOMA <Carpeta>/nombre
mkdir Mapping
cd Mapping
mkdir index
bowtie2-build GCF_000767725.1_ASM76772v1_genomic.fna.gz index/metamyco
```

#### Alineamos

```bash
bowtie2 --end-to-end -p 4 -x index/metamyco -1 ../SRR15616379_1.fastq.gz  -2 ../SRR15616379_2.fastq.gz -S myco.sam
```

*estadisticas*
```text
188705 reads; of these:  
 188705 (100.00%) were paired; of these:  
   57383 (30.41%) aligned concordantly 0 times  
   126904 (67.25%) aligned concordantly exactly 1 time  
   4418 (2.34%) aligned concordantly >1 times  
   ----  
   57383 pairs aligned concordantly 0 times; of these:  
     30880 (53.81%) aligned discordantly 1 time  
   ----  
   26503 pairs aligned 0 times concordantly or discordantly; of these:  
     53006 mates make up the pairs; of these:  
       38543 (72.71%) aligned 0 times  
       12137 (22.90%) aligned exactly 1 time  
       2326 (4.39%) aligned >1 times  
89.79% overall alignment rate
```

*Ahora veremos la estructura del archivo SAM (Sequence Alignmed Mapped)*
![[Pasted image 20251216212644.png]]

Para poder manipular los archivos tipo SAM usamos la herramienta *samtools*

```bash
sudo apt install samtools
## conda -c bioconda samtools
```

#### Vamos a procesar el archivo SAM 

Para ahorrar espacio espacio comprimimos el archivo SAM a BAM (binary), ademas procedemos a ordenar los alineamientos.

```bash
samtools view -u@ 2 myco.sam | samtools sort -@ 2 -o myco.sorted.bam -
```

Finalmente indexamos el archivo resultante: 

```bash 
samtools index myco.sorted.bam
```

### Consenso genomico 

```bash
sudo apt install ivar 
sudo apt install bcftools
#conda install -c bioconda ivar
```

*Procedemos al consenso*

```bash
samtools mpileup -A -d 0 -Q 0 myco.sorted.bam | ivar consensus -p mycopla  
sma -q 10 -t 0.6 -n N -m 10
```
