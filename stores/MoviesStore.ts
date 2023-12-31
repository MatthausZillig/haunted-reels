import { defineStore } from 'pinia'
import { APIResponse } from 'types/MoviesList'

export const useMoviesStore =
  defineStore('moviesStore', {
    state: () => ({
      movies: {} as APIResponse,
      isLoading: false,
      isSearching: false,
      term: '',
      page: 1,
      filterValue: ''
    }),
    actions: {
      async getMovies(
        page: number,
        debouncedSearchTerm?: string,
        filterTerm?: string
      ): Promise<void> {
        this.isLoading = true
        const uri =
          this.isSearching &&
          debouncedSearchTerm
            ? `api/movies/search?query=${debouncedSearchTerm}&page=${page}`
            : `/api/movies/discover?page=${page}&filter=${
                filterTerm ||
                'popularity.desc'
              }`
        const res = await fetch(uri)
        const data: APIResponse =
          await res.json()
        this.movies =
          data as unknown as APIResponse
        this.isLoading = false
      },
      updateIsSearching(
        value: boolean
      ) {
        this.isSearching = value
      },
      updateTerm(term: string) {
        this.term = term
      },
      updatePage(page: number) {
        this.page = page
      },
      updateFilterValue(value: string) {
        this.filterValue = value
      }
    }
  })
