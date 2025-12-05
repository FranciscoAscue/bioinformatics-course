---
title: Calidad y Filtrado de secuencias
---
 ![[Pasted image 20251203095431.png]]

## Calidad con fastqc

```bash
sudo apt install fastqc
mkdir Calidad
fastqc -o Calidad *fastq.gz
## usando multithread 
fastqc -t 2 -o Calidad *fastq.gz
```

## Filtrado de secuencias
*Actualmente los equipos de illumina hacen esa remoción automatica*

¿Cual es la finalidad de remover adaptadores y primers de las lecturas de secuencia miento?

```bash
sudo apt install trimmomatic trim-galore
mkdir Filtrado
```

```bash
TrimmomaticPE -phred33 -threads 2 file_1.fastq file_2.fastq file_forward_paired.fq.gz file_forward_unpaired.fq.gz file_reverse_paired.fq.gz file_revers_unpaired.fq.gz ILLUMINACLIP:TruSeq3-PE-2.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 MINLEN:50
```

`-phred33` : Definir la tabla ASCII (33) es la versión moderna illumina 1.9+ 
`-phred64` : Seria versión antigua.

`-threads 2` : Es el uso de threads ( nucleos )
`file_1.fastqg.gz file_2.fastq.gz` : Ponemos en orden los documentos fastq que vamos a procesar

`file_forward_paired.fq.gz file_forward_unpaired.fq.gz` : Documentos resultantes de Forward. Pareado (con Reverse)
`file_reverse_paired.fq.gz file_reverse_unpaired.fq.gz` : Documentos resultantes de Reverse. Pareado (con Forward)

`ILLUMINACLIP:TruSeq3-PE-2.fa:2:30:10 : Para recorte de Adapatores y primers.
 ```bash
 cat /usr/share/trimmomatic/*fa
 ```
`LEADING:3 TRAILING:3` : Hace un recorte del inicio y final de 3 pb en 3 pb  

`SLIDINGWINDOW:4:15`:  va revisar de 4pb en 4 pb a lo largo de la secuencia y va a comprobar que tengan como mínimo calidad de 15 Qscore

`MINLEN:50` : Como se hacer recortes de las lecturas debemos garantizar un tamaño mínimo de 50 pb.  