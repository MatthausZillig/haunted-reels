<template>
  <div>
    <div v-if="!term" class="px-12 mb-8 z-[999]">
      <select-root v-model="filter">
        <select-trigger
          aria-label="Filter opitions"
          class="z-[1000] w-[200px] inline-flex items-center justify-between rounded px-2 text-xs text-zinc-600 font-semibold leading-none h-[35px] gap-[5px] bg-transparent hover:bg-mauve3outline-none border-1 border-zinc-500 cursor-pointer"
        >
          {{ filter ? filter : 'Sort result by' }}
          <Icon icon="radix-icons:chevron-down" class="h-3.5 w-3.5" />
        </select-trigger>
        <select-portal class="z-[999]">
          <select-content
            :side-offset="5"
            class="z-[999] w-[200px] bg-white rounded px-2 py-4 data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          >
            <select-group>
              <select-item
                v-for="(option, index) in options"
                :key="index"
                class="cursor-pointer py-1 text-xs"
                :value="option.name"
              >
                {{ option.name }}
              </select-item>
            </select-group>
          </select-content>
        </select-portal>
      </select-root>
    </div>
    <div
      px-12
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-6
      xxl:grid-cols-10
      self-center
      gap-x-12
      gap-y-12
      mb-10
    >
      <div v-for="movie in moviesList" :key="movie.id">
        <movie-card :movie="movie" />
      </div>
    </div>
    <div v-if="moviesList && moviesList.length" class="flex justify-center">
      <button
        v-if="!disabledPrevious"
        class="px-4 py-2 text-sm border-none rounded-lg w-[80px] hover:shadow-md cursor-pointer bg-none"
        @click="page--"
      >
        Previous
      </button>
      <div class="px-4 py-2 text-sm border-none rounded-lg">{{ page }}</div>
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
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  Separator,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger
} from 'radix-vue'
import { storeToRefs } from 'pinia'
import { Movie } from 'types/Movie'
import { useMoviesStore } from '~/stores/MoviesStore'
const moviesStore = useMoviesStore()
const { movies, term, page } = storeToRefs(useMoviesStore())

const filter = ref('popularity.desc')

const moviesList = computed(() => {
  return movies?.value?.results as Movie[]
})
const disabledPrevious = computed(() => {
  return page.value === 1
})
const disabledNext = computed(() => {
  return page.value + 1 === movies.value?.total_pages
})

const options = [
  { name: 'Popularity Descending', value: 'popularity.desc' },
  { name: 'Popularity Ascending', value: 'popularity.asc' },
  { name: 'Rating Descending', value: 'vote_average.desc' },
  { name: 'Rating Ascending', value: 'vote_average.asc' },
  { name: 'Release Date Descending', value: 'primary_release_date.desc' },
  { name: 'Release Date Ascending', value: 'primary_release_date.asc' }
]

const getFilterValue = (filterName: string) => {
  return options.find((item) => item.name === filterName)
}

moviesStore.getMovies(page.value)

watch(page, () => {
  moviesStore.getMovies(page?.value, term?.value)
})
watch(filter, () => {
  moviesStore.getMovies(page.value, '', getFilterValue(filter.value)?.value)
})
</script>
