# Plan de plantillas Slidev · Análisis Bioinformático

## Alcance de esta etapa

- `slides/00-silabo.md` es la única presentación con contenido terminado.
- `slides/01-*.md` a `slides/16-*.md` son mazos de **plantillas**, no clases listas para dictar.
- Cada mazo carga el catálogo común `slides/_template.md`. Al preparar una semana se copian solo las variantes útiles, se reemplazan los ejemplos y se elimina el resto.
- Los datos, comandos, métricas e interpretaciones del catálogo son deliberadamente ficticios.

## Referencias de diseño

### KubeCon HK · BaizeAI

Fuente: https://github.com/nekomeowww/talks/blob/main/packages/2024-08-21-kubecon-hk/slides.md

Patrones adaptados:

- revelados que entran desde lados opuestos;
- secuencias `observar → predecir → revelar`;
- transiciones asociadas a una relación, no como adorno;
- errores de consola presentados como evidencia para diagnosticar;
- diapositivas de pausa con foco luminoso.

### JSConf · presentación funcional

Fuente: https://github.com/alstn2468/2022-jsconf-presentation/blob/main/slides.md

Patrones adaptados:

- código con resaltado progresivo por líneas;
- ejemplos pequeños que se construyen paso a paso;
- comparación visual antes/después;
- imágenes anotadas mediante revelados;
- notas del presentador sincronizadas con los clics.

### BRACIS · SRCaps

Fuente: https://github.com/george-gca/bracis_2023_srcaps/blob/main/slides.md

Patrones adaptados:

- figura dominante con pie y fuente visible;
- tablas comparativas con un criterio destacado;
- portada académica con procedencia de la imagen;
- contenido modular reutilizable mediante `src`;
- cierre que separa hallazgos, límites y trabajo futuro.

No se copia contenido, identidad gráfica ni componentes privados de esos repositorios. Se reutilizan principios de composición compatibles con el tema académico local.

## Catálogo común

El archivo `slides/_template.md` contiene ejemplos listos para copiar de:

1. portada del curso;
2. apertura con pregunta o tensión;
3. separador de sección;
4. afirmación central;
5. definición y contraste;
6. imagen con texto lateral;
7. figura dominante con fuente;
8. código con foco progresivo;
9. comando, salida e interpretación;
10. error de consola y diagnóstico;
11. tabla comparativa;
12. métricas y ecuación;
13. diagrama Mermaid;
14. revelado narrativo;
15. pizarra;
16. laboratorio;
17. rúbrica;
18. síntesis y cierre.

## Matriz de uso sugerido

Todos los mazos contienen el catálogo completo. Esta matriz indica qué composiciones conviene priorizar al desarrollar cada clase.

| Semana | Tema provisional | Plantillas prioritarias |
|---:|---|---|
| 01 | Fundamentos y datos | definición, contraste, figura, Mermaid |
| 02 | Programación y algoritmos | código progresivo, traza, error |
| 03 | Estadística | métricas, ecuación, tabla comparativa |
| 04 | Linux y terminal | comando/salida, error primero, laboratorio |
| 05 | Conda y reproducibilidad | antes/después, configuración, cadena de evidencia |
| 06 | Pipelines y Git | Mermaid, procedencia, historia de cambios |
| 07 | Scripting Bash | código progresivo, interfaz, casos de prueba |
| 08 | Parcial integrador | consigna, paquete de evidencia, rúbrica |
| 09 | Sanger y consenso | figura dominante, lectura guiada, anotación |
| 10 | BLAST y MSA | comparación, texto monoespaciado, decisión |
| 11 | Filogenia | figura, diagrama, afirmación y límite |
| 12 | NGS y QC | tablero de métricas, antes/después, flujo |
| 13 | Ensamblaje | proceso con ramas, figura de mecanismo, decisión |
| 14 | Variantes y anotación | cadena de evidencia, registro, triangulación |
| 15 | Docking | modelo visual, parámetros, advertencia central |
| 16 | Defensa final | tesis, historia en cuatro actos, rúbrica y cierre |

## Reglas antes de convertir una plantilla en clase

1. Sustituir todo texto ficticio y comprobar cada comando.
2. Mantener una idea principal por diapositiva.
3. Citar imágenes y datos en la misma diapositiva.
4. Usar Mermaid cuando la relación sea más clara que una lista.
5. Reservar `v-click` para controlar razonamiento, comparación o cambio de estado.
6. Conservar la salida esperada de las demostraciones.
7. Escribir en notas qué preguntar, pausar, ejecutar o limitar.
8. Eliminar la etiqueta `PLANTILLA` cuando el contenido esté validado.

## Flujo de trabajo posterior

1. Abrir el mazo semanal correspondiente.
2. Copiar dentro de ese archivo las secciones necesarias de `_template.md`.
3. Eliminar la importación `src: ./_template.md`.
4. Reemplazar ejemplos por datos y figuras de la semana.
5. Ejecutar `npm run edit -- slides/XX-tema.md --open`.
6. Validar el mazo individual y luego `npm run build`.
