import { FastifyInstance } from 'fastify';
import { getUserProfile } from './user.service';

export async function userController(fastify: FastifyInstance) {
  fastify.get('/users', getUserProfile);
}
