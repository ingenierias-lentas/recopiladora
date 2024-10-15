import Fastify from 'fastify'
import { getPort, getApiHost } from '#app/config';
import services from '#app/services';

const fastify = Fastify({
  logger: true
})

fastify.get('/health', async (_, res) => {
  res.type('application/json').code(200)
  return { message: 'ok' }
})

fastify.get('/collectdata', async (_, res) => {
  try {
    const response = await services.collectData()
    res.code(201)
    return { response }
  } catch (error) {
    res.code(500)
    console.error(error)
    return { message: 'server error' }
  }
})

try {
  await fastify.listen({ port: getPort(), host: getApiHost() })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
