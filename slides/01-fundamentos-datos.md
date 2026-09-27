---
theme: academic
layout: course-cover
title: Fundamentos y datos
author: Francisco Ascue
week: Semana 01
unit: Unidad 1 · Fundamentos
colorSchema: auto
transition: fade-out
mdc: true
drawings:
  persist: false
---

<div class="template-badge">Fundamentos en uso y manejo de datos</div>

# Fundamentos y conceptos básicos

<p class="lead">¿Qué son las Estructuras de Datos / Formatos  y cómo se utilizan en bioinformática?</p>

<!--
Antes de preparar la clase:
1. sustituir los ejemplos ficticios por evidencia validada;
2. conservar solo los patrones que aporten al tema;
3. eliminar todas las etiquetas PLANTILLA;
4. añadir fuentes y notas del presentador.
-->

---
layout: center
---


<div class="template-badge">Tabla de contenido </div>

# Temas 

- Metadatos y su importancia, tipos de formatos comunes para análisis de datos biologicos.
- Datos estructurados, semi-estructurados y no estructurados para Bioinformática.
- Repositorios de datos biológicos (Enfocados en bioinformatica).

---

<v-clicks>
  <figure class="absolute top-20 left-35 w-55 h-55">
      <img src="https://us1.discourse-cdn.com/flex019/uploads/manager1/optimized/2X/0/0bc589e064ce4ae2ff6d6eef6cfb6655d2328c01_2_690x379.png" />
      <figcaption class="text-center">Excel</figcaption>
  </figure>

  <figure class="absolute top-65 left-35 w-55 h-55">
      <img src="https://i.ytimg.com/vi/9TiXR5wwqPs/maxresdefault.jpg" />
      <figcaption class="text-center">Google Sheets</figcaption>
  </figure>

  <figure class="absolute top-25 left-100 w-120 h-auto">
      <img src="https://www.stefaanlippens.net/articles/images/pretty-csv-head.png" />
      <figcaption class="text-center">CSV format <sup>1</sup></figcaption>
  </figure>
</v-clicks>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://www.stefaanlippens.net/pretty-csv.html">CSV viewing on the Command Line</a></Footnote>
</Footnotes>

---
layout: two-cols
---

<div class="template-badge">Formatos de texto plano</div>

# Datos Tabulares

Una misma **estructura** de *datos biológicos* puede almacenarse en distintos formatos delimitados:

<br>

| sample_id | organism | gene | expression |
| :--- | :--- | :--- | :--- |
| **SAMP-01** | *Homo sapiens* | BRCA1 | 14.52 |
| **SAMP-02** | *Mus musculus* | Cox1 | 89.10 |
| **SAMP-03** | *E. coli* | recA | 215.40 |

::right::

<div class="pl-4">

<div v-click class="mb-4">

**1. CSV (Comma Separated Values) — Comas**

```csv
sample_id,organism,gene,expression
SAMP-01,Homo sapiens,BRCA1,14.52
SAMP-02,Mus musculus,Cox1,89.10
SAMP-03,E. coli,recA,215.40
```

</div>

<div v-click class="mb-4">

**2. TSV (Tab Separated Values) — Tabulaciones (\t)**

```tsv
sample_id	organism	gene	expression
SAMP-01	Homo sapiens	BRCA1	14.52
SAMP-02	Mus musculus	Cox1	89.10
SAMP-03	E. coli	recA	215.40
```

</div>

<div v-click class="mb-4">

**3. PSV (Pipe Separated Values) — Barras (|)**

```text
sample_id|organism|gene|expression
SAMP-01|Homo sapiens|BRCA1|14.52
SAMP-02|Mus musculus|Cox1|89.10
SAMP-03|E. coli|recA|215.40
```

</div>

</div>

---
layout: two-cols
---

<div class="template-badge">Formatos Jerárquicos y Estructurados</div>

# Representación en JSON

Misma información representada en formato **JSON** (*JavaScript Object Notation*):

<br>

| sample_id | organism | gene | expression |
| :--- | :--- | :--- | :--- |
| **SAMP-01** | *Homo sapiens* | BRCA1 | 14.52 |
| **SAMP-02** | *Mus musculus* | Cox1 | 89.10 |
| **SAMP-03** | *E. coli* | recA | 215.40 |

::right::

<div class="pl-4">

<div v-click>

**JSON (Array de Objetos)**

```json
[
  {
    "sample_id": "SAMP-01",
    "organism": "Homo sapiens",
    "gene": "BRCA1",
    "expression": 14.52
  },
  {
    "sample_id": "SAMP-02",
    "organism": "Mus musculus",
    "gene": "Cox1",
    "expression": 89.10
  },
  {
    "sample_id": "SAMP-03",
    "organism": "E. coli",
    "gene": "recA",
    "expression": 215.40
  }
]
```

</div>

</div>

---
layout: visual-right
image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-nX7Q3kedfeGGV-KfeB3WV3u7LESNG8C24yk9w3zX0rl-YoDTBKD_gZk&s=10
fit: contain
---

<div class="template-badge">JSON en la Práctica</div>

# Flujo de Transmisión de JWT

Intercambio y validación de información en **JSON**:

- **1. Autenticación inicial**: El cliente envía credenciales de acceso al servidor.
- **2. Emisión del Token**: El servidor genera y firma digitalmente un objeto JSON (JWT).
- **3. Almacenamiento**: El cliente almacena el token firmado para futuras peticiones.
- **4. Autorización**: El cliente envía el token JSON en el encabezado `Authorization`.
- **5. Verificación sin estado**: El servidor valida la firma del JSON sin consultar la base de datos.

---
layout: two-cols
---

<div class="template-badge">Formatos Jerárquicos y Estructurados</div>

# Representación en XML

Misma información representada en formato **XML** (*Extensible Markup Language*):

<br>

| sample_id | organism | gene | expression |
| :--- | :--- | :--- | :--- |
| **SAMP-01** | *Homo sapiens* | BRCA1 | 14.52 |
| **SAMP-02** | *Mus musculus* | Cox1 | 89.10 |
| **SAMP-03** | *E. coli* | recA | 215.40 |

::right::

<div class="pl-4">

<div v-click>

**XML (Estructura de Árbol)**

```xml
<samples>
  <sample id="SAMP-01">
    <organism>Homo sapiens</organism>
    <gene>BRCA1</gene>
    <expression>14.52</expression>
  </sample>
  <sample id="SAMP-02">
    <organism>Mus musculus</organism>
    <gene>Cox1</gene>
    <expression>89.10</expression>
  </sample>
  <sample id="SAMP-03">
    <organism>E. coli</organism>
    <gene>recA</gene>
    <expression>215.40</expression>
  </sample>
</samples>
```

</div>

</div>

---
layout: visual-right
image: https://contadorpublico.pe/wp-content/uploads/2026/01/VISOR-XML-SUNAT.webp
fit: contain
---

<div class="template-badge">XML en la Práctica</div>

# Visualizador y Uso de XML

Ejemplo de aplicación real de documentos **XML**:

<br>

- **Estructura estandarizada**: Uso de etiquetas jerárquicas `<tag>` para organizar información.
- **Validación con esquemas**: Verificación de reglas e integridad estructural.
- **Visualización interactiva**: Transformación del código XML en interfaces legibles.





---
layout: default
---

<div class="template-badge">Formatos Bioinformáticos Estándar</div>

<div class="grid grid-cols-12 gap-6 mt-2">

<div class="col-span-7">


<v-click>

**Formato GenBank (.gbk / .gb)**
</v-click>

```text
LOCUS       NM_007294               7224 bp    mRNA    linear   PRI 15-AUG-2023
DEFINITION  Homo sapiens BRCA1 DNA repair associated, mRNA.
ACCESSION   NM_007294 VERSION NM_007294.4
ORGANISM    Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Mammalia.
FEATURES                   Location/Qualifiers
     source          1..7224
                     /organism="Homo sapiens"
                     /mol_type="mRNA"
                     /db_xref="taxon:9606"
     gene            1..7224
                     /gene="BRCA1"
                     /gene_synonym="BRCAI; BRCC1"
     CDS             231..5822
                     /gene="BRCA1"
                     /protein_id="NP_009225.1"
                     /translation="MDLSALRVEEVQNVINAMQKILECPICL..."
ORIGIN      
        1 ggcgcgagct tctgaaacta ggcggcagag gcggagccgc tgtggcactg
       61 agcgaccccg acctccccgg ccccagggac accaacc...
//
```

</div>

<div class="col-span-5">

<br>
<br>
<br>
<v-clicks>

- **1. Encabezado (Header)**: Metadatos clave-valor (`LOCUS`, `ACCESSION`, `ORGANISM`).
- **2. Anotaciones (`FEATURES`)**: Ubicación exacta de genes y regiones `CDS`.
- **3. Secuencia (`ORIGIN`)**: Secuencia primaria estructurada por bloques.
- **4. Delimitador (`//`)**: Indicador de fin de registro en la base de datos.

</v-clicks>

</div>

</div>
---
layout: default
---

<div class="template-badge">Formatos Bioinformáticos Estándar</div>

<div class="flex flex-col items-center mb-3">
  <img 
    src="https://abacus.bates.edu/bioinformatics1/screenshots/NCBI-5-FASTA.jpg" 
    class="max-h-65 w-auto rounded-lg shadow-md border border-gray-700 bg-white p-2 object-contain" 
    alt="Ejemplo del Formato FASTA en NCBI" 
  />
</div>

<div class="grid grid-cols-2 gap-6 text-sm">

<div>

<v-clicks>

- **Cabecera horizontalmente más larga (`>`)**: Comienza con el carácter `>` seguido del código de acceso y la descripción completa del registro en una única línea sin saltos.
- **Líneas de secuencia**: Cadena continua de caracteres plegada habitualmente a 60-80 residuos por línea.
- **Tipos de datos**: Representa secuencias de **ADN / ARN** (nucleótidos) o de **Proteínas** (aminoácidos).

</v-clicks>

</div>

<div>

<v-clicks>

- **Extensiones comunes del archivo**:
  - `.fasta` / `.fa`: Extensiones genéricas estándar.
  - `.fna`: Nucleótidos / ADN genómico (*FASTA Nucleic Acid*).
  - `.faa`: Aminoácidos / Proteínas (*FASTA Amino Acid*).
</v-clicks>

</div>

</div>

---
layout: two-cols
---

<div class="template-badge">Manejo Eficiente de Datos</div>

Los datos de secuenciación masiva (NGS) requieren **formatos comprimidos** para almacenamiento y procesamiento eficiente:

<br>

<v-clicks>

- **GZIP (`.gz`)**: Estándar universal para secuencias (`.fastq.gz`, `.fasta.gz`). Procesable directamente por herramientas (`zcat`, `htslib`).
- **TAR (`.tar` / `.tar.gz`)**: Empaquetado comprimido de directorios y conjuntos de muestras completas.
- **BGZF (Blocked GZIP)**: Formato de bloques independientes indexables mediante `tabix` (usado en `BAM` y `VCF.gz`).

</v-clicks>

::right::

<br>
<br>

<div class="pl-4 mt-1">

<div class="flex flex-col gap-2.5 p-4 border border-gray-700 rounded-xl text-left shadow-lg">

  <div class="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex justify-between items-center">
    <span>Ciclo de Compresión y Descompresión</span>
    <span class="text-[10px] text-gray-400 px-2 py-0.5 rounded border border-gray-700">Lossless</span>
  </div>

  <!-- Paso 1: Original con subrayado de patrones -->
  <div class="p-2 bg-black/60 rounded border border-red-500/40">
    <span class="text-[11px] text-gray-400 block mb-1">1. Secuencia Original (36 bytes):</span>
    <code class="font-mono text-xs break-all leading-relaxed">
      <u class="underline decoration-yellow-400 decoration-2 text-yellow-300">AGCT</u><u class="underline decoration-cyan-400 decoration-2 text-cyan-300">TTAA</u><u class="underline decoration-purple-400 decoration-2 text-purple-300">GCGC</u><u class="underline decoration-yellow-400 decoration-2 text-yellow-300">AGCT</u><u class="underline decoration-cyan-400 decoration-2 text-cyan-300">TTAA</u><u class="underline decoration-purple-400 decoration-2 text-purple-300">GCGC</u><u class="underline decoration-yellow-400 decoration-2 text-yellow-300">AGCT</u><u class="underline decoration-cyan-400 decoration-2 text-cyan-300">TTAA</u><u class="underline decoration-purple-400 decoration-2 text-purple-300">GCGC</u>
    </code>
  </div>

  <!-- Paso 2: Compresión (Ida) -->
  <div v-click class="p-2 bg-black/60 rounded border border-yellow-500/40">
    <span class="text-[11px] text-yellow-400 font-semibold block mb-1">⬇ Compresión</span>
    <div class="font-mono text-[11px] flex gap-3 text-gray-300 mb-1.5">
      <span><u class="text-yellow-400">$</u> = "AGCT"</span>
      <span><u class="text-cyan-400">/</u> = "TTAA"</span>
      <span><u class="text-purple-400">?</u> = "GCGC"</span>
    </div>
    <span class="text-[10px] text-gray-400 block mb-0.5">Cadena Comprimida (9 bytes):</span>
    <code class="font-mono font-bold text-sm tracking-widest">
      <u class="text-yellow-400">$</u><u class="text-cyan-400">/</u><u class="text-purple-400">?</u><u class="text-yellow-400">$</u><u class="text-cyan-400">/</u><u class="text-purple-400">?</u><u class="text-yellow-400">$</u><u class="text-cyan-400">/</u><u class="text-purple-400">?</u>
    </code>
    <span class="text-[10px] text-emerald-300 font-semibold block mt-1">✓ Reducción del 75% de espacio (36B ➔ 9B)</span>
  </div>

  <!-- Paso 3: Descompresión (Vuelta) -->
  <div v-click class="p-2 bg-black/60 rounded border border-cyan-500/40">
    <span class="text-[11px] text-cyan-400 font-semibold block mb-0.5">⬆ Descompresión (Vuelta - Reconstrucción 1:1):</span>
    <span class="text-[10px] text-gray-400 block">Reemplazar $, /, ? por sus secuencias originales</span>
    <code class="font-mono text-xs break-all leading-relaxed mt-1 block">
      <u class="underline decoration-yellow-400 text-yellow-300">AGCT</u><u class="underline decoration-cyan-400 text-cyan-300">TTAA</u><u class="underline decoration-purple-400 text-purple-300">GCGC</u><u class="underline decoration-yellow-400 text-yellow-300">AGCT</u><u class="underline decoration-cyan-400 text-cyan-300">TTAA</u><u class="underline decoration-purple-400 text-purple-300">GCGC</u><u class="underline decoration-yellow-400 text-yellow-300">AGCT</u><u class="underline decoration-cyan-400 text-cyan-300">TTAA</u><u class="underline decoration-purple-400 text-purple-300">GCGC</u>
    </code>
    <span class="text-[10px] text-cyan-300 font-semibold block mt-1">✓ Secuencia biológica idéntica al 100%</span>
  </div>

</div>

</div>

---
layout: default
---

<div class="template-badge">Almacenamiento y Eficiencia</div>

<div class="grid grid-cols-12 gap-6 mt-4">

<div class="col-span-12">

| Formato de Datos | Tipo de Compresión | Tamaño Aprox. (30x WGS) | Ahorro (%) |
| :--- | :--- | :--- | :--- |
| **FASTQ (Texto plano)** | Sin compresión | ~90 - 100 GB | **0%** |
| **FASTQ.GZ** | GZIP (`.gz`) | ~20 - 25 GB | **~75%** |
| **SRA (NCBI)** | Compresión SRA | ~12 - 15 GB | **~85%** |
| **SAM (Alineamiento)** | Texto plano | ~100 - 120 GB | **0%** |
| **BAM (Binario)** | BGZF (`.bam`) | ~30 GB | **~70%** |
| **CRAM (Referenciado)** | Compresión CRAM | ~10 GB | **~90%** |

</div>

</div>

---
layout: default
---

<div class="template-badge">Estudio de Referencia · Genome Biology 2019</div>

<div class="grid grid-cols-12 gap-5 mt-1">

<div class="col-span-7 flex flex-col items-center">
  <img
    src="https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs13059-019-1724-1/MediaObjects/13059_2019_1724_Fig1_HTML.png"
    class="max-h-105 w-auto object-contain rounded-lg shadow-lg border border-gray-700 bg-white p-1"
    alt="Fig 1. Genomics as an application within Data Science umbrella (Lloret-Llinares et al. 2019)"
  />
  <span class="text-[10px] text-gray-500 mt-1">Fig. 1 — Genómica como subdominio de la Ciencia de Datos</span>
</div>

<div class="col-span-5 text-sm flex flex-col justify-center gap-3">

<v-clicks>

- **Umbrella de Data Science**: La genómica es una *aplicación específica* dentro de un ecosistema mayor que incluye ML, estadística, bases de datos y visualización.
- **Marco 3V**: Los datos genómicos se caracterizan por **Volumen**, **Velocidad** y **Variedad** — los tres ejes del Big Data.
- **Convergencia**: La bioinformática actúa como puente entre la biología experimental y las técnicas de ciencia de datos modernas.

</v-clicks>

</div>

</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://doi.org/10.1186/s13059-019-1724-1" target="_blank">Lloret-Llinares M et al. (2019) Genomics and data science: an application within an umbrella. Genome Biology 20: 209.</a></Footnote>
</Footnotes>

---
layout: default
---

<div class="template-badge">Volumen de Datos · Big Data en Biología</div>
<div class="flex justify-center mt-2 mb-2">
  <img
    src="https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs13059-019-1724-1/MediaObjects/13059_2019_1724_Fig2_HTML.png"
    class="max-h-90 w-auto object-contain rounded-lg shadow-lg border border-gray-700 bg-white p-1"
    alt="Fig 2. Volumen de datos: genomics vs earth science, social sciences (Lloret-Llinares et al. 2019)"
  />
</div>

<div class="grid grid-cols-3 gap-3 text-xs text-center mt-1">
  <div v-click class="p-2 bg-gray-900 rounded-lg border border-emerald-500/40">
    <div class="font-bold text-emerald-400 mb-0.5">🧬 Genómica</div>
    <div class="text-gray-300">Mayor tasa de crecimiento de todas las disciplinas analizadas.</div>
  </div>
  <div v-click class="p-2 bg-gray-900 rounded-lg border border-blue-500/40">
    <div class="font-bold text-blue-400 mb-0.5">🌍 Ciencias de la Tierra</div>
    <div class="text-gray-300">Volumen total aún mayor que genómica, pero crecimiento más lento.</div>
  </div>
  <div v-click class="p-2 bg-gray-900 rounded-lg border border-purple-500/40">
    <div class="font-bold text-purple-400 mb-0.5">📊 Ciencias Sociales</div>
    <div class="text-gray-300">Volumen órdenes de magnitud menor. Genómica los supera ampliamente.</div>
  </div>
</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://doi.org/10.1186/s13059-019-1724-1" target="_blank">Lloret-Llinares M et al. (2019) Genomics and data science: an application within an umbrella. Genome Biology 20: 209.</a></Footnote>
</Footnotes>

---
layout: default
---

<div class="template-badge">Repositorios de Datos Biológicos</div>

# Repositorios Globales e INSDC
<br>
<div class="grid grid-cols-12 gap-5 mt-1">

<div class="col-span-7 flex flex-col items-center">
  <img
    src="https://microbenotes.com/wp-content/uploads/2023/04/Primary-Databases.jpg"
    class="max-h-120 w-auto object-contain rounded-lg shadow-lg border border-gray-700 bg-white p-1"
    alt="Primary Databases in Bioinformatics: NCBI, EBI, DDBJ, PDB, UniProt"
  />
  <span class="text-[10px] text-gray-500 mt-1">Principales bases de datos primarias en bioinformática</span>
</div>

<div class="col-span-5 text-sm flex flex-col justify-center gap-2">

<v-clicks>

- **INSDC** (Consorcio Internacional):
  - 🇺🇸 **NCBI** — *SRA, GenBank, GEO, RefSeq*
  - 🇪🇺 **EBI / ENA** — *UniProt, Ensembl*
  - 🇯🇵 **DDBJ** — *DNA Data Bank of Japan*
- **Estructuras 3D**:
  - **PDB** — Estructuras macromoleculares (PDB / mmCIF)
- **Proteínas**:
  - **UniProtKB / Swiss-Prot** — Curadas manualmente
- **Expresión Génica**:
  - **GEO & ArrayExpress** — RNA-Seq, Microarrays

</v-clicks>

</div>

</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://microbenotes.com/primary-databases/" target="_blank">MicrobeNotes — Primary Databases in Bioinformatics</a></Footnote>
</Footnotes>

---
layout: end
transition: fade-out
---

<div class="template-badge">SALIDA</div>

## ¿Por qué importa cómo guardamos los datos biológicos?

<br>

<v-clicks>

- 💾 ¿Qué diferencia hay entre guardar una secuencia en texto plano y en un formato comprimido como `.gz`?
- 🧬 ¿Por qué crees que existen tantos formatos distintos en bioinformática si todos guardan secuencias?
- 🌐 Si tienes datos genómicos importantes, ¿los guardarías solo en tu computadora? ¿Dónde más podrías respaldarlos?

</v-clicks>
