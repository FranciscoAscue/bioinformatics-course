---
theme: academic
layout: course-cover
title: Estadística para bioinformática
author: Francisco Ascue
week: Semana 03
unit: Unidad 1 · Fundamentos
colorSchema: auto
transition: fade-out
mdc: true
drawings:
  persist: false
---

<div class="template-badge">De datos biológicos a evidencia</div>

# Estadística para bioinformática

<p class="lead">¿Cómo pasamos de una muestra ruidosa a una conclusión que podamos defender?</p>

<!-- [sin clic] Preguntar: ¿qué significa que un gen esté “más expresado”? -->

---
layout: center
---

<div class="template-badge">Ruta de la clase</div>

# Nociones basicas de estadistica,
# no una colección de fórmulas

<div class="grid grid-cols-5 gap-3 mt-8 text-center text-sm">
  <div v-click class="step"><b>1</b><strong>Datos</strong><small>variables y resúmenes</small></div>
  <div v-click class="step"><b>2</b><strong>Azar</strong><small>probabilidad y distribuciones</small></div>
  <div v-click class="step"><b>3</b><strong>Modelo</strong><small>Bayes y likelihood</small></div>
  <div v-click class="step"><b>4</b><strong>Decisión</strong><small>hipótesis y p-value</small></div>
  <div v-click class="step"><b>5</b><strong>Mapa</strong><small>PCA, t-SNE y UMAP</small></div>
</div>

<div v-click class="synthesis mt-8 text-center">En cada paso: <strong>¿qué supone?, ¿qué conserva?, ¿qué no permite afirmar?</strong></div>

---
layout: statement
class: glow-right
---

<div class="template-badge">Pregunta guía</div>

# Dos grupos pueden tener la misma media… y contar historias distintas.

<div class="grid grid-cols-2 gap-10 mt-8 w-full">
  <div v-click class="strip"><div><i style="left:8%"/><i style="left:27%"/><i style="left:45%"/><i style="left:64%"/><i style="left:83%"/></div><strong>4 · 7 · 10 · 13 · 16</strong></div>
  <div v-click class="strip amber"><div><i style="left:43%"/><i style="left:47%"/><i style="left:50%"/><i style="left:53%"/><i style="left:57%"/></div><strong>9 · 9.5 · 10 · 10.5 · 11</strong></div>
</div>

<div v-click class="text-center mt-7 text-xl">Ambos tienen media 10; su <strong>dispersión</strong> es distinta.</div>

---
layout: visual-right
image: https://commons.wikimedia.org/wiki/Special:FilePath/HeLa-I.jpg
fit: cover
credit: NIH · dominio público · Wikimedia Commons
sourceUrl: https://commons.wikimedia.org/wiki/File:HeLa-I.jpg
---

<div class="template-badge">Objeto → variable</div>

## ¿Dónde comienza la estadística?

<v-clicks>

- Vemos **células**, pero medimos intensidades, áreas o conteos.
- Elegimos una **unidad de observación**: célula, paciente, gen o lectura.
- Repetimos y observamos variación: biológica + técnica.
- Decidimos **qué número representa qué fenómeno**.

</v-clicks>

<div v-click class="synthesis mt-5">La pregunta define la variable; el instrumento aporta parte del ruido.</div>

---
layout: default
---

<div class="template-badge">Lenguaje mínimo</div>

## Población, muestra y variable

<div class="grid grid-cols-3 gap-5 mt-7">
  <div v-click class="panel"><div class="eyebrow">Población</div><h2>Lo que queremos conocer</h2><p>Todas las células del tejido de interés.</p><code>parámetro: μ, σ, p</code></div>
  <div v-click class="panel amber"><div class="eyebrow">Muestra</div><h2>Lo que medimos</h2><p>500 células de tres pacientes.</p><code>estadístico: x̄, s, p̂</code></div>
  <div v-click class="panel violet"><div class="eyebrow">Variable</div><h2>Lo que registramos</h2><p>Expresión, genotipo, longitud…</p><code>X: observación → valor</code></div>
</div>

<div v-click class="mt-7 text-center text-lg"><strong>Inferir</strong> = usar una muestra para aprender sobre una población, declarando incertidumbre.</div>

---
layout: default
---

<div class="template-badge">Antes de calcular</div>

## El tipo de variable cambia lo que tiene sentido hacer

<div class="grid grid-cols-4 gap-3 mt-6 text-sm">
  <div v-click class="stat-card"><strong>Categórica nominal</strong><p>Especie, tejido, alelo.</p><small>frecuencias · proporciones</small></div>
  <div v-click class="stat-card"><strong>Ordinal</strong><p>Estadio I–IV, calidad.</p><small>mediana · rangos</small></div>
  <div v-click class="stat-card"><strong>Discreta</strong><p>Lecturas, mutaciones.</p><small>conteos · Poisson/binomial</small></div>
  <div v-click class="stat-card"><strong>Continua</strong><p>Longitud, pH, intensidad.</p><small>densidad · media/mediana</small></div>
</div>

<div v-click class="warn mt-6"><strong>Error:</strong> promediar códigos arbitrarios como A=1, C=2, G=3, T=4.</div>

---
layout: default
---

<div class="template-badge">Describir antes de inferir</div>

## Centro y dispersión responden preguntas diferentes

| Medida | Expresión | Lectura empírica |
|---|---|---|
| **Media** | $\displaystyle \bar{x}=\frac{1}{n}\sum_{i=1}^{n}x_i$ | centro de masa; sensible a extremos |
| **Mediana** | $\tilde{x}=$ valor central ordenado | centro robusto |
| **Desviación** | $\displaystyle s=\sqrt{\frac{1}{n-1}\sum_i(x_i-\bar{x})^2}$ | distancia típica a la media |
| **IQR** | $IQR=Q_3-Q_1$ | dispersión del 50 % central |

<div v-click class="synthesis mt-5 text-center">Nunca reportes centro sin dispersión.</div>

---
layout: default
---

<div class="template-badge">Una figura, cinco números</div>

## Leer un boxplot sin inventar una historia

<div class="grid grid-cols-12 gap-6 mt-5 items-center">
  <svg viewBox="0 0 620 250" class="col-span-7 chart">
    <line x1="55" y1="190" x2="580" y2="190" class="axis"/><line x1="125" y1="115" x2="520" y2="115" class="plot"/>
    <line x1="125" y1="80" x2="125" y2="150" class="plot"/><line x1="520" y1="80" x2="520" y2="150" class="plot"/>
    <rect x="225" y="65" width="210" height="100" rx="7" class="box"/><line x1="335" y1="65" x2="335" y2="165" class="median"/><circle cx="560" cy="115" r="9" class="outlier"/>
    <g v-click class="labels"><text x="105" y="55">mín.</text><text x="215" y="45">Q₁</text><text x="312" y="42">mediana</text><text x="425" y="45">Q₃</text><text x="500" y="55">máx.</text><text x="535" y="85">atípico</text></g>
  </svg>
  <ul class="col-span-5 text-sm">
    <li v-click>La caja contiene el <strong>50 % central</strong>.</li>
    <li v-click>La línea interior es la <strong>mediana</strong>.</li>
    <li v-click>Los bigotes suelen seguir <code>1.5 × IQR</code>.</li>
    <li v-click>Un punto aislado es inusual, no necesariamente erróneo.</li>
  </ul>
</div>

<div v-click class="warn mt-4"><strong>Antes de borrar un atípico:</strong> revisar metadatos, QC y explicación biológica.</div>

---
layout: default
---

<div class="template-badge">Idea empírica</div>

## Probabilidad como frecuencia a largo plazo

<div class="grid grid-cols-12 gap-6 mt-5 items-center">
  <svg viewBox="0 0 650 300" class="col-span-7 chart">
    <line x1="55" y1="250" x2="620" y2="250" class="axis"/><line x1="55" y1="30" x2="55" y2="250" class="axis"/><line x1="55" y1="140" x2="620" y2="140" class="ref"/>
    <polyline points="55,45 75,195 95,105 125,170 160,120 200,150 250,132 310,147 380,136 460,142 540,138 620,140" class="curve"/>
    <text x="560" y="125" class="labels">p = 0.5</text><text x="300" y="285" class="labels">repeticiones</text>
  </svg>
  <ul class="col-span-5">
    <li v-click>Con pocas repeticiones, la proporción “salta”.</li>
    <li v-click>Al repetir, suele estabilizarse alrededor de <code>p</code>.</li>
    <li v-click>Más lecturas no equivalen siempre a más muestras independientes.</li>
  </ul>
</div>

<div v-click class="synthesis mt-4 text-center">Más datos reducen azar; no corrigen sesgo sistemático.</div>

---
layout: default
---

<div class="template-badge">Eventos y condición</div>

## La información cambia la probabilidad

| Idea | Ejemplo | Expresión |
|---|---|---|
| Espacio muestral | base observada | $\Omega=\{A,C,G,T\}$ |
| Evento | la base es purina | $E=\{A,G\}$ |
| Complemento | la base no es purina | $P(E^c)=1-P(E)$ |
| Condicional | entre los casos $B$, ¿cuántos cumplen $A$? | $\displaystyle P(A\mid B)=\frac{P(A\cap B)}{P(B)}$ |

<div v-click class="warn mt-6"><code>P(+ | enfermedad)</code> y <code>P(enfermedad | +)</code> <strong>no</strong> son la misma pregunta.</div>

---
layout: default
---

<div class="template-badge">Bayes · actualizar evidencia</div>

## Bayes: dar vuelta a la condición

$$P(H\mid D)=\frac{P(D\mid H)P(H)}{P(D)}$$

<div class="stat-flow mt-7">
  <div v-click><small>Antes</small><strong>Prior</strong><span>P(H)</span></div><i v-click>×</i>
  <div v-click><small>Evidencia</small><strong>Likelihood</strong><span>P(D | H)</span></div><i v-click>→</i>
  <div v-click><small>Después</small><strong>Posterior</strong><span>P(H | D)</span></div>
</div>
<br>
<v-clicks>

- $H$: “hay una variante real”; $D$: “18/20 lecturas apoyan ALT”.
- El prior no desaparece: se combina con la evidencia.
- Evidencia abundante e informativa suele dominar al prior.

</v-clicks>

---
layout: default
---

<div class="template-badge">Bayes · caso de prueba</div>

## Un positivo no siempre significa “casi seguro”

<p class="text-sm">En 1000 personas: prevalencia 1 %, sensibilidad 95 %, falsos positivos 5 %.</p>

<div class="grid grid-cols-2 gap-5 mt-4">
  <div v-click class="count"><strong>10</strong><span>con condición</span><small>≈ 9.5 positivos verdaderos</small></div>
  <div v-click class="count"><strong>990</strong><span>sin condición</span><small>≈ 49.5 positivos falsos</small></div>
</div>

$$P(H\mid +)=\frac{0.95(0.01)}{0.95(0.01)+0.05(0.99)}\approx0.161$$

<div v-click class="text-center text-lg"><strong>Resultado: ≈ 16 %.</strong> La prevalencia cambia la lectura del test.</div>

---
layout: default
---

<div class="template-badge">Variable aleatoria</div>

## Un número para cada resultado posible

| Variable aleatoria | Ejemplo bioinformático | Valores posibles |
|---|---|---|
| **Discreta** | $X=$ lecturas ALT entre 10 | $X\in\{0,1,\dots,10\}$ |
| **Continua** | $Y=$ longitud celular en μm | $Y\in\mathbb{R}^{+}$ |

<div v-click class="synthesis mt-6 text-center">“Aleatoria” describe la incertidumbre antes de observar; después vemos un valor concreto.</div>

---
layout: default
---

<div class="template-badge">Distribuciones</div>

## PMF, PDF y CDF describen a $X$

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">
  <div v-click class="plotcard"><strong>PMF · masa</strong><small>discreta</small><svg viewBox="0 0 250 140"><line x1="20" y1="120" x2="235" y2="120" class="axis"/><g class="bars"><rect x="42" y="92" width="25" height="28"/><rect x="82" y="58" width="25" height="62"/><rect x="122" y="30" width="25" height="90"/><rect x="162" y="67" width="25" height="53"/></g></svg></div>
  <div v-click class="plotcard"><strong>PDF · densidad</strong><small>continua</small><svg viewBox="0 0 250 140"><line x1="20" y1="120" x2="235" y2="120" class="axis"/><path d="M22 119 C70 117,78 30,128 30 C178 30,186 117,232 119" class="area"/><path d="M22 119 C70 117,78 30,128 30 C178 30,186 117,232 119" class="curve"/></svg></div>
  <div v-click class="plotcard"><strong>CDF · acumulada</strong><small>ambas</small><svg viewBox="0 0 250 140"><line x1="20" y1="120" x2="235" y2="120" class="axis"/><path d="M22 116 C60 115,72 110,92 96 C112 82,118 50,145 36 C170 23,195 22,232 21" class="curve violet"/></svg></div>
</div>

| PMF | PDF | CDF |
|---|---|---|
| $P(X=x)$ | $\displaystyle P(a<X<b)=\int_a^b f(x)\,dx$ | $F(x)=P(X\le x)$ |

<div v-click class="warn mt-5"><strong>Continua:</strong> la altura es densidad; la probabilidad es un <strong>área</strong>.</div>

---
layout: default
class: compact
---

<div class="template-badge">Modelos frecuentes</div>

## Elegir por el mecanismo, no por costumbre

| Distribución | Imagina… | Parámetro | Ejemplo bioinformático |
|---|---|---|---|
| **Bernoulli** | éxito / no éxito | $p$ | una lectura apoya ALT |
| **Binomial** | $n$ ensayos con $p$ constante | $n,p$ | ALT en 20 lecturas |
| **Poisson** | eventos por región | $\lambda$ | mutaciones por kb |
| **Normal** | muchos efectos pequeños sumados | $\mu,\sigma$ | error agregado |
| **Beta** | incertidumbre sobre proporción | $\alpha,\beta$ | prior de frecuencia alélica |

<div v-click class="synthesis mt-5 text-center">Un modelo simplifica; un análisis honesto declara sus límites.</div>

---
layout: default
---

<div class="template-badge">Binomial en acción</div>

## ¿Cuántas lecturas ALT esperamos?

Si cada lectura apoya ALT con probabilidad constante $p$ e independencia:

$$X\sim\operatorname{Binomial}(n,p),\qquad
P(X=k)=\binom nkp^k(1-p)^{n-k}$$

$$E[X]=np,\qquad Var(X)=np(1-p)$$

<div v-click class="result mt-4"><strong>Caso:</strong> 4 lecturas ALT de 10 → frecuencia observada 0.4.</div>

<div v-click class="warn mt-5">Lecturas duplicadas o sesgadas pueden romper la independencia.</div>

---
layout: statement
class: glow-bottom
---

<div class="template-badge">Probabilidad ≠ verosimilitud</div>

## La misma expresión; una pregunta distinta

| | Qué se fija | Pregunta matemática |
|---|---|---|
| **Probabilidad** | modelo $p=0.7$ | $P(k=14\mid p=0.7)$ |
| **Verosimilitud** | dato $k=14$ | $L(p\mid k=14)$ |

<div v-click class="text-center mt-7 text-xl">La verosimilitud <strong>no es</strong> una probabilidad sobre el parámetro.</div>

---
layout: default
---

<div class="template-badge">Maximum likelihood · MLE</div>

## El parámetro que mejor explica lo observado

Con 14 éxitos en 20 ensayos:

$$L(p)\propto p^{14}(1-p)^6,\qquad
\hat p=\underset{p}{\arg\max}\ L(p)=\frac{14}{20}=0.70$$

<div class="grid grid-cols-12 gap-6 mt-4 items-center">
  <div class="col-span-4 result"><strong>0.70</strong><p>valor que maximiza la curva</p></div>
  <svg viewBox="0 0 670 310" class="col-span-8 chart">
    <line x1="55" y1="255" x2="590" y2="255" class="axis"/><line x1="55" y1="25" x2="55" y2="255" class="axis"/>
    <path d="M56 255 C150 255,230 248,300 220 C355 190,395 80,430 48 C465 30,500 88,535 170 C558 220,575 247,590 254" class="area violet-area"/><path d="M56 255 C150 255,230 248,300 220 C355 190,395 80,430 48 C465 30,500 88,535 170 C558 220,575 247,590 254" class="curve violet"/>
    <line v-click x1="430" y1="48" x2="430" y2="255" class="ref"/><circle v-click cx="430" cy="48" r="8" class="outlier"/><text x="408" y="285" class="labels">0.70</text><text x="560" y="285" class="labels">p</text>
  </svg>
</div>

<div v-click class="synthesis mt-3 text-center">El máximo estima; el ancho de la curva recuerda la incertidumbre.</div>

---
layout: default
---

<div class="template-badge">Bayes y MLE</div>

## Dos maneras de aprender parámetros
<br>
<br>
<br>

| | Expresión | Entrega | Incertidumbre |
|---|---|---|---|
| **MLE** | $\hat\theta=\arg\max_\theta L(\theta\mid D)$ | mejor valor puntual | intervalo o perfil de likelihood |
| **Bayes** | $P(\theta\mid D)\propto P(D\mid\theta)P(\theta)$ | distribución posterior | intervalo creíble |

<div v-click class="synthesis mt-6 text-center">Con pocos datos el prior pesa más; con muchos, ambos enfoques pueden aproximarse.</div>

---
layout: default
---

<div class="template-badge">Covarianza y correlación</div>

## ¿Cambian juntas? ¿Con qué fuerza?

$$Cov(X,Y)=\frac{1}{n-1}\sum_i(x_i-\bar x)(y_i-\bar y),\qquad
r=\frac{Cov(X,Y)}{s_Xs_Y}$$

<div class="grid grid-cols-12 gap-5 mt-4">
  <div class="col-span-4 text-sm"><p><strong>Covarianza:</strong> dirección; depende de unidades.</p><p><strong>Pearson:</strong> fuerza lineal entre −1 y 1.</p><p v-click><strong>Límite:</strong> correlación no implica causalidad.</p></div>
  <svg viewBox="0 0 620 290" class="col-span-8 chart scatter">
    <g v-click><rect x="15" y="15" width="180" height="235" rx="10" class="bg"/><text x="70" y="275">r ≈ +0.9</text><circle cx="40" cy="215" r="5"/><circle cx="65" cy="195" r="5"/><circle cx="90" cy="170" r="5"/><circle cx="120" cy="130" r="5"/><circle cx="150" cy="100" r="5"/><circle cx="175" cy="65" r="5"/></g>
    <g v-click><rect x="220" y="15" width="180" height="235" rx="10" class="bg"/><text x="280" y="275">r ≈ 0</text><circle cx="245" cy="70" r="5"/><circle cx="270" cy="210" r="5"/><circle cx="295" cy="120" r="5"/><circle cx="325" cy="185" r="5"/><circle cx="355" cy="55" r="5"/><circle cx="380" cy="145" r="5"/></g>
    <g v-click><rect x="425" y="15" width="180" height="235" rx="10" class="bg"/><text x="480" y="275">r ≈ −0.9</text><circle cx="450" cy="65" r="5"/><circle cx="475" cy="90" r="5"/><circle cx="505" cy="125" r="5"/><circle cx="535" cy="165" r="5"/><circle cx="565" cy="205" r="5"/></g>
  </svg>
</div>

---
layout: default
---

<div class="template-badge">Mirar antes de resumir</div>

## Correlación cero no significa “sin relación”

<div class="grid grid-cols-12 gap-6 mt-4 items-center">
  <svg viewBox="0 0 620 310" class="col-span-7 chart scatter"><line x1="45" y1="265" x2="585" y2="265" class="axis"/><circle cx="100" cy="65" r="7"/><circle cx="145" cy="125" r="7"/><circle cx="190" cy="180" r="7"/><circle cx="240" cy="225" r="7"/><circle cx="300" cy="255" r="7"/><circle cx="360" cy="245" r="7"/><circle cx="410" cy="215" r="7"/><circle cx="460" cy="170" r="7"/><circle cx="510" cy="115" r="7"/><circle cx="550" cy="60" r="7"/><path v-click d="M88 55 Q315 445 560 50" class="curve amber"/></svg>
  <ul class="col-span-5">
    <li v-click>Hay una relación fuerte y curva.</li>
    <li v-click>Pearson busca una línea.</li>
    <li v-click>Un gráfico revela forma, atípicos y subgrupos.</li>
    <li v-click>Correlación tampoco demuestra causalidad.</li>
  </ul>
</div>
<br>

<div v-click class="synthesis mt-4 text-center">Visualizar → elegir métrica → reportar límites.</div>

---
layout: default
class: compact
---

<div class="template-badge">Pearson o Spearman</div>

## La pregunta define la correlación

| | Pearson $r$ | Spearman $\rho$ |
|---|---|---|
| **Compara** | valores originales | rangos |
| **Detecta** | relación lineal | relación monótona |
| **Atípicos** | muy sensible | menos sensible, no inmune |
| **Uso** | escala continua y relación lineal | orden consistente o escala ordinal |

<div v-click class="warn mt-5"><strong>No elegir Spearman solo porque “no es normal”:</strong> importa la forma de la relación.</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://doi.org/10.1213/ANE.0000000000002864" target="_blank">Schober P et al. (2018). Correlation coefficients: appropriate use and interpretation.</a></Footnote>
</Footnotes>

---
layout: default
---

<div class="template-badge">Distribución normal</div>

## Dos parámetros dibujan la campana

$$X\sim\mathcal N(\mu,\sigma^2)$$

<div class="grid grid-cols-12 gap-5 mt-4 items-center">
  <svg viewBox="0 0 700 320" class="col-span-8 chart"><line x1="40" y1="265" x2="660" y2="265" class="axis"/><path d="M50 265 C140 264,190 245,235 180 C278 115,305 48,350 42 C395 48,422 115,465 180 C510 245,560 264,650 265" class="area"/><path d="M50 265 C140 264,190 245,235 180 C278 115,305 48,350 42 C395 48,422 115,465 180 C510 245,560 264,650 265" class="curve"/><line v-click x1="350" y1="42" x2="350" y2="265" class="ref"/><line v-click x1="235" y1="180" x2="235" y2="265" class="ref violet"/><line v-click x1="465" y1="180" x2="465" y2="265" class="ref violet"/><text x="340" y="295">μ</text><text v-click x="305" y="160" class="area-label">≈ 68 %</text></svg>
  <div class="col-span-4">
    <ul>
      <li v-click>simétrica alrededor de la media;</li>
      <li v-click>la desviación controla el ancho;</li>
      <li v-click>≈ 68 % a una desviación;</li>
      <li v-click>≈ 95 % a dos desviaciones.</li>
    </ul>
  </div>
</div>

---
layout: default
---

<div class="template-badge">Normalidad · qué revisar</div>

## ¿Los datos deben ser normales?

<div class="grid grid-cols-2 gap-4 mt-2">
  <div v-click class="panel"><div class="eyebrow">A menudo importa</div><h2>El error o los residuos</h2><p>Muchos modelos suponen una forma para los residuos, no para cada variable cruda.</p></div>
  <div v-click class="panel amber"><div class="eyebrow">En ómicas</div><h2>Conteos no son campanas</h2><p>RNA-seq contiene ceros, asimetría y una relación media–varianza.</p></div>
  <div v-click class="panel green"><div class="eyebrow">Diagnosticar</div><h2>Histograma + Q–Q</h2><p>La prueba de Shapiro no reemplaza mirar los datos y el diseño.</p></div>
  <div v-click class="panel violet"><div class="eyebrow">Transformar</div><h2>log₂(x + 1)</h2><p>Comprime colas; no “garantiza” normalidad.</p></div>
</div>

<div v-click class="synthesis mt-2 text-center">Mejor pregunta: ¿qué parte del modelo necesita qué supuesto?</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://doi.org/10.1093/biomet/52.3-4.591" target="_blank">Shapiro SS, Wilk MB. (1965). An analysis of variance test for normality. Biometrika.</a></Footnote>
</Footnotes>

---
layout: default
---

<div class="template-badge">Hipótesis</div>

## Construir un contraste paso a paso
<br>

<div class="grid grid-cols-5 gap-3 mt-7 text-center text-sm">
  <div v-click class="step"><b>1</b><strong>Pregunta</strong><small>¿cambia expresión?</small></div><div v-click class="step"><b>2</b><strong>H₀ / H₁</strong><small>sin / con diferencia</small></div><div v-click class="step"><b>3</b><strong>Estadístico</strong><small>señal / ruido</small></div><div v-click class="step"><b>4</b><strong>Referencia</strong><small>mundo bajo H₀</small></div><div v-click class="step"><b>5</b><strong>Decisión</strong><small>evidencia + efecto</small></div>
</div>
<br>

$$H_0:\mu_A-\mu_B=0
\qquad\text{frente a}\qquad
H_1:\mu_A-\mu_B\ne0$$

<br>

<div v-click class="text-center">H₀ es un modelo de referencia; H₁ describe la discrepancia que buscamos detectar.</div>

---
layout: statement
class: glow-right
---

<div class="template-badge">Definición operativa</div>

## El p-value mira un mundo donde H₀ es cierta
<br>

<div v-click class="definition mt-6">Probabilidad, <em>suponiendo H₀ y el modelo correctos</em>, de obtener un resultado tan extremo o más que el observado.</div>
<br>

$$p=P(T\ge T_{obs}\mid H_0)$$
<br>

<div v-click class="warn mt-5"><strong>No es:</strong> la probabilidad de H₀ dados los datos ni la probabilidad de que el resultado sea “por azar”.</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://doi.org/10.1080/00031305.2016.1154108" target="_blank">Wasserstein RL, Lazar NA. (2016). The ASA Statement on p-Values.</a></Footnote>
</Footnotes>

---
layout: default
---

<div class="template-badge">Significancia ≠ importancia</div>

## Efecto, incertidumbre y p-value viajan juntos

<div class="grid grid-cols-2 gap-6 mt-5">
  <div v-click class="panel amber"><div class="eyebrow">10 000 muestras</div><h2>Δ = 0.05 · p &lt; 0.001</h2><p>Evidencia fuerte para un efecto quizá irrelevante.</p></div>
  <div v-click class="panel green"><div class="eyebrow">8 muestras</div><h2>Δ = 2.1 · p = 0.09</h2><p>Efecto grande con gran incertidumbre.</p></div>
</div>

<div v-click class="formula mt-6"><strong>Reporte mínimo</strong><div class="grid grid-cols-4 gap-3 mt-3"><span>efecto</span><span>intervalo</span><span>p-value</span><span>n + diseño</span></div></div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://doi.org/10.1080/00031305.2019.1583913" target="_blank">Wasserstein RL et al. (2019). Moving to a World Beyond “p &lt; 0.05”.</a></Footnote>
</Footnotes>

---
layout: default
---

<div class="template-badge">Errores y potencia</div>

## Toda decisión puede equivocarse

| Decisión | $H_0$ verdadera | $H_1$ verdadera |
|---|---|---|
| No rechazar $H_0$ | decisión compatible | **Error II · $\beta$** |
| Rechazar $H_0$ | **Error I · $\alpha$** | **Potencia · $1-\beta$** |

<div class="grid grid-cols-3 gap-4 mt-7 text-center text-sm"><div v-click class="stat-card"><strong>Más n</strong><small>más precisión</small></div><div v-click class="stat-card"><strong>Menos ruido</strong><small>señal distinguible</small></div><div v-click class="stat-card"><strong>Mayor efecto</strong><small>más fácil detectar</small></div></div>

---
layout: default
class: compact
---

<div class="template-badge">Elegir una prueba</div>

## Primero diseño y variable; después el test

| Pregunta | Diseño / dato | Herramienta inicial | Revisar |
|---|---|---|---|
| ¿Difieren dos medias? | grupos independientes | t de Welch | residuos, atípicos |
| ¿Cambió el mismo sujeto? | pareado | t pareada / Wilcoxon | diferencias |
| ¿Difieren proporciones? | conteos | Fisher / $\chi^2$ | conteos esperados |
| ¿Se asocian continuas? | pares $(x,y)$ | Pearson / Spearman | forma, atípicos |
| ¿Difiere RNA-seq? | conteos + réplicas | binomial negativa | dispersión, lotes |

<div v-click class="synthesis mt-5 text-center">“Paramétrico vs. no paramétrico” no es el punto de partida.</div>

---
layout: default
---

<div class="template-badge">Bioinformática · miles de tests</div>
<br>

## Con 20 000 genes, p &lt; 0.05 no basta
<br>

<div class="grid grid-cols-2 gap-7 mt-3 items-center">
  <div v-click class="result"><strong>20 000 × 0.05</strong><p>≈ 1000 falsos positivos esperados si todas las hipótesis nulas fueran ciertas.</p></div>
  <div><div v-click class="formula amber"><strong>FDR</strong><p>Proporción esperada de falsos descubrimientos entre los resultados llamados significativos.</p>
<div v-click class="mt-2"><strong>Reportar:</strong> p ajustado + tamaño del efecto.</div></div></div>
</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://doi.org/10.1111/j.2517-6161.1995.tb02031.x" target="_blank">Benjamini Y, Hochberg Y. (1995). Controlling the false discovery rate. JRSS B.</a></Footnote>
</Footnotes>

---
layout: visual-right
image: https://commons.wikimedia.org/wiki/Special:FilePath/Transcriptomes_heatmap_example.svg
fit: contain
credit: Thomas Shafee · CC BY 4.0 · Wikimedia Commons
sourceUrl: https://commons.wikimedia.org/wiki/File:Transcriptomes_heatmap_example.svg
---

<div class="template-badge">Alta dimensión</div>

## Una muestra puede tener 20 000 coordenadas

<v-clicks>

- Filas: genes; columnas: muestras o células.
- Cada muestra es un punto en miles de dimensiones.
- Buscamos gradientes, grupos, lotes y atípicos.
- Reducir dimensión conserva **cierta estructura** y pierde otra.

</v-clicks>

<div v-click class="synthesis mt-5">Antes: filtrar, transformar, normalizar y documentar la métrica.</div>

---
layout: default
---

<div class="template-badge">PCA · intuición geométrica</div>

## PCA: girar ejes para capturar la mayor variación

<div class="grid grid-cols-12 gap-6 mt-4 items-center">
  <svg viewBox="0 0 620 330" class="col-span-7 chart scatter"><line x1="55" y1="280" x2="570" y2="280" class="axis"/><line x1="55" y1="45" x2="55" y2="280" class="axis"/><g class="muted"><circle cx="125" cy="245" r="7"/><circle cx="170" cy="225" r="7"/><circle cx="215" cy="205" r="7"/><circle cx="260" cy="175" r="7"/><circle cx="305" cy="160" r="7"/><circle cx="350" cy="135" r="7"/><circle cx="405" cy="105" r="7"/><circle cx="460" cy="80" r="7"/><circle cx="510" cy="62" r="7"/></g><line v-click x1="95" y1="275" x2="540" y2="40" class="pc1"/><line v-click x1="235" y1="55" x2="390" y2="310" class="pc2"/><text x="520" y="35" class="labels">PC1</text><text x="395" y="318" class="labels">PC2</text></svg>
  <ul class="col-span-5">
    <li v-click>Centrar cada variable.</li>
    <li v-click>PC1: dirección de máxima varianza.</li>
    <li v-click>PC2: siguiente varianza, ortogonal a PC1.</li>
    <li v-click>Cada PC combina variables originales.</li>
  </ul>
</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4792409/" target="_blank">Jolliffe IT, Cadima J. (2016). Principal component analysis: a review and recent developments.</a></Footnote>
</Footnotes>

---
layout: default
---

<div class="template-badge">PCA · lenguaje técnico mínimo</div>

## Scores, loadings y varianza explicada
<br>

$$\mathbf Z=\mathbf X_{centrada}\mathbf W,\qquad
\mathbf w_1=\underset{\|\mathbf w\|=1}{\arg\max}\;Var(\mathbf X\mathbf w)$$

<div v-click class="plotcard mt-3"><strong>Scree plot · varianza por componente</strong><div class="scree"><i style="height:88%">48%</i><i style="height:45%">22%</i><i style="height:25%">12%</i><i style="height:14%">7%</i><i style="height:8%">4%</i></div><small>PC1 &nbsp; PC2 &nbsp; PC3 &nbsp; PC4 &nbsp; PC5</small></div>
<br>

<div v-click class="warn mt-5"><strong>Escalar importa:</strong> una variable con gran varianza puede dominar el PCA.</div>

---
layout: default
---

<div class="template-badge">PCA · interpretar</div>
<br>

## Una separación es pista, no explicación
<br>

<div class="grid grid-cols-2 gap-6 mt-5"><div v-click class="panel"><h2>Scores · muestras</h2><p>¿Quién está cerca de quién? ¿El color es condición, paciente o lote?</p></div><div v-click class="panel violet"><h2>Loadings · variables</h2><p>¿Qué genes empujan cada dirección? ¿Tiene sentido biológico?</p></div></div>
<br>

<v-clicks>

- ¿Cuánta varianza muestran PC1 + PC2?
- ¿La separación permanece tras controlar confusores?
- La mayor variación puede ser técnica, no biológica.

</v-clicks>

---
layout: default
---

<div class="template-badge">t-SNE y UMAP · intuición</div>
<br>

## t-SNE y UMAP: preservar vecindarios
<br>

<div class="grid grid-cols-2 gap-7 mt-5">
  <div class="map"><div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><b v-click>vecindarios → mapa 2D</b><div v-click class="clusters"><i></i><i></i><i></i></div>
</div>

  <ul class ="mt-10">
    <li v-click>Convierten distancias en relaciones de vecindad.</li>
    <li v-click>Son no lineales y dependen de hiperparámetros.</li>
    <li v-click>Sus ejes no equivalen a PC1/PC2.</li>
    <li v-click>La semilla puede cambiar orientación y distancias.</li>
  </ul>
</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://www.jmlr.org/papers/v9/vandermaaten08a.html" target="_blank">van der Maaten L, Hinton G. (2008). Visualizing Data using t-SNE. JMLR.</a></Footnote>
  <Footnote :number=2><a href="https://doi.org/10.21105/joss.00861" target="_blank">McInnes L et al. (2018). UMAP. JOSS.</a></Footnote>
</Footnotes>

---
layout: default
class: compact
---

<div class="template-badge">Tres proyecciones, tres compromisos</div>

## PCA, t-SNE o UMAP

| | PCA | t-SNE | UMAP |
|---|---|---|---|
| **Tipo** | lineal | no lineal | no lineal |
| **Prioriza** | varianza global | vecindarios locales | vecindarios + estructura amplia |
| **Ejes** | combinaciones interpretables | sin significado | sin significado |
| **Estabilidad** | determinista | semilla/parámetros | semilla/parámetros |
| **Uso prudente** | explorar y comprimir | visualizar | visualizar / explorar |

<div v-click class="warn mt-5"><strong>No concluir por la forma sola:</strong> islas, puentes y distancias pueden cambiar con inicialización y parámetros.</div>

<Footnotes separator v-after>
  <Footnote :number=1><a href="https://doi.org/10.1038/s41587-020-00809-z" target="_blank">Kobak D, Linderman GC. (2021). Initialization is critical for t-SNE and UMAP. Nature Biotechnology.</a></Footnote>
</Footnotes>

---
layout: lab
---

<div class="template-badge">Actividad · 8 minutos</div>

## Diagnóstico de un análisis

<div class="grid grid-cols-2 gap-7 mt-4">
  <div><p><strong>Escenario</strong></p><p class="text-sm">Se comparan 20 000 genes entre 3 controles y 3 tratamientos. Se reportan 840 genes con p &lt; 0.05 y un UMAP con dos grupos separados.</p><div class="warn mt-5"><strong>En parejas:</strong> tres preguntas antes de aceptar “el tratamiento cambia el transcriptoma”.</div></div>
  <v-clicks>

1. ¿Réplicas biológicas y lotes confundidos?
2. ¿Modelo adecuado para conteos y dispersión?
3. ¿Corrección FDR?
4. ¿Tamaño de efecto e incertidumbre?
5. ¿Separación estable y visible con PCA?

  </v-clicks>
</div>

<div v-click class="synthesis mt-5 text-center">El gráfico llama la atención; el diseño y el modelo sostienen la conclusión.</div>

---
layout: statement
class: glow-bottom
---

<div class="template-badge">Síntesis</div>

# La estadística no elimina la incertidumbre.

## La hace visible, cuantificable y discutible.

<div class="grid grid-cols-3 gap-5 mt-8 w-full"><div v-click class="panel"><strong>Describir</strong><p>qué observamos</p></div><div v-click class="panel violet"><strong>Modelar</strong><p>qué podría ocurrir</p></div><div v-click class="panel green"><strong>Concluir</strong><p>qué permite la evidencia</p></div></div>

---
layout: end
transition: fade-out
---

<div class="template-badge">Salida</div>

## Antes de creer una figura, pregunta…

<v-clicks>

- ¿Cuál es la unidad y cuántas réplicas independientes hay?
- ¿Qué distribución conecta los datos con la conclusión?
- ¿Dónde están el efecto y la incertidumbre?
- ¿Se corrigieron las comparaciones múltiples?
- ¿La proyección conserva la estructura que interpreto?

</v-clicks>
