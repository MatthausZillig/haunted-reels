<template>
  <div>
    <p text-4 text-gray-400>Home page</p>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/movies/discover')
console.log('Movies', data.value)
</script>

<style scoped></style>
