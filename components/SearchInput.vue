<template>
  <form
    class="flex items-centerw-[200px] h-[40px]"
    @submit.prevent
  >
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search..."
      class="w-full h-full rounded-full px-[48px] py-[4px] bg-zinc-200 border text-gray-800 shadow-none border-none shadow-md text-base"
    />
  </form>
</template>

<script setup lang="ts">
import { useMoviesStore } from '~/stores/MoviesStore'
const moviesStore = useMoviesStore()
const filter = ref('popularity.desc')
const page = ref(1)
const handleWithSearch = (
  term: string
) => {
  moviesStore.updateTerm(term)
  moviesStore.updateIsSearching(!!term)
  moviesStore.getMovies(
    page.value,
    term,
    filter.value
  )
}

const searchTerm = ref('')
const debouncedSearchTerm =
  refDebounced(searchTerm, 700)

watch(debouncedSearchTerm, () => {
  moviesStore.updatePage(1)
  handleWithSearch(
    debouncedSearchTerm.value
  )
})
</script>
