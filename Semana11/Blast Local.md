---
title: Blast Local
---
Primero descargamos secuencias *(Incluso pueden ser genomas completos)*
gen TMPRSS6 (Serin proteasa 6)

```bash
esearch -db nucleotide -query 'TMPRSS6[All Fields] AND (refseq[filter] AND ("1000"[SLEN] : "2500"[SLEN]))' | efetch -format fasta > base_datos.fasta
```

Hacemos nuestra base de datos

```bash
mkdir db
makeblastdb -in base_datos.fasta -dbtype nucl -out db/baseDatos
```

Ahora hacemos el blast local

```bash
blastn -query 15.10F_003_C04_2016-05-19_consensus.fasta -db db/baseDatos
```

## BLAST a un genoma completo.

Para ello debemos descargar un genoma completo (FTP)

```bash
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/001/405/GCF_000001405.40_GRCh38.p14/GCF_000001405.40
_GRCh38.p14_genomic.fna.gz
```

Luego creamos una base de datos local:

```bash 
makeblastdb -in GCF_000001405.40_GRCh38.p14_genomic.fna -dbtype nucl -out db/genoma
```

Y luego realizamos el blast

```bash 
blastn -query 15.10F_003_C04_2016-05-19_consensus.fasta -db db/genoma
```

Con este blast podemos ubicar rápidamente el cromosoma\

```
BLASTN 2.12.0+  
  
  
Reference: Zheng Zhang, Scott Schwartz, Lukas Wagner, and Webb  
Miller (2000), "A greedy algorithm for aligning DNA sequences", J  
Comput Biol 2000; 7(1-2):203-14.  
  
  
  
Database: GCF_000001405.40_GRCh38.p14_genomic.fna  
          705 sequences; 3,298,430,636 total letters  
  
  
  
Query= 15.10F  
  
Length=235  
                                                                     Score     E  
Sequences producing significant alignments:                          (Bits)  Value  
  
NC_000022.11 Homo sapiens chromosome 22, GRCh38.p14 Primary Assembly  385     7e-105  
  
  
>NC_000022.11 Homo sapiens chromosome 22, GRCh38.p14 Primary Assembly  
Length=50818468  
  
Score = 385 bits (208),  Expect = 7e-105  
Identities = 210/212 (99%), Gaps = 0/212 (0%)  
Strand=Plus/Minus  
  
Query  24        GGTGCCCTCTCTGGACNNCGGCTTGGCCCTCTGGTTTGATGCCTATGCACTGAGGAGGCA  83  
                ||||||||||||||||  ||||||||||||||||||||||||||||||||||||||||||  
Sbjct  37084405  GGTGCCCTCTCTGGACTACGGCTTGGCCCTCTGGTTTGATGCCTATGCACTGAGGAGGCA  37084346  
  
Query  84        GAAGTATGATTTGCCGTGCACCCAGGGCCAGTGGACGATCCAGAACAGGAGGTACCActt  143  
                ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  
Sbjct  37084345  GAAGTATGATTTGCCGTGCACCCAGGGCCAGTGGACGATCCAGAACAGGAGGTACCACTT  37084286  
  
Query  144       cctctcctccctctggcttcctttcctccctccccctccctctcttccctcctcaatagt  203  
                ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  
Sbjct  37084285  CCTCTCCTCCCTCTGGCTTCCTTTCCTCCCTCCCCCTCCCTCTCTTCCCTCCTCAATAGT  37084226  
  
Query  204       gaccccctcATTGGAAGCCCAAGTCCCCAATC  235  
                ||||||||||||||||||||||||||||||||  
Sbjct  37084225  GACCCCCTCATTGGAAGCCCAAGTCCCCAATC  37084194  
  
  
  
Lambda      K        H  
   1.33    0.621     1.12    
  
Gapped  
Lambda      K        H  
   1.28    0.460    0.850    
  
Effective search space used: 679472499346  
  
  
 Database: GCF_000001405.40_GRCh38.p14_genomic.fna  
   Posted date:  Nov 12, 2025  3:55 PM  
 Number of letters in database: 3,298,430,636  
 Number of sequences in database:  705  
  
  
  
Matrix: blastn matrix 1 -2  
Gap Penalties: Existence: 0, Extension: 2.5
```
