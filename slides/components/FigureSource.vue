<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  caption?: string
  credit?: string
  href?: string
}>()
</script>

<template>
  <figure class="figure-source">
    <img :src="src" :alt="alt">
    <figcaption v-if="caption || credit">
      <span>{{ caption }}</span>
      <a v-if="href && credit" :href="href" target="_blank" rel="noreferrer">{{ credit }}</a>
      <span v-else-if="credit">{{ credit }}</span>
    </figcaption>
  </figure>
</template>
