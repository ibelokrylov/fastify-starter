import { app } from './app';
import { config } from './config';

app.listen({ port: config.app.port });

console.log(
  `🚀  Fastify server running on port http://localhost:${config.app.port}`,
);
