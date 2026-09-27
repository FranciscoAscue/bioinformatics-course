<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  tag?: string
  tone?: 'cyan' | 'violet' | 'amber' | 'green'
}>(), {
  tag: '',
  tone: 'cyan',
})
</script>

<template>
  <article class="concept-card" :data-tone="tone">
    <span v-if="tag" class="tag">{{ tag }}</span>
    <h3>{{ title }}</h3>
    <div class="concept-card-body"><slot /></div>
  </article>
</template>
