export default defineEventHandler((event) => {
  const id = event.node.req?.url && [...event.node.req?.url.split('/')].pop()
  const config = useRuntimeConfig()
  return $fetch(`${config.apiBaseUrl}/movie/${id}&include_video=true`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${config.apiToken}`
    }
  })
})
