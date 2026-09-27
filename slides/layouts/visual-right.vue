<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ image?: string; position?: string; fit?: string; credit?: string; sourceUrl?: string }>()
const style = computed(() => ({
  '--visual-image': props.image
    ? `url("${props.image.startsWith('/') ? `${import.meta.env.BASE_URL}${props.image.slice(1)}` : props.image}")`
    : 'none',
  '--visual-position': props.position || 'center',
  '--visual-fit': props.fit || 'cover',
}))
</script>

<template>
  <div class="slidev-layout visual-right-layout" :style="style">
    <main><slot /></main>
    <aside aria-hidden="true" />
    <a v-if="credit && sourceUrl" :href="sourceUrl" target="_blank" rel="noreferrer" class="visual-credit">{{ credit }}</a>
    <small v-else-if="credit" class="visual-credit">{{ credit }}</small>
  </div>
</template>

<style scoped>
.visual-right-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: 100%;
  width: 100%;
}

.visual-right-layout main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.visual-right-layout aside {
  background-image: var(--visual-image);
  background-position: var(--visual-position, center);
  background-repeat: no-repeat;
  background-size: var(--visual-fit, contain);
  width: 100%;
  height: 100%;
  min-height: 360px;
}
</style>
