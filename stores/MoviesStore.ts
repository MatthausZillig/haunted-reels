import { defineStore } from 'pinia'
import { APIResponse } from 'types/MoviesList'

export const useMoviesStore = defineStore('moviesStore', {
  state: () => ({
    movies: {} as APIResponse,
    isLoading: false
  }),
  actions: {
    async getMovies(page: number): Promise<void> {
      this.isLoading = true
      const res = await fetch(`/api/movies/discover?page=${page}`)
      const data: APIResponse = await res.json()
      this.movies = data as unknown as APIResponse
      this.isLoading = false
    }
  }
})
