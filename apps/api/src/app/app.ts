import { join } from 'path';
import { FastifyInstance } from 'fastify';
import AutoLoad from '@fastify/autoload';
import multipart from '@fastify/multipart';
import helmet from '@fastify/helmet';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import prismaPlugin from '@sabinthedev/fastify-prisma';

import HomeRouter from './controllers/root/routes';
import MovieRouter from './controllers/movie/routes';
import UploadRouter from './controllers/upload/routes';

/* eslint-disable-next-line */
export interface AppOptions {}

export async function app(fastify: FastifyInstance, opts: AppOptions) {
  fastify.register(helmet, { global: true });
  fastify.register(cors, { origin: '*' });
  fastify.register(rateLimit);
  fastify.register(multipart);
  fastify.register(prismaPlugin);

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: { ...opts },
  });

  // Register the application routers
  fastify.register(HomeRouter);
  fastify.register(MovieRouter);
  fastify.register(UploadRouter);
}
