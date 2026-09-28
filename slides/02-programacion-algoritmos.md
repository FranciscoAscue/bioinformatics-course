---
theme: academic
layout: course-cover
title: Programación y algoritmos
author: Francisco Ascue
week: Semana 02
unit: Unidad 1 · Fundamentos
colorSchema: dark
transition: fade-out
mdc: true
drawings:
  persist: false
---

<div class="template-badge">Programación en Biociencias y Bioinformática</div>

# Programación y Algoritmos

<p class="lead">¿Por qué un biólogo necesita programar? Fundamentos del pensamiento computacional aplicados a la bioinformática.</p>

---
layout: center
---

<div class="template-badge">Tabla de contenido</div>

# Temas

- El código como herramienta científica en biología moderna.
- Sintaxis, pseudocódigo y lenguajes de programación.
- Definición de problema, algoritmo y su representación.
- Análisis de algoritmos: eficiencia y complejidad.
- Estrategias de diseño algorítmico en bioinformática.


---
layout: default
---

<div class="template-badge">Marco Teórico</div>

# ¿Para que sirve el código en biología?

<div class="grid grid-cols-12 gap-4 mt-2">

<div class="col-span-7 flex flex-col justify-center gap-4 text-sm">

<v-clicks>

- El código no es solo una herramienta técnica: es un **medio de comunicación científica** que permite expresar hipótesis, modelos y análisis de forma reproducible.
- Seemann et al. (2023) identifican tres roles fundamentales del código en biología:
  - **Abstracción**: Simplificar la complejidad biológica en modelos computacionales.
  - **Subdominio**: Integrar herramientas especializadas (BLAST, samtools, DESeq2).
  - **Comunicación**: Compartir análisis con la comunidad científica de forma reproducible.
- El "punto ideal" (*sweet spot*) del bioinformático es el código de **aplicación de dominio**: humano, legible y enfocado en resolver preguntas biológicas.

</v-clicks>

</div>

<div class="col-span-5 flex flex-col justify-center">

<div class="p-3 border border-emerald-500/40 rounded-xl text-sm">

<img src="https://miro.medium.com/1*h5TaVUfj_qB28F245aC-tA.png" alt="Diagrama de niveles de abstracción en bioinformática" class="w-95 h-auto"> 

<span class="text-xs text-center text-emerald-400 mt-2 block">El bioinformático trabaja en el nivel de aplicación<sup>1</sup></span>

</div>

</div>

</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10454959/" target="_blank">Seemann T et al. (2023) The roles of code in biology. PLOS Computational Biology.</a></Footnote>
</Footnotes>

---
layout: default
---

<div class="template-badge">Fundamentos · Programación</div>

<div class="grid grid-cols-12 gap-2 mt-1">

<div class="col-span-6 flex flex-col gap-1">

<v-clicks>

<div class="px-2 py-0 border border-emerald-500/40 rounded-xl">

La programación es el proceso de **diseñar e implementar** un conjunto de instrucciones que una computadora puede ejecutar para resolver un problema.
</div>

<div class="px-3 py-0 border border-blue-500/40 rounded-xl">   

Traducir una **pregunta biológica** (¿cuántas veces aparece el codón ATG en este gen?) en instrucciones ejecutables que producen un resultado reproducible.
</div>

<div class="px-3 py-0 border border-yellow-500/40 rounded-xl text-sm">

**Los tres componentes esenciales**
- **Entrada** (*input*): Datos biológicos (secuencias, matrices, archivos).
- **Proceso**: Operaciones lógicas y matemáticas.
- **Salida** (*output*): Resultados, tablas, visualizaciones.
</div>

</v-clicks>

</div>

<div class="col-span-6 flex flex-col gap-1">

<div v-click class="p-2 border rounded-xl text-sm font-mono">

```
Pregunta Biológica
      │
      ▼
┌─────────────────┐
│  Abstracción    │  → Definir el problema formalmente
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Algoritmo      │  → Pasos lógicos para resolverlo
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Implementación │  → Código Python / Bash
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Resultado      │  → Análisis reproducible
└─────────────────┘
```

</div>

</div>

</div>
---
layout: two-cols
---

<div class="template-badge">Fundamentos · Pseudocódigo</div>

# Pseudocódigo: El Puente

El **pseudocódigo** es una descripción informal de un algoritmo usando lenguaje natural mezclado con estructuras de programación. Permite **planificar la lógica** antes de codificar.

**¿Por qué usar pseudocódigo?**

<v-clicks>

- Independiente del lenguaje de programación.
- Facilita la comunicación entre biólogos y programadores.
- Ayuda a identificar errores lógicos antes de implementar.
- Estándar en publicaciones científicas de bioinformática.

</v-clicks>

::right::

<div class="pl-4 mt-1">

<div v-click class="p-2 m-1 border border-yellow-500/40 rounded-xl text-sm">

**Problema:** Contar nucleótidos en una secuencia de ADN.
**Pseudocódigo:**
```
contar_nucleotidos(s):
    nA = 0, nC = 0, nG = 0, nT = 0
    para cada i en s:
        si s[i] == 'A' → nA = nA + 1
        si s[i] == 'C' → nC = nC + 1
        si s[i] == 'G' → nG = nG + 1
        si s[i] == 'T' → nT = nT + 1
    retornar nA, nC, nG, nT
```

</div>

<div v-click class="mt-2 p-2 m-1 border border-emerald-500/40 rounded-xl text-xs">

**Implementación en Python:**
```python
def contar_nucleotidos(s):
    return {
        'A': s.count('A'),
        'C': s.count('C'),
        'G': s.count('G'),
        'T': s.count('T')
    }
```

</div>

</div>

---
layout: default
---

<div class="template-badge">Algoritmos · Definición</div>

<div class="grid grid-cols-12 gap-5 mt-2">

<div class="col-span-5 flex flex-col gap-3 text-sm">

<v-clicks>

<div class="p-4 border border-emerald-500/40 rounded-xl">

**Definición clásica**

Un **algoritmo** es una secuencia finita, precisa y sin ambigüedades de pasos que resuelve un problema o realiza una tarea.

</div>

<div class="p-4 border border-blue-500/40 rounded-xl">

**Propiedades esenciales**

1. **Finito**: Termina en algún momento.
2. **Preciso**: Cada paso es exacto y sin ambigüedad.
3. **Correcto**: Produce la salida esperada para cualquier entrada válida.
4. **General**: Resuelve toda una clase de problemas, no solo un caso.

</div>

</v-clicks>

</div>

<div class="col-span-7">
<div v-click class="p-2 border border-gray-700 rounded-xl text-xs">

**Ejemplo bioinformático: Transcripción ADN → ARN**
| | |
|:---|:---|
| **Dado** | Cadena de ADN `s` (solo `A`, `C`, `G`, `T`) |
| **Devuelve** | Cadena de ARN: reemplazar `T` → `U` |
| **Entrada** | `GATGGAACTTGACTACGTAAATT` |
| **Salida** | `GAUGGAACUUGACUACGUAAAUU` |

**Pseudocódigo:**
```
transcribir_ARN(S):
    ARN guarda el S original
    para cada nucleotido en ARN:
        si ARN[i] es un 'T':
            cambiar ARN[i] por 'U'
    retornar ARN
```
</div>
</div>
</div>

---
layout: default
---

<div class="template-badge">Análisis de Algoritmos</div>

No basta con que un algoritmo sea **correcto**: también debe ser **eficiente**. 
<div class="grid grid-cols-12 gap-5 mt-3">

<div class="col-span-5 flex flex-col gap-1 text-sm">

<v-clicks>

<div class="p-1 gap-1 border border-gray-700 rounded-xl text-xs">

**Criterios de análisis**
- **Tiempo de ejecución**: ¿Cuántos pasos realiza el algoritmo?
- **Espacio en memoria**: ¿Cuánta memoria necesita?
- **Peor caso** (*Big-O*): Cota superior del rendimiento.
</div>

<div class="p-1 border border-yellow-500/40 rounded-xl text-xs">

| Complejidad | Nombre | Ejemplo |
|:---|:---|:---|
| `O(1)` | Constante | Acceso a índice |
| `O(log n)` | Logarítmico | Búsqueda binaria |
| `O(n)` | Lineal | Recorrer secuencia |
| `O(n log n)` | Cuasilineal | Mergesort |
| `O(n²)` | Cuadrático | Selection Sort |
| `O(2ⁿ)` | Exponencial | Alineamiento sin optimizar |

</div>

</v-clicks>

</div>

<div class="col-span-7 flex flex-col">

<div class="p-1 m-1 border border-red-500/40 rounded-lg text-xs text-gray-300">

> ⚠️ Un genoma humano tiene ~3 × 10⁹ nucleótidos. Un algoritmo O(n²) requeriría ~9 × 10¹⁸ operaciones — impracticable.

</div>

<div v-click class="flex flex-col items-center">
  <img
    src="https://www.freecodecamp.org/news/content/images/2021/06/1_KfZYFUT2OKfjekJlCeYvuQ.jpeg"
    class="max-h-85 w-auto object-contain rounded-lg shadow-lg border border-gray-700 bg-white p-1"
    alt="Big-O Complexity Chart — crecimiento de algoritmos según tamaño de entrada"
  />
  <span class="text-[10px] text-gray-500 mt-1">Curva de crecimiento de complejidades Big-O — a mayor pendiente, peor escalabilidad.</span>
</div>

</div>

</div>


---
layout: default
---

<div class="template-badge">Complejidad asintótica</div>

Big‑O describe cómo crece el costo, no cuántos segundos tarda hoy

<div class="grid grid-cols-12 gap-5 mt-4 items-center">
  <div class="col-span-8 flex justify-center">
    <img
      src="https://commons.wikimedia.org/wiki/Special:FilePath/Comparison_computational_complexity.svg"
      alt="Comparación de curvas de complejidad computacional"
      class="max-h-100 rounded-xl bg-white p-2"
    />
  </div>
  <div class="col-span-4 space-y-3 text-sm">
    <div class="visual-card border-emerald-500/40"><code>O(1)</code> acceso directo</div>
    <div class="visual-card border-blue-500/40"><code>O(n)</code> recorrer ADN</div>
    <div class="visual-card border-yellow-500/40"><code>O(n log n)</code> ordenar/indexar</div>
    <div class="visual-card border-rose-500/40"><code>O(n²)</code> comparar pares</div>
  </div>
</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://commons.wikimedia.org/wiki/File:Comparison_computational_complexity.svg" target="_blank">Imagen: Cmglee, Comparison computational complexity, Wikimedia Commons, CC BY-SA 4.0.</a></Footnote>
  <Footnote :number=2><a href="https://doi.org/10.1016/j.biosystems.2017.03.003" target="_blank">Baichoo S, Ouzounis CA. (2017). BioSystems 156–157:72–85.</a></Footnote>
</Footnotes>

---
layout: default
---

<div class="template-badge">Experimento mental</div>

# La diferencia aparece cuando la entrada crece

<div class="text-sm text-gray-400 mb-2">Supuesto didáctico: <strong>10⁷ operaciones/s</strong> y <strong>n = 100 000</strong>; costo = <strong>f(n) operaciones</strong>.</div>

<div class="space-y-3 mt-3">
  <div class="grid grid-cols-12 gap-3 items-center">
    <code class="col-span-2 text-cyan-800"><b>O(log₂ n)</b></code>
    <div class="col-span-7 h-5 rounded-full bg-cyan-500" style="width:8%"></div>
    <div class="col-span-3 text-xl font-semibold">≈ 1,7 μs</div>
  </div>
  <div v-click class="grid grid-cols-12 gap-3 items-center">
    <code class="col-span-2 text-emerald-800"><b>O(n)</b></code>
    <div class="col-span-7 h-5 rounded-full bg-emerald-500" style="width:22%"></div>
    <div class="col-span-3 text-xl font-semibold">10 ms</div>
  </div>
  <div v-click class="grid grid-cols-12 gap-3 items-center">
    <code class="col-span-2 text-blue-800"><b>O(n log₂ n)</b></code>
    <div class="col-span-7 h-5 rounded-full bg-blue-500" style="width:38%"></div>
    <div class="col-span-3 text-xl font-semibold">≈ 166 ms</div>
  </div>
  <div v-click class="grid grid-cols-12 gap-3 items-center">
    <code class="col-span-2 text-rose-800"><b>O(n²)</b></code>
    <div class="col-span-7 h-5 rounded-full bg-rose-500" style="width:65%"></div>
    <div class="col-span-3 text-xl font-semibold">≈ 16,7 min</div>
  </div>
  <div v-click class="grid grid-cols-12 gap-3 items-center">
    <code class="col-span-2 text-purple-800"><b>O(n³)</b></code>
    <div class="col-span-7 h-5 rounded-full bg-purple-500"></div>
    <div class="col-span-3 text-xl font-semibold">≈ 3,2 años</div>
  </div>
</div>

<div class="mt-2 text-xs text-gray-400">Tiempo = f(n) / 10⁷ s · μs: microsegundos · ms: milisegundos · Barras ilustrativas, sin escala.</div>

<div v-click class="mt-4 p-3 rounded-xl border border-yellow-500/40 text-center text-sm">
Big‑O no predice el reloj: revela qué estrategia dejará de escalar primero.
</div>

---
layout: default
---

<div class="template-badge">Rendimiento · Tiempo, memoria y organización</div>

# La eficiencia algoritma debe ser complementada con :

<div class="grid grid-cols-3 gap-5 mt-6">
  <div class="p-4 border border-emerald-500/40 rounded-xl">
    <div class="text-xl font-bold" style="color: var(--bio-green)">Tiempo</div>
    <p>¿Cuántos pasos hago?</p>
    <div class="text-base">Contar bases exige recorrer la secuencia.</div>
  </div>
  <div v-click class="p-4 border border-blue-500/40 rounded-xl">
    <div class="text-xl font-bold" style="color: var(--bio-cyan)">Uso de memoria</div>
    <p>¿Qué necesito guardar?</p>
    <div class="text-base">Cuatro contadores o una lista de posiciones.</div>
  </div>
  <div v-click class="p-4 border border-purple-500/40 rounded-xl">
    <div class="text-xl font-bold" style="color: var(--bio-violet)">Estructura de datos</div>
    <p>¿Cómo lo organizo?</p>
    <div class="text-base">La organización cambia el costo de buscar y actualizar.</div>
  </div>
</div>

<div v-click class="mt-6 text-lg text-center">
Podemos hacer <strong>el mismo recorrido</strong> y usar <strong>distinta memoria</strong>.
</div>

<Footnotes separator>
  <Footnote :number=1><a href="https://doi.org/10.1016/j.biosystems.2017.03.003" target="_blank">Baichoo y Ouzounis (2017). Complejidad de algoritmos bioinformáticos. BioSystems 156–157:72–85.</a></Footnote>
</Footnotes>

<!--
[sin clic] Retomar la comparación de tiempos anterior: ¿qué más necesita una computadora para resolver el problema?
[clic 1] Contrastar guardar solo cuántas A hay con guardar todas sus posiciones. Son salidas distintas.
[clic 2] Definir estructura de datos como una forma de organizar información. Mostrar que influye tanto en tiempo como en memoria.
[clic 3] Anticipar el hilo del bloque: recorrer → organizar para buscar → reutilizar resultados → conectar elementos.
[límite] Al hablar de espacio extra excluiremos la entrada; lo indicaremos en cada ejemplo.
-->

---
layout: default
---

<div class="template-badge">Estructuras de datos · Dos formas de guardar</div>

# Una lista guarda orden; un diccionario, asociaciones

<div class="grid grid-cols-2 gap-6 mt-6">
  <div class="p-4 border border-blue-500/40 rounded-xl">
    <div class="text-xl font-bold" style="color: var(--bio-cyan)">Lista: elementos por posición</div>
    <div class="font-mono text-2xl my-6">[A, T, G, C, A]</div>
    <p>Podemos preguntar: <strong>¿qué base está en la posición 3?</strong></p>
    <div class="text-base">Conserva el orden y las repeticiones.</div>
  </div>
  <div v-click class="p-4 border border-emerald-500/40 rounded-xl">
    <div class="text-xl font-bold" style="color: var(--bio-green)">Diccionario: clave → valor</div>
    <div class="font-mono text-2xl my-6">A → 2 &nbsp; T → 1<br>G → 1 &nbsp; C → 1</div>
    <p>Podemos preguntar: <strong>¿cuántas A hay?</strong></p>
    <div class="text-base">Este resumen pierde las posiciones.</div>
  </div>
</div>

<div v-click class="mt-5 text-center text-lg">La pregunta determina qué información conviene conservar.</div>

<!--
[sin clic] Numerar las posiciones desde 1 en la pizarra. Usaremos esa convención en los ejemplos manuales.
[clic 1] Dibujar una flecha desde cada A hacia su contador. Definir clave y valor señalándolos.
[pregunta] Con solo el diccionario de conteos, ¿podemos reconstruir la secuencia original? Pedir dos secuencias con iguales conteos.
[clic 2] Aclarar que la lista representa aquí el orden de las bases, no una obligación de convertir cadenas de Python a listas.
-->

---
layout: default
---

<div class="template-badge">Recorrido · Un ejemplo completo</div>

# Contar bases: visitar una vez, guardar cuatro números

<div class="font-mono text-3xl tracking-widest text-center my-5">A T G C A G T</div>

<div class="grid grid-cols-2 gap-6 items-center">
  <div>

```text
contar:
A:
G:
C:
T:
en ATGCAGT
Devolver - COntar.

```

 </div>
  <div v-click class="p-4 border border-emerald-500/40 rounded-xl">
    <div class="text-lg font-bold">Resultado</div>
    <div class="font-mono text-xl mt-3">A: 2 · C: 1 · G: 2 · T: 2</div>
    <div class="mt-3">Comprobación: <strong>2 + 1 + 2 + 2 = 7</strong>.</div>
  </div>
</div>

<div v-click class="grid grid-cols-2 gap-6 mt-6 text-lg">
  <div><strong style="color: var(--bio-green)">Tiempo O(n)</strong><br>n bases → n visitas.</div>
  <div><strong style="color: var(--bio-cyan)">Espacio extra O(1)</strong><br>Cuatro contadores para cualquier n.</div>
</div>

---
layout: default
---

<div class="template-badge">Recorrido · Un ejemplo completo</div>

**#** **Contar bases: visitar una vez, guardar cuatro números**

<div class="font-mono text-3xl tracking-widest text-center my-5">A T G C A G T</div>

<div class="grid grid-cols-2 gap-6 items-start">

  <div>

```text

Iniciar A, C, G y T en cero

Para cada base de la secuencia:

    Sumar 1 a su contador

Devolver los cuatro conteos

```

  </div>

  <div v-click class="p-4 border border-emerald-500/40 rounded-xl">

  <div class="text-lg font-bold">Resultado</div>
  <div class="font-mono text-xl mt-3">A: 2 · C: 1 · G: 2 · T: 2</div>
  <div class="mt-3">Comprobación: <strong>2 + 1 + 2 + 2 = 7</strong>.</div>

  </div>

</div>

<div v-click class="grid grid-cols-2 gap-6 mt-6 text-lg">

  <div><strong style="color: var(--bio-green)">Tiempo O(n)</strong><br>n bases → n visitas.</div>

  <div><strong style="color: var(--bio-cyan)">Espacio extra O(1)</strong><br>Cuatro contadores para cualquier n.</div>

</div>

<!--

*[sin clic] Pedir a cuatro estudiantes llevar un contador cada uno mientras se lee la secuencia.*

*[clic 1] Comparar los conteos y verificar que sumen la longitud.*

*[clic 2] Duplicar mentalmente la entrada: aumentan las visitas, pero siguen siendo cuatro contadores.*

*[límite] Suponemos una entrada válida con A, C, G y T. La entrada ocupa O(n); O(1) describe los contadores extra en el modelo usual de costo por palabra.*

-->

---
layout: default
---

<div class="template-badge">Organización · Contar elementos repetidos</div>

**#** **Guardar un conteo evita volver a contar**

<p>Estos son los códigos de cinco muestras recibidas:</p>

<div class="font-mono text-3xl text-center my-5">[20, 10, 20, 30, 10]</div>

<div class="grid grid-cols-2 gap-6">

  <div>

```text

Crear un diccionario vacío

Para cada código:

    Si es nuevo, guardar código → 1

    Si ya existe, sumar 1 a su valor

```

  </div>

  <div v-click class="p-4 border border-emerald-500/40 rounded-xl text-xl">

  <div class="font-mono">20 → 2<br>10 → 2<br>30 → 1</div>

  <div class="text-base mt-4">Guardamos <strong>3 claves distintas</strong>, con sus conteos.</div>

  </div>

</div>

<div v-click class="mt-5 text-base">

Con una <strong>tabla hash</strong>, una implementación habitual del diccionario, consultar o actualizar cuesta <strong>O(1) en promedio</strong>. Guardar d códigos distintos requiere <strong>O(d)</strong> espacio.

</div>

<Footnotes separator>

  <Footnote :number=1><a href="https://pubmed.ncbi.nlm.nih.gov/21217122/" target="_blank">Conexión: Marçais y Kingsford (2011). Jellyfish usa tablas hash para contar fragmentos de ADN. Bioinformatics 27:764–770.</a></Footnote>

</Footnotes>

<!--

*[sin clic] Procesar los tres primeros códigos a mano: 20→1, 10→1, 20→2.*

*[clic 1] Pedir que completen los dos restantes antes de mostrar el resultado.*

*[clic 2] Introducir hash solo como una forma de localizar la entrada de una clave; no desarrollar funciones hash ni colisiones.*

*[límite] Costos para claves numéricas de tamaño fijo. O(1) es promedio, no garantía para cualquier caso. La tabla tiene un costo de almacenamiento propio; no afirmar que siempre ocupa menos bytes que una lista.*

*[conexión] La cita ofrece una aplicación posterior a fragmentos de ADN; el ejemplo de códigos es didáctico propio.*

-->

---
layout: default
---

<div class="template-badge">Búsqueda · Revisar uno por uno</div>

**#** **¿Está el código 50 en esta lista?**

<div class="grid grid-cols-7 gap-3 text-center font-mono text-2xl my-8">

  <div class="p-3 border rounded-lg">40</div><div class="p-3 border rounded-lg">10</div><div class="p-3 border rounded-lg">70</div><div class="p-3 border rounded-lg">20</div><div class="p-3 border border-emerald-500 rounded-lg">50</div><div class="p-3 border rounded-lg">30</div><div class="p-3 border rounded-lg">60</div>

</div>

<div class="grid grid-cols-2 gap-6">

  <div>

```text

Para cada código, de izquierda a derecha:

    Si es 50, responder «sí» y terminar

Al acabar la lista, responder «no»

```

  </div>

  <div v-click class="text-lg">

  <p><strong>En este caso:</strong> 5 comparaciones.</p>

  <p><strong>Si no aparece:</strong> hay que revisar los 7.</p>

  </div>

</div>

<div v-click class="mt-5 text-center text-lg"><strong>Búsqueda lineal:</strong> O(n) en el peor caso y O(1) espacio extra.</div>

<!--

*[sin clic] Señalar cada elemento, sin saltarse ninguno, y pedir que cuenten las comparaciones.*

*[clic 1] Cambiar la consulta a 80. ¿En qué momento podemos asegurar que no está?*

*[clic 2] Distinguir las cinco comparaciones del ejemplo de la cota para una lista de tamaño n.*

*[puente] Si los códigos estuvieran ordenados, ¿podríamos descartar varios de una vez?*

-->

---
layout: default
---

<div class="template-badge">Búsqueda · Descartar la mitad</div>

**#** **Una lista ordenada permite buscar por mitades**

<div class="font-mono text-2xl text-center mt-6">[10, 20, 30, <strong style="color: var(--bio-cyan)">40</strong>, 50, 60, 70]</div>

<div class="space-y-4 mt-6 text-lg">

  <div v-click><strong>1.</strong> Comparar con <strong>40</strong>: 50 es mayor → conservar [50, 60, 70].</div>

  <div v-click><strong>2.</strong> Comparar con <strong>60</strong>: 50 es menor → conservar [50].</div>

  <div v-click><strong>3.</strong> Comparar con <strong>50</strong>: encontrado.</div>

</div>

<div v-click class="grid grid-cols-2 gap-6 mt-7 p-4 border border-blue-500/40 rounded-xl text-base">

  <div><strong>Búsqueda binaria: O(log n)</strong><br>Cada comparación reduce el grupo aproximadamente a la mitad.</div>

  <div><strong>Condición: lista ordenada</strong><br>Ordenarla tiene un costo previo. Conservamos solo los límites de búsqueda.</div>

</div>

<!--

*[sin clic] Confirmar que la lista está ordenada. Buscar el mismo código 50 de la diapositiva anterior.*

*[clic 1] Tapar con la mano la mitad descartada.*

*[clic 2] Repetir sobre el grupo restante.*

*[clic 3] Contrastar tres comparaciones con las cinco de antes.*

*[clic 4] Conectar O(log n) con dividir repetidamente. Usamos un arreglo con acceso directo e implementación iterativa: O(1) espacio extra, sin copiar mitades.*

*[límite] El costo de la consulta excluye ordenar. Una lista ordenada no necesita por definición más memoria que una desordenada.*

-->

---
layout: default
---

<div class="template-badge">Estructuras de datos · Árbol de búsqueda</div>

**#** **Un árbol organiza las decisiones de búsqueda**

<div class="grid grid-cols-2 gap-6 items-center mt-4">

  <svg viewBox="0 0 460 285" class="w-full" role="img" aria-label="Árbol de búsqueda: raíz 40; hijos 20 y 60; hojas 10, 30, 50 y 70. La búsqueda de 50 recorre 40, 60 y 50.">

  <g fill="none" stroke="currentColor" stroke-width="2" opacity="0.4"><path d="M230 45 L120 140 L60 235 M120 140 L175 235 M230 45 L340 140 L405 235 M340 140 L290 235" /></g>

  <path d="M230 45 L340 140 L290 235" fill="none" stroke="var(--bio-green)" stroke-width="5" />

  <g fill="var(--bio-panel)" stroke="var(--bio-blue)" stroke-width="2"><circle cx="230" cy="45" r="28"/><circle cx="120" cy="140" r="28"/><circle cx="340" cy="140" r="28"/><circle cx="60" cy="235" r="28"/><circle cx="175" cy="235" r="28"/><circle cx="290" cy="235" r="28"/><circle cx="405" cy="235" r="28"/></g>

  <g fill="currentColor" style="font-size: 23px" text-anchor="middle" dominant-baseline="central"><text x="230" y="45">40</text><text x="120" y="140">20</text><text x="340" y="140">60</text><text x="60" y="235">10</text><text x="175" y="235">30</text><text x="290" y="235">50</text><text x="405" y="235">70</text></g>

  </svg>

  <div class="text-lg">

    <p>Cada círculo es un <strong>nodo</strong>.</p>

    <p>En cada nodo: valores menores a la <strong>izquierda</strong>; mayores a la <strong>derecha</strong>.</p>

    <div v-click class="p-3 border border-emerald-500/40 rounded-xl"><strong>Buscar 50:</strong> 40 → 60 → 50.</div>

  </div>

</div>

<div v-click class="mt-4 text-base">Un árbol <strong>balanceado</strong> mantiene pocos niveles: búsqueda O(log n). Guardar los nodos y sus conexiones requiere O(n) memoria.</div>

<!--

*[sin clic] Definir raíz y nodo. Pedir que decidan en qué dirección buscar 50 antes de leer la ruta.*

*[clic 1] Recorrer la ruta verde. Repetir oralmente con 30 y con un valor ausente.*

*[clic 2] Dibujar al margen 10→20→30→40: un árbol muy desequilibrado puede requerir O(n) comparaciones.*

*[límite] Se trata de un árbol binario de búsqueda con códigos únicos, no de un árbol filogenético. El dibujo es propio.*

*[puente] Construir esta organización lleva trabajo; ese trabajo puede reutilizarse en muchas consultas.*

-->

---
layout: default
---

<div class="template-badge">Tiempo y memoria · Preparar para reutilizar</div>

**#** **Organizar primero puede ahorrar búsquedas después**

<div class="grid grid-cols-2 gap-6 mt-6">

  <div class="p-4 border border-blue-500/40 rounded-xl">

  <div class="text-xl font-bold">Una consulta</div>

  <p>Recorrer la lista puede bastar.</p>

  <div class="text-base">Preparar otra estructura quizá cueste más que esta única búsqueda.</div>

  </div>

  <div v-click class="p-4 border border-emerald-500/40 rounded-xl">

  <div class="text-xl font-bold">Muchas consultas</div>

  <p>Ordenar o construir un índice una vez.</p>

  <div class="text-base">Un <strong>índice</strong> es una organización auxiliar para localizar datos.</div>

  </div>

</div>

<div v-click class="text-center text-xl my-6">Costo total = preparación + todas las consultas</div>

<div class="text-base">Además del tiempo, contamos la <strong>memoria del índice</strong>. Para decidir, necesitamos saber cuántas consultas habrá.</div>

<Footnotes separator>

  <Footnote :number=1><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2705234/" target="_blank">Conexión para la semana 13: Li y Durbin (2009). BWA reutiliza un índice de la referencia. Bioinformatics 25:1754–1760.</a></Footnote>

</Footnotes>

<!--

*[sin clic] Proponer una caja de fichas: encontrar una hoy o responder cien consultas durante el día.*

*[clic 1] Pedir que nombren el trabajo previo: ordenar, crear nodos o asociar claves.*

*[clic 2] Separar preparación y consultas en la pizarra. Preguntar si vale la pena mantener el índice cuando los datos cambian.*

*[límite] BWA se cita como aplicación de indexación; su índice basado en Burrows–Wheeler no es el árbol numérico de la diapositiva anterior. Su mecanismo se reserva para mapeo.*

-->

---
layout: default
---

<div class="template-badge">Programación dinámica · Primero, un problema pequeño</div>

**#** **¿De cuántas formas subimos tres escalones?**

<p>Podemos avanzar <strong>1 o 2 escalones</strong> por paso. El orden de los pasos cuenta.</p>

<div class="grid grid-cols-3 gap-6 text-center my-8 text-2xl">

  <div v-click class="p-5 border border-blue-500/40 rounded-xl">1 + 1 + 1</div>

  <div v-click class="p-5 border border-emerald-500/40 rounded-xl">1 + 2</div>

  <div v-click class="p-5 border border-purple-500/40 rounded-xl">2 + 1</div>

</div>

<div v-click class="text-xl text-center">Para llegar al escalón 3, el último paso viene del <strong>2</strong> o del <strong>1</strong>.</div>

<div v-after class="text-center text-lg mt-5">Formas de llegar a 3 = formas de llegar a 2 + formas de llegar a 1.</div>

<!--

*[sin clic] Dar 20 segundos para proponer rutas. Aclarar que no se puede retroceder ni saltar más de dos escalones.*

*[clic 1–3] Mostrar las tres rutas y comprobar que son distintas.*

*[clic 4] Agrupar por último paso: dos rutas vienen del escalón 2 y una del 1. Los grupos no se solapan y cubren todas las posibilidades.*

*[puente] Para cinco escalones volveremos a necesitar resultados que ya calculamos. ¿Dónde podemos guardarlos?*

-->

---
layout: default
---

<div class="template-badge">Programación dinámica · Guardar en una lista</div>

**#** **Resolver lo pequeño y reutilizarlo**

<p><strong>F[i]</strong> guarda cuántas formas hay de llegar al escalón <strong>i</strong>.</p>

<table class="w-full text-center text-xl mt-5">

  <thead><tr><th class="!text-center">Escalón i</th><th class="!text-center">0</th><th class="!text-center">1</th><th class="!text-center">2</th><th class="!text-center">3</th><th class="!text-center">4</th><th class="!text-center">5</th></tr></thead>

  <tbody><tr><td class="!text-center">Lista F</td><td class="!text-center">1</td><td class="!text-center">1</td><td class="!text-center">2</td><td class="!text-center">3</td><td class="!text-center">5</td><td class="!text-center"><span v-click style="color: var(--bio-green)">8</span></td></tr></tbody>

</table>

<div class="grid grid-cols-2 gap-6 mt-6">

  <div>

```text

Si n = 0, devolver 1

F[0] = 1; F[1] = 1

Para i desde 2 hasta n:

    F[i] = F[i-1] + F[i-2]

Devolver F[n]

```

  </div>

  <div v-click class="text-lg">

    <p><strong>F[5] = 5 + 3 = 8</strong></p>

    <p>Calculamos cada resultado una vez y lo guardamos para el siguiente paso.</p>

  </div>

</div>

<!--

*[sin clic] Explicar los casos iniciales: hay una forma de permanecer en el escalón 0 (no dar pasos) y una de llegar al 1.*

*[pregunta] Tapar el último valor. Pedir que lo calculen con los dos anteriores.*

*[clic 1] Mostrar 8 y reconstruir juntos F[2], F[3] y F[4].*

*[clic 2] Nombrar ahora la programación dinámica: resolver subproblemas que se repiten y reutilizar sus resultados. Aquí se usa una lista; no se necesita una matriz.*

*[límite] El pseudocódigo admite n entero no negativo; para n=0 se devuelve 1 directamente. La notación de esta lista empieza en 0 por el escalón inicial.*

-->

---
layout: default
---

<div class="template-badge">Programación dinámica · Elegir qué conservar</div>

**#** **Si solo queremos el total, bastan dos valores anteriores**

<div class="grid grid-cols-2 gap-6 mt-6">

  <div class="p-4 border border-blue-500/40 rounded-xl">

  <div class="text-xl font-bold">Guardar toda la lista</div>

  <div class="font-mono text-2xl my-6">[1, 1, 2, 3, 5, 8]</div>

  <p>Podemos consultar cualquier escalón ya calculado.</p>

  <div class="text-lg"><strong>n + 1 resultados guardados.</strong></div>

  </div>

  <div v-click class="p-4 border border-emerald-500/40 rounded-xl">

  <div class="text-xl font-bold">Actualizar una pareja</div>

  <div class="font-mono text-2xl my-6">(3, 5) → (5, 8)</div>

  <p>Sumamos los dos valores y desplazamos la pareja.</p>

  <div class="text-lg"><strong>Dos resultados y una suma temporal.</strong></div>

  </div>

</div>

<div v-click class="mt-6 text-xl text-center">Hacemos las mismas sumas, pero conservamos menos información.</div>

<!--

*[sin clic] Preguntar qué entradas de F se usan para calcular el valor siguiente.*

*[clic 1] Simular las parejas (1,1)→(1,2)→(2,3)→(3,5)→(5,8).*

*[clic 2] Relacionar con la diapositiva 10: tiempo y memoria son criterios diferentes. Al descartar valores se pierde el acceso inmediato a los resultados anteriores.*

*[límite] Comparamos cantidad de valores y sumas. Para n muy grande los enteros crecen en número de bits, por lo que dos valores no equivalen a una cantidad fija de bytes.*

-->

---
layout: default
---

<div class="template-badge">Programación dinámica · De una lista a una matriz</div>

**#** **Dos coordenadas: guardamos resultados en una tabla**

<p>Contamos rutas desde la esquina superior izquierda. Solo avanzamos <strong>→</strong> o <strong>↓</strong>.</p>

<div class="grid grid-cols-2 gap-6 mt-5 items-center">

  <table class="text-center text-2xl w-full" style="table-layout: fixed" aria-label="Rutas en una cuadrícula: primera fila 1, 1, 1; segunda fila 1, 2, 3; tercera fila 1, 3, 6.">

  <tbody>

  <tr><td class="bg-blue-500/15">1 <span class="text-sm">inicio</span></td><td>1</td><td>1</td></tr>

  <tr><td>1</td><td>2</td><td class="bg-blue-500/15">3</td></tr>

  <tr><td>1</td><td class="bg-blue-500/15">3</td><td class="bg-emerald-500/20"><span v-click>6</span></td></tr>

  </tbody>

  </table>

  <div class="text-lg">

  <p><strong>Cada celda = arriba + izquierda.</strong></p>

  <p>En los bordes hay una sola ruta.</p>

  <div v-click><strong>Destino: 3 + 3 = 6 rutas.</strong><br>Reutilizamos resultados vecinos.</div>

  </div>

</div>

<div class="mt-6 text-base">Una <strong>matriz</strong> es una tabla de filas y columnas. La lista guardaba un resultado por escalón; aquí guardamos uno por posición (fila, columna).</div>

<Footnotes separator>

  <Footnote :number=1><a href="https://pubmed.ncbi.nlm.nih.gov/7265238/" target="_blank">Conexión para la semana 10: Smith y Waterman (1981) reutilizan resultados en una matriz de alineamiento. J Mol Biol 147:195–197.</a></Footnote>

</Footnotes>

<!--

*[sin clic] Dibujar rutas hacia las tres celdas del borde superior. Luego calcular el 2 del centro.*

*[clic 1] Pedir el valor final antes de revelarlo.*

*[clic 2] Contrastar una coordenada en la lista con dos en la matriz. No hace falta explicar puntuaciones ni reconstrucción de alineamientos.*

*[límite] Esta cuadrícula cuenta caminos; Smith–Waterman utiliza otra regla para optimizar puntuaciones de similitud. La analogía es reutilizar subproblemas, no sumar rutas para alinear ADN.*

-->

---
layout: default
---

<div class="template-badge">Heurísticas · Una regla rápida puede fallar</div>

**#** **Elegir lo mayor primero no siempre da la mejor solución**

<p>Queremos sumar <strong>6 puntos</strong> con el menor número de fichas de <strong>1, 3 o 4</strong>. Hay fichas suficientes de cada valor.</p>

<div class="grid grid-cols-2 gap-6 mt-6">

  <div class="p-4 border border-yellow-500/40 rounded-xl">

  <div class="text-xl font-bold">Regla: elegir la mayor que quepa</div>

  <div class="font-mono text-3xl my-5">4 + 1 + 1</div>

  <div class="text-xl">3 fichas</div>

  </div>

  <div v-click class="p-4 border border-emerald-500/40 rounded-xl">

  <div class="text-xl font-bold">Una solución mejor</div>

  <div class="font-mono text-3xl my-5">3 + 3</div>

  <div class="text-xl">2 fichas</div>

  </div>

</div>

<div v-click class="mt-5 text-lg">Una <strong>heurística</strong> orienta la búsqueda con una regla práctica. Puede ahorrar trabajo, pero debemos comprobar qué garantía ofrece.</div>

<Footnotes separator>

  <Footnote :number=1><a href="https://pubmed.ncbi.nlm.nih.gov/2231712/" target="_blank">Conexión para la semana 10: Altschul et al. (1990). BLAST usa una búsqueda heurística. J Mol Biol 215:403–410.</a></Footnote>

</Footnotes>

<!--

*[sin clic] Pedir que apliquen la regla voraz hasta sumar 6. La regla siempre alcanza la suma porque existen fichas de 1.*

*[clic 1] Pedir una alternativa. Dos fichas es óptimo: no existe una ficha de 6.*

*[clic 2] Diferenciar obtener una solución válida de obtener la mejor según un criterio. Una estrategia voraz puede ser exacta en otros problemas si se demuestra.*

*[límite] BLAST no aplica esta regla de fichas. Se cita como conexión con heurísticas; semilla y extensión se explicarán en la semana 10.*

-->

---
layout: default
---

<div class="template-badge">Grafos · Elementos y conexiones</div>

**#** **Un grafo puede representar caminos entre salas**

<div class="grid grid-cols-2 gap-6 items-center mt-5">

  <svg viewBox="0 0 440 285" class="w-full" role="img" aria-label="Grafo de salas A, B, C y D. Pasillos A-B, A-C, B-D y C-D; cada pasillo se puede recorrer en ambos sentidos.">

  <path d="M65 140 L220 45 L375 140 L220 235 Z" fill="none" stroke="var(--bio-blue)" stroke-width="4" />

  <g fill="var(--bio-panel)" stroke="var(--bio-cyan)" stroke-width="2"><circle cx="65" cy="140" r="32"/><circle cx="220" cy="45" r="32"/><circle cx="375" cy="140" r="32"/><circle cx="220" cy="235" r="32"/></g>

  <g fill="currentColor" style="font-size: 27px" text-anchor="middle" dominant-baseline="central"><text x="65" y="140">A</text><text x="220" y="45">B</text><text x="375" y="140">D</text><text x="220" y="235">C</text></g>

  </svg>

  <div class="text-lg">

  <p><strong>Nodo:</strong> una sala.</p>

  <p><strong>Arista:</strong> un pasillo entre dos salas.</p>

  <div v-click class="p-3 border border-emerald-500/40 rounded-xl">De A a D podemos ir por <strong>B</strong> o por <strong>C</strong>.</div>

  <p v-click>El grafo guarda <strong>quién está conectado con quién</strong>.</p>

  </div>

</div>

<Footnotes separator>

  <Footnote :number=1><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5531759/" target="_blank">Conexión para la semana 13: Compeau et al. (2011). Grafos aplicados al ensamblaje. Nat Biotechnol 29:987–991.</a></Footnote>

</Footnotes>

<!--

*[sin clic] Pedir que cuenten salas y pasillos: cuatro y cuatro. Todos los pasillos se recorren en ambos sentidos.*

*[clic 1] Trazar A-B-D y A-C-D con el dedo.*

*[clic 2] Comparar con una lista de nombres: la lista sola no muestra las conexiones. El dibujo es propio.*

*[límite] En este bloque solo se introducen nodos, aristas y recorrido. Los grafos de de Bruijn, k-mers y decisiones de ensamblaje quedan para la semana 13.*

-->

---
layout: default
---

<div class="template-badge">Grafos · Recorrer sin repetir</div>

**#** **Para explorar el grafo, recordamos lo visitado**

<p>Queremos visitar todas las salas conectadas con A.</p>

<div class="grid grid-cols-2 gap-6 mt-5">

  <div class="p-4 border border-blue-500/40 rounded-xl">

  <div class="text-xl font-bold">Lista de vecinos</div>

  <div class="font-mono text-xl leading-loose mt-3">A → [B, C]<br>B → [A, D]<br>C → [A, D]<br>D → [B, C]</div>

  </div>

  <div>

  <div class="text-xl font-bold mb-4">Una exploración posible</div>

  <div v-click class="mb-4">Desde A, descubrimos B y C.</div>

  <div v-click class="mb-4">Desde B, descubrimos D. A ya está marcada.</div>

  <div v-click>Desde C y D, todas sus vecinas ya están marcadas.</div>

  </div>

</div>

<div v-click class="mt-5 text-lg text-center">Guardamos <strong>salas pendientes</strong> y <strong>salas descubiertas</strong> para no repetir trabajo.</div>

<!--

*[sin clic] Mantener el grafo anterior en la pizarra. Definir vecinos con la primera fila.*

*[clic 1] Marcar A al inicio. Después de explorar A: descubiertas A,B,C y pendientes B,C.*

*[clic 2] Explorar B y marcar D al añadirla: pendientes C,D.*

*[clic 3] Explorar C y luego D. La lista de pendientes queda vacía; el recorrido termina.*

*[clic 4] Volver a tiempo y memoria: recordar lo descubierto impide redescubrir nodos indefinidamente en el ciclo.*

*[límite] Este es un recorrido por amplitud con una cola; basta describirla como una lista en la que se atiende primero a quien llegó primero. No se evalúan nombres ni implementación de BFS.*

-->

---
layout: default
---

<div class="template-badge">Diseño · Volver a una pregunta biológica</div>

**#** **Buscar un patrón sin perder solapamientos**

<p><strong>Entrada:</strong> secuencia <code>ATATATA</code> y patrón <code>ATA</code>.<br><strong>Salida:</strong> todas las posiciones de inicio, contando solapamientos y desde 1.</p>

<div class="grid grid-cols-2 gap-6 mt-5">

  <div>

```text

Iniciar una lista vacía de posiciones

Para inicio desde 1 hasta n - m + 1:

    Comparar las m bases con el patrón

    Si todas coinciden:

        Guardar inicio

Devolver las posiciones guardadas

```

  </div>

  <div class="p-4 border border-emerald-500/40 rounded-xl">

  <div class="text-base">n = 7 bases · m = 3 bases</div>

  <div class="font-mono text-xl leading-loose mt-3">1: ATA ✓<br>2: TAT ✗<br>3: ATA ✓<br>4: TAT ✗<br>5: ATA ✓</div>

  </div>

</div>

<div v-click class="mt-5 text-xl text-center"><strong>Resultado: [1, 3, 5].</strong> Avanzar una base permite detectar solapamientos.</div>

<!--

*[sin clic] Acordar primero que buscamos coincidencias exactas y que dos apariciones pueden compartir bases.*

*[pregunta] ¿Qué ocurriría si después de una coincidencia avanzáramos tres bases?*

*[clic 1] Señalar que se perdería la aparición de la posición 3. Ejecutar el algoritmo a mano antes de programarlo.*

*[límite] n es la longitud de la secuencia; m, la del patrón. Suponemos 1≤m≤n y A,C,G,T. Tiempo peor caso O((n-m+1)m); la lista de r resultados requiere O(r) memoria, más O(1) de trabajo si comparamos por índices.*

-->

---
layout: default
---

<div class="template-badge">Evaluación · Predecir y luego medir</div>

**#** **Contar pasos y medir una ejecución se complementan**

<div class="grid grid-cols-2 gap-6 mt-6">

  <div class="p-4 border border-blue-500/40 rounded-xl">

  <div class="text-xl font-bold">Antes: analizar el algoritmo</div>

  <p>¿Cómo crece el trabajo?</p>

  <div class="text-base">Buscar el patrón de m bases en n bases requiere hasta <strong>(n − m + 1) × m</strong> comparaciones.</div>

  <div class="text-base mt-4">Si guardamos r posiciones, la salida ocupa <strong>O(r)</strong> espacio.</div>

  </div>

  <div v-click class="p-4 border border-emerald-500/40 rounded-xl">

  <div class="text-xl font-bold">Después: medir el programa</div>

  <p>¿Qué ocurrió al ejecutarlo?</p>

  <div class="text-base">Registrar tamaño de entrada, tiempo y memoria usada.</div>

  <div class="text-base mt-4">Un <strong>benchmark</strong> compara ejecuciones bajo condiciones definidas.</div>

  </div>

</div>

<div v-click class="mt-6 text-lg text-center">Comparar con <strong>los mismos datos y la misma salida esperada</strong>.</div>

<!--

*[sin clic] Recuperar las cinco posiciones de inicio y las tres bases del patrón: como máximo 15 comparaciones de bases en el ejemplo.*

*[clic 1] Aclarar que esos pasos no son segundos: influyen la máquina, el lenguaje y la lectura de datos.*

*[clic 2] Si se comparan dos programas, mantener datos, tarea y equipo; repetir mediciones y registrar versiones. La corrección se comprueba antes de interpretar una mejora de tiempo.*

*[límite] La RAM total medida incluye entrada, salida y entorno de ejecución; no es lo mismo que el espacio auxiliar del algoritmo.*

-->

---
layout: default
---

<div class="template-badge">Guía de decisión · Recuperar las ideas</div>

**#** **Elegimos una estrategia según lo que necesitamos**

<table class="w-full text-base mt-5">

  <thead><tr><th class="!text-left">Si necesito…</th><th class="!text-left">Puedo…</th><th class="!text-left">Debo considerar…</th></tr></thead>

  <tbody>

  <tr><td class="!text-left">Contar bases</td><td class="!text-left">Recorrer y actualizar contadores</td><td class="!text-left">Visitar toda la entrada</td></tr>

  <tr><td class="!text-left">Buscar muchas veces</td><td class="!text-left">Ordenar o construir un índice</td><td class="!text-left">Preparación y memoria</td></tr>

  <tr><td class="!text-left">Reutilizar subresultados</td><td class="!text-left">Usar programación dinámica</td><td class="!text-left">Qué resultados conservar</td></tr>

  <tr><td class="!text-left">Explorar conexiones</td><td class="!text-left">Representar un grafo y recorrerlo</td><td class="!text-left">Recordar nodos descubiertos</td></tr>

  <tr><td class="!text-left">Reducir la búsqueda</td><td class="!text-left">Proponer una heurística</td><td class="!text-left">Qué solución podría omitir</td></tr>

  </tbody>

</table>

<div v-click class="mt-6 text-xl text-center">Pregunta → entrada y salida → pasos → memoria → comprobación</div>

<!--

*[sin clic] Pedir un ejemplo visto en clase por cada fila, sin leer la estrategia de inmediato.*

*[clic 1] Conectar con la semana 2 del sílabo: la evidencia es un algoritmo y una prueba de escritorio. Los programas especializados se estudiarán más adelante.*

*[pregunta] Si dos soluciones son correctas, ¿qué información necesitamos para elegir? Recuperar tamaño, consultas, tiempo y memoria.*

-->

---
layout: default
---

<div class="template-badge">Actividad breve · Pensar, comparar y comprobar</div>

**#** **Probemos el algoritmo antes de escribir código**

<p><strong>En parejas · 4 minutos.</strong> Busquen el patrón <code>AA</code> en <code>AAAA</code>.</p>

<ol class="text-lg space-y-4 mt-6">

  <li>Escriban la salida: posiciones desde 1, incluyendo solapamientos.</li>

  <li>Recorran el pseudocódigo anterior y anoten las posiciones probadas.</li>

  <li>Si solo quisiéramos el número de apariciones, ¿qué guardarían?</li>

</ol>

<div v-click class="p-4 border border-emerald-500/40 rounded-xl mt-6 text-lg">

  <strong>Posiciones: [1, 2, 3].</strong> Para devolver solo el total, basta un contador con valor <strong>3</strong>.

</div>

<div v-click class="mt-4 text-base">La salida solicitada cambia la memoria necesaria, aunque revisemos las mismas posiciones.</div>

<!--

*[sin clic] Dar un minuto individual y dos para comparar en pareja. Solicitar una prueba de escritorio antes de revelar.*

*[clic 1] Pedir a una pareja que justifique por qué no hay una cuarta posición válida.*

*[clic 2] Cerrar el ciclo con la diapositiva 10: guardar posiciones y contar apariciones comparten el recorrido, pero producen salidas distintas.*

*[comprobación] Preguntar qué devolverían si el patrón fuera TT: lista vacía o contador cero, según la salida solicitada.*

*[puente] Pasar a las tres diapositivas de cierre ya preparadas: competencia científica, Python y reflexión final.*

-->

---
layout: default
---

<div class="template-badge">Síntesis · PMC4896647 & PMC10454959</div>

**#** **El Biólogo Computacional Moderno**

<div class="grid grid-cols-12 gap-1 mt-1">

<div class="col-span-7 flex flex-col gap-3 text-sm">

<v-clicks>

<div class="p-1 border border-emerald-500/40 rounded-xl">

****La fluidez computacional como competencia científica****

Brown et al. (2016) argumentan que programar no es opcional para un cientifico moderno: es comparable al manejo de pipetas o microscopios.

</div>

<div class="p-1 border border-blue-500/40 rounded-xl">

****El código como pilar de la reproducibilidad****: 

Seemann et al. (2023) enfatizan que el código bien escrito y documentado es la base de la ****ciencia abierta****.

</div>

<div class="p-1 border border-yellow-500/40 rounded-xl">

****Algoritmos ≠ Código genérico****

Los algoritmos bioinformáticos deben estar diseñados pensando en las características especiales de los datos biológicos.

</div>

</v-clicks>

</div>

<div class="col-span-5 flex flex-col justify-center gap-1 text-xs">

<div v-click class="p-1 border border-gray-700 rounded-xl">

****Habilidades del bioinformático (Semana 2)****

```

Pregunta biológica

      │

      ▼

 Abstracción del problema

      │

      ▼

 Implementación (Python)

      │

      ▼

 Análisis de eficiencia (Big-O)

      │

      ▼

 Optimización del algoritmo

      │

      ▼

 Resultado reproducible

```

</div>

</div>

</div>

<Footnotes separator v-after>

  <Footnote :number=1><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4896647/" target="_blank">Brown CT et al. (2016) An Introduction to Programming for Bioscientists. PLOS Comp. Biol.</a></Footnote>

  <Footnote :number=2><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10454959/" target="_blank">Seemann T et al. (2023) The roles of code in biology. PLOS Comp. Biol.</a></Footnote>

</Footnotes>

---
layout: two-cols
---

<div class="template-badge">Marco Teórico · PMC4896647</div>

**#** **¿Por qué Python en Bioinformática?**

Brown et al. (2016) argumentan que Python es el lenguaje ideal para biocientíficos por su equilibrio entre ****legibilidad**** y ****poder computacional****:

<v-clicks>

- ****Sintaxis clara****: Reduce la barrera de entrada para biólogos sin formación formal en informática.

- ****Ecosistema maduro****: BioPython, NumPy, pandas, Matplotlib, Scikit-learn.

- ****Interoperabilidad****: Facilita la conexión con pipelines de Bash, R y herramientas de línea de comandos.

- ****Comunidad científica****: Adoptado ampliamente en revistas, repositorios y pipelines de referencia.

</v-clicks>

::right::

<div class="pl-4">

<div v-click class="mb-4 p-3 border border-blue-500/40 rounded-lg text-sm">

****Biología moderna = Datos masivos****

```python

*# Contar nucleótidos en una secuencia*

secuencia = "ATGCTTCAGAAAGGTCTTACG"

conteo = {

    'A': secuencia.count('A'),

    'T': secuencia.count('T'),

    'G': secuencia.count('G'),

    'C': secuencia.count('C')

}

print(conteo)

*# {'A': 6, 'T': 6, 'G': 5, 'C': 4}*

```

</div>

<div v-click class="p-3 border border-purple-500/40 rounded-lg text-xs text-gray-300">

*> *"Python's strength is not its speed, but its ability to let scientists focus on the biology rather than the programming."**

— Brown et al., 2016 <sup>1</sup>

</div>

</div>

<Footnotes separator v-after>

  <Footnote :number=1><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4896647/" target="_blank">Brown CT et al. (2016) An Introduction to Programming for Bioscientists: A Python-Based Primer. PLOS Computational Biology.</a></Footnote>

</Footnotes>

---
layout: end
transition: fade-out
---

<div class="template-badge">SALIDA</div>

## Reflexión: Código, Algoritmos y Biología

<br>

<v-clicks>

- 🧬 Si tienes una secuencia de ADN de 3.000 millones de nucleótidos, ¿qué tipo de algoritmo usarías para buscar un patrón específico? ¿Por qué no fuerza bruta?
- 🔁 ¿Cuál es la diferencia entre escribir código que "funciona" y escribir código que es **eficiente y reproducible**?
- 📐 Dada la secuencia `ATGCTTCAGAAAGGTCTTACG`, escribe en pseudocódigo un algoritmo para calcular el porcentaje de GC y luego impleméntalo en Python.

</v-clicks>
