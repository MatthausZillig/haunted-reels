export type Movie = {
  id: number
  title: string
  original_title: string
  genres: {
    id: number
    name: string
  }[]
  release_date: string
  runtime: number | null
  overview: string
  poster_path: string
  popularity: number
}
