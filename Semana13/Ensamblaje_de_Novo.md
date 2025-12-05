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