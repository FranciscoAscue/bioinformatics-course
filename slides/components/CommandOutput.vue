<template>
  <div class="command-output">
    <section>
      <span class="tag">Comando</span>
      <slot name="command" />
    </section>
    <section>
      <span class="tag">Salida e interpretación</span>
      <slot name="output" />
    </section>
  </div>
</template>
