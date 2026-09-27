<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  week?: string
  unit?: string
  author?: string
  course?: string
  imageCredit?: string
  imageSource?: string
  background?: string
  authorUrl?: string
  githubUrl?: string
}>(), {
  week: '',
  unit: '',
  author: 'Francisco Ascue',
  course: 'Análisis Bioinformático · UNSAAC',
  imageCredit: 'bci.qmul.ac.uk · CC BY-SA 4.0',
  imageSource: 'https://www.bci.qmul.ac.uk/research/core-services/bioinformatics/',
  background: '',
  authorUrl: 'https://asvi.org.pe/',
  githubUrl: 'https://github.com/FranciscoAscue',
})

const coverStyle = computed(() => {
  const source = props.background || `${import.meta.env.BASE_URL}images/course/cover-dna-helix.webp`
  return { '--course-cover-image': `url("${source}")` }
})
</script>

<template>
  <div class="slidev-layout course-cover" :style="coverStyle">
    <div class="cover-kicker">
      <span>{{ week }}</span>
      <span v-if="unit">{{ unit }}</span>
    </div>
    <main class="cover-content"><slot /></main>
    <footer class="cover-footer">
      <div><a :href="authorUrl" target="_blank" rel="noreferrer"><strong>{{ author }}</strong></a><br>{{ course }}</div>
      <a :href="githubUrl" target="_blank" rel="noreferrer">GitHub · @FranciscoAscue</a>
      <a :href="imageSource" target="_blank" rel="noreferrer">Imagen: {{ imageCredit }}</a>
    </footer>
  </div>
</template>
