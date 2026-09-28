---
theme: academic
layout: course-cover
title: Sílabo · Análisis Bioinformático 2026-II
author: Francisco Ascue
week: Sílabo 2026-II
unit: Estudios Específicos Electivos
colorSchema: dark
transition: fade-out
mdc: true
drawings:
  persist: false
---

# Análisis Bioinformático

<p class="lead">Curso Teórico-Práctico.</p>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulrA2swoRaQUknKVJ5HjBkjD6IV-hs5CLuYLgFy5yyY67jn3AaIoDJhE&s=10" class="w-120 mx-50 my-10  rounded-xl shadow-lg border-2" />

<!--
[inicio] Presentar la asignatura, el periodo y su carácter teórico-práctico.
[pregunta] ¿Qué análisis bioinformático han ejecutado antes y qué necesitarían para repetirlo?
-->

---
hideInToc: true
layout: intro
---

<div class="eyebrow text-xl">Francisco Ascue Orosco</div>

<div class="leading-7 opacity-85 max-w-[75%] text-sm">
<strong class="text-emerald-600 dark:text-emerald-400 text-base">Biólogo Genetista Biotecnólogo</strong><br>
MSc (Computer Science / Data Science / Bioinformática)<br>
<span class="inline-flex items-center gap-1.5 font-semibold text-gray-800 dark:text-gray-200 my-0.5"><img src="/renacyt.png" class="h-4 inline-block object-contain rounded bg-white px-0 shadow-xs" alt="Renacyt" /> Calificado como Investigador Renacyt</span><br>
<span class="inline-flex items-center gap-1.5 font-semibold text-gray-800 dark:text-gray-200 my-0.5"><img src="/iscb_logo.png" class="h-5 inline-block object-contain rounded bg-white px-0 mx-1 shadow-xs" alt="ISCB" /> Miembro de la Sociedad Internacional de Bioinformática (ISCB)</span><br>
Professor en UNSAAC · Docente de Bioinformática y Biología Molecular.
</div>

<div class="my-6 flex flex-col gap-2.5 text-sm">
  <div class="flex items-center gap-2.5">
    <carbon-logo-github class="text-lg opacity-80 shrink-0"/>
    <a href="https://github.com/FranciscoAscue" target="_blank" class="hover:underline text-xs">github.com/FranciscoAscue</a>
  </div>
  <div class="flex items-center gap-2.5">
    <carbon-earth class="text-lg text-emerald-500 opacity-90 shrink-0"/>
    <a href="https://asvi.org.pe/" target="_blank" class="hover:underline text-xs">asvi.org.pe (Portafolio)</a>
  </div>
  <div class="flex items-center gap-2.5">
    <carbon-email class="text-lg opacity-80 shrink-0"/>
    <a href="mailto:francisco.ascue@unsaac.edu.pe" target="_blank" class="hover:underline text-xs">francisco.ascue@unsaac.edu.pe</a>
  </div>
</div>

<img src="/profile.png" class="rounded-full w-50 h-50 object-cover abs-tr mt-30 mr-30 shadow-xl border-4 border-emerald-500/30 dark:border-emerald-400/20" alt="Francisco Ascue" />

---
layout: center
---

<div class="eyebrow text-xl">Datos de la asignatura</div>
<br>

| Campo | Información |
|---|---|
| **Asignatura** | **Análisis Bioinformático** - Código CB117ABI |
| Periodo | 2026-II |
| **Área** | Estudios Específicos Electivos (EEEP) |
| **Naturaleza** | Teórico-práctica |
| **Docente** | Msc. Francisco Ascue Orosco |
| **Contacto** | <a href="https://mail.google.com/mail/?view=cm&fs=1&to=francisco.ascue@unsaac.edu.pe&su=Consulta" target="_blank" class="px-3 py-1 bg-gray-200 text-black rounded">Enviar correo por Gmail</a> |
| **Numero de creditos** | 3 Creditos (2 horas de teoría y 2 horas de practica) |
| **Metodologia**| Presencial con componentes virtuales |
| Requisitos | Curso de Genética Molecular, Curso de genética general |
| Escuela Profesional | Biología |


<div class="synthesis">Los detalles completos de la asignatura estaran publicados en el sillabus oficial del curso, publicado en <b>Plataforma Virtual de la Universidad</b> / <b>Classroom del Curso</b></div>

---
layout: statement
class: glow-right
---

<div class="eyebrow text-lg">Sumilla</div>

<div class="text-center items-center justify-center">
<p class="text-justify font-sans">La asignatura de analisís bioinformatico es un curso de naturaleza teórico–práctico, perteneciente al plan formativo de Estudios Específicos Electivos (EEE), que conduce al estudiante a diseñar, implementar y comunicar <b>flujos de análisis reproducibles</b> para el procesamiento, interpretación y contraste de <b>datos genómicos</b> en contextos académicos y de investigación. Comprende: fundamentos de bioinformática; fundamentos de programación; manejo de bases de datos biológicas; técnicas de secuenciamiento y  análisis computacional de secuencias y genomas.</p>
</div>
<!--
[pausa] Dejar visible la primera frase.
[clic mental] Contrastar “obtener una salida” con “defender un análisis”.
-->

---
layout: statement
class: glow-left
---

<div class="eyebrow text-lg">Competencia</div>

<div class="text-center items-center justify-center">
<p class="text-justify font-sans">Competencia del Curso: El estudiante será capaz de: 
    <v-clicks>
        <li>Configurar entornos reproducibles en Linux.</li>
        <li>Automatizar pipelines Bash con control de errores.</li>
        <li>Analizar secuencias Sanger y NGS.</li>
        <li>Inferir filogenias (ML).</li>
        <li>Anotar, visualizar e interpretar datos omicos|Genomicos con rigor estadístico.</li>
        <li>Comunicar hallazgos de forma ética, reproducible y colaborativa.</li>
    </v-clicks>
</p>
</div>

---
layout: statement
class: glow-right
---

<div class="eyebrow text-lg">Resultados de aprendizaje</div>
<br>

<div class="grid-3">
  <v-clicks>
  <div class="card"><span class="tag">01</span><h2>Configurar</h2><p>Linux, Conda, datos y versiones.</p></div>
  <div class="card"><span class="tag">02</span><h2>Automatizar</h2><p>Pipelines Bash verificables.</p></div>
  <div class="card"><span class="tag">03</span><h2>Analizar</h2><p>Secuencias desde Sanger hasta NGS.</p></div>
  <div class="card"><span class="tag">04</span><h2>Evaluar</h2><p>Calidad, supuestos y soporte.</p></div>
  <div class="card"><span class="tag">05</span><h2>Interpretar</h2><p>Genomas y modelos moleculares.</p></div>
  <div class="card"><span class="tag">06</span><h2>Comunicar</h2><p>Evidencia, incertidumbre y procedencia.</p></div>
  </v-clicks>
</div>

<!--
[pausa] Relacionar cada resultado con un producto que se entregará durante el semestre.
-->

---
layout: center
class: glow-left
---
 
<div class="eyebrow text-lg">Unidad 1 · Construir el método</div>

<br>

| Semana | Pregunta | Evidencia |
|---:|---|---|
| 1 | ¿Qué representa el archivo? | Exploración de formatos |
| 2 | ¿Cómo expreso una solución? | Diseño de algoritmo |
| 3 | ¿Qué permiten afirmar los datos? | Estadisticas descriptivas |
| 4 | ¿Cómo trabajo en la terminal? | Uso de comandos en Bash |
| 5 | ¿Cómo repito el entorno? | Reproductibilidad y versionado de código |
| 6 | ¿Cómo conecto y registro pasos? | Construcción de un pipeline |
| 7 | ¿Cómo automatizo sin ocultar errores? | Control de errores en Bash |
| 8 | ¿Puedo integrar lo aprendido? | <b>Examen parcial</b>  / <b>Practica calificada</b>|

<!--
[delivery] Presentar la unidad como una historia acumulativa, no como temas aislados.
-->

---
layout: center
class: glow-right
---
 
<div class="eyebrow text-lg">Unidad 2 · Interpretar secuencias</div>
<br>

| Semana | Pregunta | Evidencia |
|---:|---|---|
| 9 | ¿Cómo construyo un consenso Sanger? | Genero consenso de secuencias |
| 10 | ¿Qué significa que dos secuencias se parezcan? | BLAST local |
| 11 | ¿Qué hipótesis representa un árbol? | Genero árbol filogenético |
| 12 | ¿Cuándo una lectura NGS es utilizable? | informe QC |
| 13 | ¿Referencia o ensamblaje de novo? | Evaluó el tipo de ensamblaje |
| 14 | ¿Cómo paso de variante a función? | VCF + anotación |
| 15 | ¿Qué sugiere una pose de docking? | Ejecuto protocolo docking |
| 16 | ¿Puedo defender el flujo completo? | <b>Examen Final</b> / <b>Practica calificada</b>|

<!--
[conexión] Anticipar el caso Mus musculus/COX1, BLAST local y los datos NGS ya usados en cursos anteriores.
-->

---
layout: center
class: glow-left
---

<div class="eyebrow text-lg">Estrategia metodológica</div>
<br>

<div class="grid-2">
<v-clicks>
  <ConceptCard title="Think–pair–share" tag="Discusión">Pensar individualmente, contrastar en pareja y defender una decisión.</ConceptCard>
  <ConceptCard title="Pair programming" tag="Práctica" tone="violet">Alternar conducción y revisión con una evidencia concreta.</ConceptCard>
  <ConceptCard title="Mini-proyectos" tag="Integración" tone="green">Conectar datos, código, resultados y límites durante varias semanas.</ConceptCard>
  <ConceptCard title="Pruebas y bitácora" tag="Verificación" tone="amber">Comprobar entradas, registrar errores y conservar salidas.</ConceptCard>
</v-clicks>
</div>

<!--
[conexión] Explicar que ninguna dinámica reemplaza el trabajo individual evaluable.
-->

---
layout: center
class: glow-left
---

<div class="eyebrow text-lg">Evaluación</div>
<br>

| Unidad | Actividad | Peso en unidad | Peso global |
|---|---|---:|---:|
| I | Prácticas de laboratorio (PL) | 30 % | 15 % |
| I | Practica Calificada (PC) | 20 % | 10 % |
| I | Examen parcial (EP) | 50 % | 25 % |
| II | Prácticas de laboratorio (PL) | 30 % | 15 % |
| II | Practica Calificada (PC) | 20 % | 10 % |
| II | Examen Final (EP) | 50 % | 25 % |
<div class="synthesis">La evaluación de las prácticas de laboratorio (PL) seran presencial y demostrativo.</div> 
<div class="synthesis">Para las practicas calificadas (PC) realizaran un <b>video</b> .</div>
<!--
[pausa] Mostrar cómo una salida correcta puede perder puntos si no existe evidencia del proceso.
-->


---
layout: two-cols
---

<div class="flex flex-col justify-center h-full pr-4">
  <div class="eyebrow">Google Classroom</div>

  <a href="https://classroom.google.com/c/ODc2NTA1NTU2NDE5?cjc=ceyzj6dd" target="_blank" class="mt-4 flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:border-green-500 transition-colors no-underline">
    <img src="/classroom_logo.svg" class="w-10 h-10 shrink-0" alt="Classroom" />
    <div>
      <div class="font-bold text-gray-900 dark:text-gray-100 text-base">Unirse al curso</div>
      <div class="text-xs text-gray-500 dark:text-gray-400">Acceder a Google Classroom →</div>
    </div>
  </a>

  <div class="mt-4 p-3 rounded border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm font-semibold flex items-start gap-2">
    <span class="text-xl shrink-0">⚠️</span>
    <span>Importante: Deben unirse exclusivamente con su correo institucional (@unsaac.edu.pe).</span>
  </div>
</div>

::right::

<div class="flex flex-col items-center justify-center h-full pl-4">
  <img src="/qr_classroom.png" class="w-48 h-48 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700 bg-white p-2" alt="QR Classroom" />
  <p class="text-xs text-gray-400 mt-3 font-mono">Código de clase: ceyzj6dd</p>
</div>

---
layout: two-cols
---

<div class="flex flex-col justify-center h-full pr-4">
  <div class="eyebrow flex items-center gap-2">
    <carbon-logo-github class="text-lg" /> Repositorio GitHub
  </div>

  <a href="https://github.com/FranciscoAscue/bioinformatics-course" target="_blank" class="mt-4 flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:border-blue-500 transition-colors no-underline">
    <carbon-logo-github class="text-4xl shrink-0 text-gray-900 dark:text-gray-100" />
    <div>
      <div class="font-bold text-gray-900 dark:text-gray-100 text-base">bioinformatics-course</div>
      <div class="text-xs text-gray-500 dark:text-gray-400">Ver repositorio oficial →</div>
    </div>
  </a>

  <div class="mt-4 p-3 rounded border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium flex items-start gap-2">
    <carbon-code class="text-xl shrink-0 mt-0.5" />
    <span>El código fuente, scripts de Bash, pipelines y guías de laboratorio estarán centralizados aquí.</span>
  </div>
</div>

::right::

<div class="flex flex-col items-center justify-center h-full pl-4">
  <div class="w-full rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
    <div class="px-3 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
      <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
      <div class="ml-2 text-[10px] text-gray-400 font-mono truncate">github.com/FranciscoAscue/bioinformatics-course</div>
    </div>
    <img src="/github_preview.png" class="w-full h-56 object-cover object-top" alt="Preview del Repositorio GitHub" />
  </div>
</div>

<!--
[acuerdo] Confirmar con el grupo el canal institucional y la convención para nombrar entregas.
-->

---
layout: center
---

<div class="eyebrow text-lg">Bibliografía y software esencial</div>
<br> 

- Katoh y Standley · **MAFFT** para alineamiento múltiple;
- Langmead y Salzberg · **Bowtie 2** para mapeo sensible;
- Li y Durbin · **BWA** para alineamiento de lecturas;
- Danecek et al. · **SAMtools/BCFtools** para alineamientos y variantes;
- Bolger et al. · **Trimmomatic** para recorte;
- Andrews · **FastQC** para control de calidad;
- Manuales de las versiones efectivamente usadas en cada práctica.

<!--
[nota] Presentar esta selección como punto de entrada. Los datos bibliográficos completos permanecen en el sílabo, la carpeta compartida y Zotero.
-->

---
layout: end
---

# Preguntas  ? 

¿Qué necesitas para aprender bien en este curso?
