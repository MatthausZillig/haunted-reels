<template>
  <div
    class="flex flex-col justify-center items-center"
  >
    <hero-banner />
    <filter-select />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-7 self-center gap-x-10 gap-y-12 mb-10 max-w-[1600px]"
    >
      <div
        v-for="movie in moviesList"
        :key="movie.id"
      >
        <movie-card :movie="movie" />
      </div>
    </div>
    <div
      v-if="
        moviesList && moviesList.length
      "
      class="flex justify-center"
    >
      <button
        v-if="!disabledPrevious"
        class="px-4 py-2 text-sm border-none rounded-lg w-[80px] hover:shadow-md cursor-pointer bg-none"
        @click="page--"
      >
        Previous
      </button>
      <div
        class="px-4 py-2 text-sm border-none rounded-lg"
      >
        {{ page }}
      </div>
      <button
        v-if="!disabledNext"
        class="px-4 py-2 text-sm border-none rounded-lg w-[80px] hover:shadow-md cursor-pointer bg-none"
        @click="page++"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { options } from '~/constants/Enums'
import { Movie } from 'types/Movie'
import { getFilterValue } from '~/utils'
import { useMoviesStore } from '~/stores/MoviesStore'
const moviesStore = useMoviesStore()
const { movies, term, page, filterValue } = storeToRefs(
  useMoviesStore()
)


const moviesList = computed(() => {
  return movies?.value
    ?.results as Movie[]
})
const disabledPrevious = computed(
  () => {
    return page.value === 1
  }
)
const disabledNext = computed(() => {
  return (
    page.value + 1 ===
    movies.value?.total_pages
  )
})

moviesStore.getMovies(
  page.value,
  '',
  getFilterValue(filterValue.value, options)?.value
)

watch(page, () => {
  moviesStore.getMovies(
    page?.value,
    term?.value,
    getFilterValue(filterValue.value, options)?.value
  )
})
</script>
