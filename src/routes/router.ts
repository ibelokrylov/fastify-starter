import { FastifyInstance } from 'fastify';

export default async function router(fastify: FastifyInstance) {
  console.log('🚀 ~ router ~ fastify:', fastify);
  // fastify.register(controller, { prefix: '/prefix'})
}
