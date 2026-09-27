<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  week?: string
  unit?: string
  author?: string
  course?: string
  background?: string
  authorUrl?: string
  githubUrl?: string
}>(), {
  week: '',
  unit: '',
  author: 'Francisco Ascue',
  course: 'Análisis Bioinformático · UNSAAC',
  background: '',
  authorUrl: 'https://asvi.org.pe/',
  githubUrl: 'https://github.com/FranciscoAscue',
})

const coverStyle = computed(() => ({
  '--course-cover-image': `url("${props.background || `${import.meta.env.BASE_URL}images/course/cover-dna-helix.webp`}")`,
}))
</script>

<template>
  <div class="slidev-layout course-cover" :style="coverStyle">
    <div class="cover-kicker"><span>{{ week }}</span><span v-if="unit">{{ unit }}</span></div>
    <main class="cover-content"><slot /></main>
    <footer class="cover-footer">
      <div><a :href="authorUrl" target="_blank" rel="noreferrer"><strong>{{ author }}</strong></a><br>{{ course }}</div>
      <a :href="githubUrl" target="_blank" rel="noreferrer">GitHub · @FranciscoAscue</a>
    </footer>
  </div>
</template>
