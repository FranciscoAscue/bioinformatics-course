---
title: " Aprender a gestionar archivos fasta con samtools"
---
##  Aprender a gestionar archivos fasta con `samtools`

Para empezar deben tener un conjunto de datos descargados en formato fasta. A modo de ejemplo en clase utilizamos este comando:

```bash
esearch -db nucleotide -query '(("Mus musculus"[Organis  
m] OR Mus musculus[All Fields]) AND COX1[All Fields]) AND mitochondrion[filter]' | 
efetch -format fasta > m_musculus.fasta
```

Primero debíamos filtrar las secuencias que corresponden a *mus musculus*, hicimos para ello una meta data guía :

```bash
fgrep '>' m_musculus.fasta | sed 's/,.*//g' | sed 's/>//g' | cut -d' ' -f 1,2,3 | sed 's/.1 /.1,/g' | sed 's/.2 /.2,/g' > metadata.csv
```

Filtramos solamente la especie *mus musculus*:

```bash
samtoools faidx m_musculus.fasta
samtoools faidx m_musculus.fasta $( fgrep -i 'mus musculus' metadata.csv | cut -d',' -f 1 ) > mus_musculus.fasta
```

Selecciono ahora las secuencias que analizare:

```bash
samtools faidx mus_musculus.fasta
samtools faidx mus_musculus.fasta $(awk '$2 > 600 && $2 < 700' mus_musculus2.fasta.fai| cut -f 1) > m_musculus_select.fasta
```

### juntamos los archivos con el grupo externo

Para este ejemplo descargue el grupo de externo de la especie *R. norvegicus*  del código [NC_001665.2](https://www.ncbi.nlm.nih.gov/nuccore/110189714) :

```bash 
efetch -db nucletide -id NC_001665.2 -format fasta > grupo_externo.fasta
samtools faidx grupo_externo.fasta
samtools faidx grupo_externo.fasta NC_001665.2:5323-6867 > g_externo.fasta
```

Unimos los archivos en uno solo y lo visualizamos en [Aliview](https://ormbunkar.se/aliview/):

```bash
cat g_externo.fasta m_musculus_select.fasta > filogenia.fasta
```

## Alineamiento de secuencias mafft 

Primero instalamos maftt:
```bash
sudo apt install mafft
```

Con este programa podemos hacer el alineamiento:

```bash
mafft --auto filogenia.fasta > filogenia_aln.fasta
```

## Filogenia de las secuencias

Para esto vamos a utilizar un programa popular [iqtree2](https://github.com/iqtree/iqtree2) también se puede utilizar [raxml](https://github.com/amkozlov/raxml-ng) ambos programas de filogenia tipo ML (maximum likelihood). 
Los archivos de entrada para filogenia deben estar en un formato de preferencia tipo *phylip* que tiene la siguiente forma:

```bash
5 42  
Turkey AAGCTNGGGC ATTTCAGGGT GAGCCCGGGC AATACAGGGT AT  
Salmo gairAAGCCTTGGC AGTGCAGGGT GAGCCGTGGC CGGGCACGGT AT  
H. Sapiens ACCGGTTGGC CGTTCAGGGT ACAGGTTGGC CGTTCAGGGT AA  
Chimp AAACCCTTGC CGTTACGCTT AAACCGAGGC CGGGACACTC AT  
Gorilla AAACCCTTGC CGGTACGCTT AAACCATTGC CGGTACGCTT AA
```

Entonces convertimos el formato fasta a Phylip (Una opcion):

```bash
sudo apt install snp-sites
snp-sites -p -o filogenia_aln.phy filogenia_aln.fasta
```

Ahora podemos correr la filogenia con iqtree:

```bash
iqtree2 -s filogenia_aln.phy -m MFP -o 'NC_001665.2' -bb 1000 -nt AUTO
```

> Recordar editar el grupo externo para que el programa lo tome correctamente.