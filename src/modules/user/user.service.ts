import { FastifyReply, FastifyRequest } from 'fastify';

export const getUserProfile = (_: FastifyRequest, reply: FastifyReply) => {
  reply.send({ hello: 'world' });
};
