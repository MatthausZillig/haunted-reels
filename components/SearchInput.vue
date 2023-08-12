<template>
  <form
    class="flex items-centerw-[200px] h-[40px]"
    @submit.prevent
  >
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search for a movie..."
      class="w-full min-w-[300px] max-w-[300px] h-full rounded px-[16px] py-[4px] bg-zinc-100 border text-gray-800 shadow-none border-none shadow-md text-base"
    />
  </form>
</template>

<script setup lang="ts">
import { useMoviesStore } from '~/stores/MoviesStore'
const moviesStore = useMoviesStore()
const page = ref(1)
const handleWithSearch = (
  term: string
) => {
  moviesStore.updateTerm(term)
  moviesStore.updateIsSearching(!!term)
  moviesStore.getMovies(
    page.value,
    term
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
