<template>
  <div>
    <p text-4 text-gray-400>Home page</p>
    <pre>{{ moviesStore.movies }}</pre>
  </div>
</template>

<script setup lang="ts">
import { useMoviesStore } from '~/stores/MoviesStore'
const moviesStore = useMoviesStore()

moviesStore.getMovies()
</script>

<style scoped></style>
