export default defineEventHandler(() => {
  const config = useRuntimeConfig()
  console.log('@@@@@@', config.apiKey)
  return $fetch(
    `${config.apiBaseUrl}/discover/movie?include_adult=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=27,53,80&api_key=${config.apiKey}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${config.apiToken}`
      }
    }
  )
})
