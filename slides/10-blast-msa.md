---
theme: academic
layout: course-cover
title: BLAST y alineamiento múltiple
author: Francisco Ascue
week: Semana 10
unit: Unidad 2 · Secuencias
colorSchema: auto
transition: slide-left
mdc: true
drawings:
  persist: false
background: /images/sanger/dna-helix-cover.jpg
imageCredit: Unsplash · National Cancer Institute
imageSource: https://unsplash.com/photos/purple-and-pink-dna-illustration-M4jkB3JHmPA
---

<div class="template-badge">Búsqueda y comparación de secuencias</div>

# BLAST y alineamiento múltiple

<p class="lead">Buscar referencias para un consenso Sanger y comparar posiciones entre secuencias homólogas.</p>

---
layout: theory
---

## Dos operaciones distintas

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="panel amber" v-click>
<strong style="font-size:1.1em">🔍 BLAST</strong>
<small class="mt-2">Buscar secuencias similares en una base de datos</small>
<small class="mt-3">→ ¿Qué es mi secuencia? ¿Qué organismos tienen algo parecido?</small>
</div>

<div class="panel violet" v-click>
<strong style="font-size:1.1em">📐 MAFFT / MSA</strong>
<small class="mt-2">Comparar posiciones homólogas entre varias secuencias</small>
<small class="mt-3">→ ¿En qué posiciones difieren? ¿Qué regiones son conservadas?</small>
</div>

</div>

<div class="stat-flow mt-6" v-click>
  <div><small>Consenso Sanger<br><b>(clase 09)</b></small></div>
  <i>→</i>
  <div><small><b>BLAST</b><br>identificar</small></div>
  <i>→</i>
  <div><small>Seleccionar<br>referencias</small></div>
  <i>→</i>
  <div><small><b>MSA</b><br>comparar</small></div>
  <i>→</i>
  <div><small>Filogenia<br>(clase 11)</small></div>
</div>

---
layout: visual-right
image: /images/blast/blast-alignment.png
fit: contain
credit: Wikimedia Commons · CC BY-SA
sourceUrl: https://commons.wikimedia.org/wiki/File:BLAST_sequence_alignment_of_Human_Succinyl_coA_Transferase_with_E.coli_Acetate_Transferase_subunits_alpha_and_beta.png
---

## BLAST: búsqueda por similitud local

BLAST busca regiones similares entre una secuencia y una base de datos.

<div class="grid grid-cols-1 gap-1 mt-1">

<div class="panel" v-click>
<strong style="color:var(--bio-cyan)">Query</strong>
<small>Secuencia que consultamos — nuestro consenso FASTA</small>
</div>

<div class="panel" v-click>
<strong style="color:var(--bio-violet)">Subject</strong>
<small>Secuencia de la base de datos con la que se compara</small>
</div>

<div class="panel amber" v-click>
<strong>Hit</strong>
<small>Coincidencia reportada entre query y subject</small>
</div>

</div>

<p class="muted text-sm mt-1" v-click><b>Uso:</b> reconocer un marcador, localizar una región o seleccionar referencias para el MSA.</p>

---
layout: theory
---

## Elegir el programa correcto

<div class="grid grid-cols-2 gap-5 mt-3">

<div class="panel amber" v-click>
<strong>BLASTN</strong>
<small class="mt-1">Consulta: <b>nucleótidos</b> → DB: nucleótidos</small>
<small class="mt-2 block" style="color:var(--bio-green)">✅ Para un consenso Sanger de ADN</small>
</div>

<div class="panel" v-click>
<strong>BLASTP</strong>
<small class="mt-1">Consulta: <b>proteína</b> → DB: proteínas</small>
<small class="mt-2">Comparación a nivel de aminoácidos</small>
</div>

<div class="panel violet" v-click>
<strong>BLASTX</strong>
<small class="mt-1">Consulta: <b>nucleótidos traducidos</b> → DB: proteínas</small>
<small class="mt-2">Busca en los 6 marcos de lectura</small>
</div>

<div class="panel" v-click>
<strong>TBLASTN</strong>
<small class="mt-1">Consulta: <b>proteína</b> → DB: nucleótidos traducidos</small>
<small class="mt-2">Buscar genes codificantes no anotados</small>
</div>

</div>

<div class="warn mt-4" v-click>
Para un consenso Sanger de ADN, comenzar siempre con <b>BLASTN</b>.<br>
<small>Megablast: secuencias muy similares (misma especie). Blastn: mayor divergencia.</small>
</div>

---
layout: visual-right
image: /images/blast/needleman.png
fit: contain
credit: Wikimedia Commons · Needleman-Wunsch
sourceUrl: https://commons.wikimedia.org/wiki/File:Needleman-Wunsch_pairwise_sequence_alignment.png
---

## Alineamiento local vs global

<div class="grid grid-cols-1 gap-4 mt-2">

<div class="panel amber" v-click>
<strong>Local · Smith-Waterman</strong>

```text
Consulta:       ATGCCATAGCTA
Referencia: GGGGATGCCATAGCTATTTT
                ||||||||||||
```

<small>Compara la región de mayor similitud. Puede omitir extremos. BLAST usa este enfoque.</small>
</div>

<div class="panel violet" v-click>
<strong>Global · Needleman-Wunsch</strong>

```text
Consulta:   ---ATGCCATAGCTA---
Referencia: GGGGATGCCATAGCTATTTT
```

<small>Intenta alinear las secuencias de extremo a extremo. Usado en MSA.</small>
</div>

</div>

<p class="muted text-xs mt-3" v-click>Una coincidencia local no implica que las secuencias completas sean equivalentes.</p>

---
layout: visual-right
image: /images/blast/ncbi-website.png
fit: cover
position: top
credit: Wikimedia Commons · NCBI Website
sourceUrl: https://commons.wikimedia.org/wiki/File:NCBI_Website.png
---

## BLAST en la web de NCBI

<v-clicks>

1. Abrir **[blast.ncbi.nlm.nih.gov](https://blast.ncbi.nlm.nih.gov)**
2. Seleccionar **Nucleotide BLAST**
3. Pegar el consenso FASTA
4. Elegir base de datos y programa
5. Revisar tabla de resultados y alineamientos

</v-clicks>

<div class="warn mt-4" v-click>
<b>Registrar siempre:</b> base de datos, fecha y parámetros utilizados.<br>
<small>Los resultados cambian conforme la base de datos se actualiza.</small>
</div>

---
layout: theory
---

## Interpretar las métricas de BLAST

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="panel amber" v-click>
<strong>% Identidad</strong>
<small class="mt-2">Posiciones <b>idénticas</b> del alineamiento sobre el total alineado</small>
<small class="mt-1">Alto no siempre significa "buena referencia"</small>
</div>

<div class="panel violet" v-click>
<strong>Cobertura de consulta</strong>
<small class="mt-2">Parte de la <b>query</b> incluida en los alineamientos</small>
<small class="mt-1">Baja cobertura = sólo se alineó una región parcial</small>
</div>

<div class="panel green" v-click>
<strong>E-value</strong>
<small class="mt-2">Coincidencias de igual puntuación esperadas <b>por azar</b></small>
<small class="mt-1">Menor es mejor. Depende del tamaño de la búsqueda.</small>
</div>

<div class="panel" v-click>
<strong>Bit score</strong>
<small class="mt-2">Puntuación <b>normalizada</b> del alineamiento</small>
<small class="mt-1">Comparable entre búsquedas de distinto tamaño</small>
</div>

</div>

<p class="muted text-sm mt-3" v-click>⚠️ <b>Evaluar identidad y cobertura juntas.</b> Un E-value bajo con cobertura baja puede no ser una referencia válida.</p>

---
layout: theory
---

## Identidad alta con cobertura baja

<div class="grid grid-cols-2 gap-6 mt-3">

<div>

Ejemplo para una consulta de **600 nt**:

<div class="grid grid-cols-1 gap-3 mt-3">

<div class="panel" style="border-color:var(--bio-danger)" v-click>
<strong style="color:var(--bio-danger)">Hit A</strong>
<small>Identidad: <b>100 %</b> · Cobertura: <b>10 %</b></small>
<small class="mt-1">Coincide perfectamente en solo 60 nt de 600</small>
</div>

<div class="panel green" v-click>
<strong style="color:var(--bio-green)">Hit B</strong>
<small>Identidad: <b>98 %</b> · Cobertura: <b>99 %</b></small>
<small class="mt-1">Representa casi toda la consulta con alta similitud</small>
</div>

</div>

</div>

<div class="mt-2" v-click>

```text
Consulta:   |████████████████████████████|
Hit A:      |██|                          ← 10%
Hit B:      |██████████████████████████| ← 99%
```

<div class="warn mt-4">
<b>Hit B es mejor referencia</b> aunque su identidad sea menor.<br>
<small>El % de identidad por sí solo no permite elegir una referencia.</small>
</div>

</div>

</div>

---
layout: visual-right
image: /images/blast/sequence-homology.jpg
fit: contain
credit: Wikimedia Commons · CC BY-SA
sourceUrl: https://commons.wikimedia.org/wiki/File:Sequence_Homology_Between_CBP_and_p300.jpg
---

## Revisar el alineamiento del hit

```text
Query   ATGCCATAGCTA
        ||||| ||||||
Sbjct   ATGCCGTAGCTA
              ↑
         sustitución
```

<v-clicks>

- Localizar sustituciones, gaps y bases ambiguas.
- Revisar si las diferencias se concentran en los extremos del consenso.
- Comprobar orientación y región del marcador anotada en el subject.
- Si la diferencia parece un error de lectura → volver al cromatograma AB1.

</v-clicks>

---
layout: statement
---

<div class="grid grid-cols-1 gap-4 text-center" style="max-width:700px; margin:auto;">

<p style="font-size:1.4rem; font-weight:600; color:var(--bio-cyan)">Un hit no identifica automáticamente una especie</p>

<div class="grid grid-cols-3 gap-4 mt-2">
<div class="panel" v-click><small>Varias especies pueden compartir el mismo marcador o haplotipo</small></div>
<div class="panel amber" v-click><small>La base puede contener registros mal identificados o incompletos</small></div>
<div class="panel violet" v-click><small>Una especie ausente de la DB no puede aparecer entre los hits</small></div>
</div>

<div class="warn mt-4" v-click>
<b>Reportar siempre la evidencia:</b> accesión · marcador · identidad · cobertura · fecha<br>
<small>La homología describe ascendencia compartida. No se expresa como «porcentaje de homología».</small>
</div>

</div>

---
layout: theory
---

## Preparar BLAST local con Conda

```bash {1-3|4|all}
conda create -n comparacion \
  -c conda-forge -c bioconda \
  blast mafft seqkit ncbi-entrez-direct
conda activate comparacion
```

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="panel">
<strong>📁 Archivos de trabajo</strong>
<ul class="mt-2 text-sm">
  <li><code>consenso.fasta</code> — muestra revisada de clase 09</li>
  <li><code>referencias.fasta</code> — secuencias para comparar</li>
</ul>
</div>

<div class="panel amber">
<strong>⚠️ Alcance de la búsqueda local</strong>
<small class="mt-2">La búsqueda local se limita al contenido de la base creada.<br>No es equivalente a buscar en GenBank completo.</small>
</div>

</div>

---
layout: theory
---

## Obtener referencias desde NCBI

Ejemplo para el marcador **COI** de *Zonotrichia capensis*:

```bash
set -o pipefail
consulta='"Zonotrichia capensis"[Organism] AND COI'

esearch -db nuccore -query "$consulta" \
  | efetch -format fasta > referencias.fasta

seqkit stats referencias.fasta
```

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="panel">
<strong>Verificar antes de usar</strong>
<ul class="mt-2 text-sm">
  <li>Anotación del marcador en el registro</li>
  <li>Región cubierta (inicio, fin, longitud)</li>
  <li>Calidad del depósito (autores, referencia)</li>
</ul>
</div>

<div class="warn">
Para identificar una muestra desconocida, incluir también <b>taxones cercanos</b>.<br>
<small>Restringir la búsqueda a una especie no demuestra su identidad.</small>
</div>

</div>

---
layout: theory
---

## Crear la base y buscar el consenso

```bash
# 1. Crear base de datos BLAST local
mkdir -p db
makeblastdb -in referencias.fasta -dbtype nucl -out db/referencias

# 2. Ejecutar la búsqueda
blastn -query consenso.fasta \
       -db db/referencias \
       -out resultados.txt
```

<div class="grid grid-cols-3 gap-3 mt-4">
<div class="count" v-click><strong>makeblastdb</strong><small>Indexa las referencias para búsqueda rápida</small></div>
<div class="count" v-click><strong>blastn</strong><small>Compara la consulta contra esa base local</small></div>
<div class="count" v-click><strong>resultados.txt</strong><small>Informe con métricas y alineamientos</small></div>
</div>

---
layout: theory
---

## Guardar resultados como tabla (formato 6)

```bash
blastn -query consenso.fasta -db db/referencias  -outfmt "6 qseqid sseqid pident qcovs evalue bitscore" -out hits.tsv
```

<div class="grid grid-cols-2 gap-5 mt-4">

<div>

| # | Campo | Descripción |
|---|---|---|
| 1 | `qseqid` | Identificador de la query |
| 2 | `sseqid` | Accesión del subject |
| 3 | `pident` | % identidad |
| 4 | `qcovs` | % cobertura query |
| 5 | `evalue` | E-value |
| 6 | `bitscore` | Bit score |

</div>

<div>
<div class="warn mt-0" v-click>
Formato 6 es <b>TSV sin cabecera</b>.<br>
<small>Puede haber varias filas para una misma referencia (múltiples HSPs).</small>
</div>

<div class="panel green mt-4" v-click>
<strong>Cargar en Python:</strong>

```python
import pandas as pd
cols = ["qseqid","sseqid","pident",
        "qcovs","evalue","bitscore"]
df = pd.read_csv("hits.tsv",
     sep="\t", names=cols)
```

</div>
</div>

</div>

---
layout: theory
---

## MSA: alineamiento múltiple de secuencias

<img
  src="/images/blast/msa-ccdc.png"
  class="mx-auto rounded-lg"
  style="max-height:140px; object-fit:contain; background:#fff; padding:4px"
  alt="Ejemplo de alineamiento múltiple de secuencias"
/>

<div class="grid grid-cols-3 gap-4 mt-3">

<div class="count" v-click><strong>Filas</strong><small>Cada secuencia del conjunto (muestra + referencias)</small></div>
<div class="count" v-click><strong>Columnas</strong><small>Posiciones homólogas propuestas por el algoritmo</small></div>
<div class="count" v-click><strong>Gap <code>-</code></strong><small>Inserción/deleción introducida para mejorar el alineamiento</small></div>

</div>

<div class="warn mt-4" v-click>
<b>Uso:</b> comparar variación entre taxones y preparar datos para análisis filogenético.<br>
<small>Un gap puede representar inserción o deleción; el MSA por sí solo no determina cuál ocurrió.</small>
</div>

---
layout: visual-right
image: /images/blast/msa-example.png
fit: contain
credit: Wikimedia Commons · CC BY-SA
sourceUrl: https://commons.wikimedia.org/wiki/File:Multiple_Sequence_Alignment_of_the_Human_FAM120AOS_Gene_and_it%27s_Orthologs.png
---

## Seleccionar las secuencias para el MSA

Conservar referencias del **mismo marcador y región**.

<v-clicks>

- Usar identificadores únicos y accesiones verificables.
- Orientar todas las secuencias en el **mismo sentido**.
- Retirar primers y extremos de baja calidad.
- Evitar mezclar fragmentos cortos con genomas completos sin extraer la región.

</v-clicks>

<div class="warn mt-4" v-click>
Guardar la selección como <code>referencias_region.fasta</code> antes de alinear.
</div>

---
layout: theory
---

## Alinear con MAFFT

```bash {1-2|4-5|all}
# Combinar muestra y referencias
cat consenso.fasta referencias_region.fasta > conjunto.fasta

# Alinear
mafft --auto conjunto.fasta > alineamiento.fasta 2> mafft.log
```

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="panel" v-click>
<strong><code>--auto</code></strong>
<small class="mt-2">Selecciona la estrategia óptima según el número de secuencias y su longitud</small>
</div>

<div class="panel violet" v-click>
<strong><code>stdout</code></strong>
<small class="mt-2">Contiene el alineamiento en formato FASTA. Redirigir a <code>alineamiento.fasta</code></small>
</div>

<div class="panel amber" v-click>
<strong><code>stderr</code></strong>
<small class="mt-2">Mensajes de ejecución y estadísticas. Conservar en <code>mafft.log</code></small>
</div>

</div>

<p class="muted text-sm mt-3" v-click>Las secuencias alineadas tienen igual número de columnas, contando los gaps introducidos.</p>

---
layout: visual-right
image: /images/blast/lipase-homology.png
fit: contain
credit: Wikimedia Commons · CC BY-SA
sourceUrl: https://commons.wikimedia.org/wiki/File:Lipase_Sequence_Homology.png
---

## Revisar el MSA visualmente

Abrir `alineamiento.fasta` en **AliView** o **UGENE**.

<v-clicks>

- Comprobar regiones conservadas (columnas uniformes).
- Identificar extremos desiguales por diferencias de longitud.
- Revisar secuencias que requieren excesivos gaps.
- Volver al consenso Sanger ante discrepancias sospechosas.

</v-clicks>

<div class="warn mt-4" v-click>
<b>Un gap puede representar inserción o deleción;</b> no determina por sí solo cuál ocurrió.
</div>

---
layout: theory
---

## Recortar sin borrar la evidencia

```text
Muestra01   ---ATGCCATAGCTA---
Referencia1 GGGATGCCGTAGCTATTT
Región común    ATGCC_TAGCTA
```

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="panel">
<strong>Criterios de recorte</strong>
<ul class="mt-2 text-sm">
  <li>Definir una región <b>comparable</b> en todas las secuencias</li>
  <li>Conservar el alineamiento original y la versión recortada</li>
  <li>No eliminar columnas variables o con gaps automáticamente</li>
</ul>
</div>

<div class="panel amber" v-click>
<strong>Si el marcador codifica proteína</strong>
<ul class="mt-2 text-sm">
  <li>Revisar el marco de lectura y la traducción</li>
  <li>Un gap de 1 pb interrumpe el marco de lectura</li>
  <li>Verificar codones de inicio y stop conservados</li>
</ul>
</div>

</div>

---
layout: theory
---

## Visualización del MSA: colores y conservación

<img
  src="/images/blast/blast-alignment.png"
  class="mx-auto rounded-lg w-full"
  style="max-height:80px; object-fit:contain; background:#fff; padding:4px"
  alt="Alineamiento BLAST con colores"
/>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="step" v-click>
<b style="color:var(--bio-green)">Conservada</b>
<small>Misma base en todas las secuencias de la columna</small>
</div>

<div class="step" v-click>
<b style="color:var(--bio-gold)">Variable</b>
<small>Bases distintas en la columna — sitio informativo potencial</small>
</div>

<div class="step" v-click>
<b style="color:var(--bio-danger)">Gap</b>
<small>Inserción/deleción respecto al resto del conjunto</small>
</div>

</div>

<div class="stat-flow mt-5" v-click>
  <div><small>Abrir en<br>AliView / UGENE</small></div><i>→</i>
  <div><small>Revisar<br>extremos</small></div><i>→</i>
  <div><small>Verificar<br>conservación</small></div><i>→</i>
  <div><small>Recortar<br>región común</small></div><i>→</i>
  <div><small>Exportar<br>MSA final</small></div>
</div>

---
layout: lab
---

## Práctica: del consenso a un alineamiento

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

**Pasos**

<v-clicks>

1. Buscar el consenso de clase 09 con **BLAST** (NCBI o local).
2. Registrar accesiones, identidad y cobertura de las referencias.
3. Seleccionar secuencias de la misma región e incluir taxones cercanos.
4. Alinear con **MAFFT** y revisar en AliView o UGENE.
5. Exportar el MSA y justificar exclusiones o recortes.

</v-clicks>

</div>

<div>

<div class="panel green mt-2" v-click>
<strong>Entrega</strong>
<ul class="text-sm mt-2">
  <li>Tabla de hits (<code>hits.tsv</code>): accesión, identidad, cobertura</li>
  <li>FASTA de referencias seleccionadas</li>
  <li>Alineamiento revisado (<code>alineamiento.fasta</code>)</li>
  <li>Justificación de exclusiones y recortes</li>
</ul>
</div>

<div class="warn mt-3" v-click>
<small>El MSA es el insumo directo del análisis filogenético (clase 11). La calidad del alineamiento determina la calidad del árbol.</small>
</div>

</div>

</div>

---
layout: theory
---

## Documentación y recursos

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="panel">
<strong>🔍 BLAST · NCBI</strong>
<ul class="text-sm mt-2">
  <li><a href="https://blast.ncbi.nlm.nih.gov/doc/blast-help/FAQ.html" target="_blank">BLAST y significado del E-value</a></li>
  <li><a href="https://www.ncbi.nlm.nih.gov/sites/books/NBK569862/" target="_blank">Formatos de salida de BLAST</a></li>
  <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK179288/" target="_blank">Entrez Direct — esearch / efetch</a></li>
</ul>
</div>

<div class="panel violet">
<strong>📐 MSA · MAFFT</strong>
<ul class="text-sm mt-2">
  <li><a href="https://mafft.cbrc.jp/alignment/software/index.html" target="_blank">MAFFT · uso y opciones</a></li>
  <li><a href="https://orval.be/aliview/" target="_blank">AliView · visor de alineamientos</a></li>
  <li><a href="https://ugene.net/" target="_blank">UGENE · editor y visor integrado</a></li>
</ul>
</div>

</div>

<div class="panel amber mt-4">
<strong>📖 Lectura recomendada</strong>
<small>Altschul et al. (1990) · <i>Basic local alignment search tool.</i> Journal of Molecular Biology, 215(3), 403–410.</small>
</div>
