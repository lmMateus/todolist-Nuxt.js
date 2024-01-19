<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Tarefas'
})
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
onMounted(() => {
    initFlowbite();
})
</script>