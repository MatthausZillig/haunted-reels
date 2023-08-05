export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  return $fetch(
    `${config.apiBaseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27,53,80`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${config.apiToken}`
      }
    }
  )
})
