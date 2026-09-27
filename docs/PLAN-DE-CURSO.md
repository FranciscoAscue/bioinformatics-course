# Plan del curso · Análisis Bioinformático 2026-II

## Propósito

Que el estudiante diseñe, ejecute, documente y comunique análisis reproducibles de secuencias biológicas, desde la obtención del dato hasta una interpretación defendible.

## Secuencia de aprendizaje

| Semana | Pregunta guía | Producto observable |
|---:|---|---|
| 1 | ¿Cómo se convierte una pregunta biológica en datos analizables? | Ficha de dato + elección de formato |
| 2 | ¿Cómo se expresa una solución como algoritmo? | Pseudocódigo y prueba de escritorio |
| 3 | ¿Qué afirmaciones permiten los datos? | Resumen, gráfico e intervalo de confianza |
| 4 | ¿Cómo se trabaja con seguridad en una terminal? | Recorrido y manipulación de archivos |
| 5 | ¿Cómo puede otra persona repetir el entorno? | `environment.yml` versionado |
| 6 | ¿Cómo se compone y registra un flujo? | Pipeline corto + commit verificable |
| 7 | ¿Cómo se automatiza sin ocultar errores? | Script Bash con parámetros y validación |
| 8 | ¿Puede integrarse lo aprendido? | Reto práctico parcial |
| 9 | ¿Cómo se obtiene un consenso Sanger? | Secuencia consenso documentada |
| 10 | ¿Qué significa que dos secuencias se parezcan? | Búsqueda BLAST + MSA interpretado |
| 11 | ¿Qué hipótesis representa un árbol? | Árbol con soporte y supuestos explícitos |
| 12 | ¿Cuándo una lectura NGS es utilizable? | Informe de QC antes/después |
| 13 | ¿Referencia o de novo? | Ensamblaje evaluado con métricas |
| 14 | ¿Cómo se pasa de señal a variante y función? | VCF filtrado + anotación argumentada |
| 15 | ¿Cómo se evalúa una pose de unión in silico? | Mini-protocolo de docking reproducible |
| 16 | ¿Puede defenderse el flujo completo? | Proyecto, bitácora y defensa final |

## Arquitectura flexible de las clases

Cada semana combina cuatro ingredientes, pero no los presenta siempre en el mismo orden ni con la misma cantidad de diapositivas:

- una **tensión inicial**: pregunta, dato extraño, error o decisión real;
- la **teoría mínima necesaria** para entender el mecanismo y sus supuestos;
- una **experiencia activa**: pizarra, comparación, demostración, discusión o laboratorio;
- una **evidencia observable** que obliga a interpretar y declarar un límite.

Una clase conceptual puede detenerse en una figura; una clase técnica puede construirse alrededor de la terminal; una clase integradora puede comenzar directamente con un caso. La estructura responde al tema, no a una plantilla fija.

## Evaluación transversal

- Corrección técnica: el resultado responde a la pregunta.
- Reproducibilidad: versiones, entradas, parámetros y semillas quedan registradas.
- Robustez: el flujo valida entradas, reporta errores y evita sobrescribir evidencia.
- Interpretación: diferencia observación, inferencia y limitación.
- Comunicación: figuras legibles, fuentes trazables y conclusiones proporcionadas.

## Convenciones para las diapositivas

- Una idea principal por diapositiva y espacio suficiente para verla.
- Alternar texto breve, figuras completas, comparaciones, código y pausas de discusión.
- Evitar tarjetas, cajas y listas cuando una frase o una relación visual sean suficientes.
- Los bloques **Pizarra** son guiones de explicación, no texto para memorizar.
- Los comandos deben usar entradas pequeñas y mostrar su salida esperada.
- Toda imagen externa debe incluir autor, licencia y enlace en la misma diapositiva.
- Los apuntes de presentador van en un comentario HTML al final de la diapositiva.

## Estado de implementación · actualizado 2026-08-30

### Completo

- `slides/00-silabo.md`: presentación del sílabo.
- Sistema visual compartido: layouts, componentes, modos claro/oscuro e imágenes locales.
- `slides/_template.md`: catálogo común con 17 patrones de composición.
- `slides/01-*.md` a `slides/16-*.md`: contenedores provisionales que importan ese catálogo.
- Índice y compilación multipresentación.

### Deliberadamente pendiente

- El contenido docente de las semanas 01–16.
- Datos, comandos, resultados y bibliografía específicos de cada práctica.
- Selección de las composiciones adecuadas para cada tema.
- Notas del presentador y actividades verificadas en aula.

No debe marcarse una semana como completa solo porque el mazo compile. Una clase pasa de plantilla a material docente cuando sus ejemplos han sido comprobados, sus fuentes están visibles y sus actividades producen la evidencia indicada.
