<template>
  <div
    px-12
    grid
    grid-cols-1
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-7
    self-center
    gap-x-12
    gap-y-12
    mb-10
  >
    <div v-for="movie in moviesList" :key="movie.id">
      <movie-card :movie="movie" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMoviesStore } from '~/stores/MoviesStore'
const moviesStore = useMoviesStore()
const { movies } = storeToRefs(useMoviesStore())

const moviesList = computed(() => {
  return movies?.value?.results
})

moviesStore.getMovies()
</script>
