import { FastifyInstance } from 'fastify';
import { authController } from '../modules/auth/auth.controller';
import { userController } from '../modules/user/user.controller';
import { PrismaClient } from '@prisma/client';

export default async function router(
  fastifyInstance: FastifyInstance,
) {
  userController(fastifyInstance);
  authController(fastifyInstance);
}
