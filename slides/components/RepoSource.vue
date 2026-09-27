<script setup lang="ts">
withDefaults(defineProps<{
  href: string
  label?: string
}>(), {
  label: 'Comando usado anteriormente',
})
</script>

<template>
  <a class="repo-source" :href="href" target="_blank" rel="noreferrer">
    <span aria-hidden="true">⌘</span>
    {{ label }}
    <span aria-hidden="true">↗</span>
  </a>
</template>
