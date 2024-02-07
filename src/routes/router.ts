import { FastifyInstance } from 'fastify';
import { userController } from '../modules/user/user.controller';

export default async function router(fastifyInstance: FastifyInstance) {
  userController(fastifyInstance);
}
