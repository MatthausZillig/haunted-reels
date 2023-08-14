export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const { page, filter } = getQuery(event)

  return $fetch(
    `${config.apiBaseUrl}/discover/movie?include_adult=true&language=en-US&page=1&sort_by=${filter}&with_genres=27&page=${page}&api_key=${config.apiKey}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${config.apiToken}`
      }
    }
  )
})
