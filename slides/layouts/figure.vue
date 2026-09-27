<script setup lang="ts">
defineProps<{
  caption?: string
  source?: string
  sourceUrl?: string
}>()
</script>

<template>
  <div class="slidev-layout figure-layout">
    <slot />
    <footer v-if="caption || source" class="figure-layout-caption">
      <span>{{ caption }}</span>
      <a v-if="source && sourceUrl" :href="sourceUrl" target="_blank" rel="noreferrer">{{ source }}</a>
      <span v-else>{{ source }}</span>
    </footer>
  </div>
</template>
