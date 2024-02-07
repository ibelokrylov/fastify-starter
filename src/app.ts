import fastify from 'fastify';
import router from './routes';
import prismaPlugin from './plugins/prisma.plugin';

export const app = fastify({
  logger: true,
});

app.register(router);
app.register(prismaPlugin);
