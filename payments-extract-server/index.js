'use strict'

require('dotenv').config()
const responseJson = require('./Desafio_FrontEnd_v2.0.json')
const Fastify = require('fastify')
const cors = require('@fastify/cors')
const util = require('util');

const fastify = Fastify({ logger: true })
fastify.register(cors, {
  origin: '*'
})

fastify.get('/extract', async function handler (_, reply) {
  const delay = util.promisify(setTimeout);
  return delay(3000).then(() => reply.status(200).send(responseJson));
})

fastify.listen({ port: process.env.PORT ?? 3000 })
  .catch ((err) => {
    fastify.log.error(err)
    process.exit(1)
  })
