import { join } from 'path';
import { FastifyInstance } from 'fastify';
import AutoLoad from '@fastify/autoload';

/* eslint-disable-next-line */
export interface AppOptions {}

export async function app(fastify: FastifyInstance, opts: AppOptions) {
  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: { ...opts },
  });

  // Register the application routers
  fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: { ...opts },
  });
}
