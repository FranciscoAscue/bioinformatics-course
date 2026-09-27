# Guía de guiones y efectos

La organización combina cuatro referencias sin copiar su contenido ni forzar una plantilla única:

- JSConf: títulos grandes, secuencias breves y código revelado por etapas;
- BRACIS: figura primero, fuente visible y explicación alrededor de la evidencia;
- KubeCon: revelados suaves, foco luminoso y conclusión después de observar;
- LASCON: casos concretos, alternancia imagen/texto y enlaces legibles a la fuente.

La unidad del curso proviene de la tipografía, la paleta y el ritmo. La composición puede cambiar según el concepto.

## Regla de legibilidad

- una idea principal por pantalla;
- texto explicativo cercano a `1rem` y títulos de al menos `2.28rem`;
- código cercano a `.82rem`, con resaltado progresivo cuando la línea es larga;
- etiquetas y créditos pueden ser menores, pero nunca deben cargar una explicación necesaria;
- si una tabla exige reducir demasiado la letra, se divide en dos momentos.

## Sintaxis de las notas

Las notas del presentador deben indicar acciones concretas, no repetir la diapositiva:

- `[sin clic]`: qué observar o preguntar antes de revelar texto;
- `[pausa]`: dejar tiempo para leer una imagen, comando o resultado;
- `[pregunta]`: pregunta que debe responder el grupo;
- `[clic 1]`, `[clic 2]`: qué cambia y qué debe explicarse con cada revelado;
- `[demo]`: comando que se ejecuta en vivo y salida que debe conservarse;
- `[límite]`: afirmación que no está respaldada por la evidencia mostrada.

## Efectos disponibles

Usar movimiento solo cuando represente una relación:

```html
<div v-click class="reveal-left">Entrada o causa</div>
<div v-click class="reveal-right">Salida o consecuencia</div>
<div v-click class="reveal-up">Conclusión</div>
<img v-click class="reveal-zoom" src="..." />
```

Las clases `glow-left`, `glow-right` y `glow-bottom` pueden declararse en el frontmatter de una diapositiva de pausa. El brillo sirve para dirigir la mirada, no como fondo permanente.

## Ritmos que se pueden alternar

1. **Caso primero:** anomalía → observación → teoría → decisión.
2. **Imagen primero:** observar → predecir → revelar etiquetas → explicar mecanismo.
3. **Terminal primero:** error real → hipótesis → comando diagnóstico → corrección.
4. **Comparación:** alternativa A → alternativa B → criterio de elección.
5. **Construcción:** entrada → transformación → salida → límite.

## Comandos con historia

`RepoSource` enlaza un comando moderno con el repositorio donde Francisco utilizó antes esa herramienta. El enlace prueba procedencia; el ejemplo de clase puede corregir rutas, versiones, seguridad o reproducibilidad respecto del material histórico.

Sitios canónicos:

- [ASVI](https://asvi.org.pe/) para proyectos, datos y artículos;
- [GitHub de Francisco Ascue](https://github.com/FranciscoAscue) para scripts y comandos;
- repositorios específicos enlazados junto a cada bloque de código.
