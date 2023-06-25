import Fastify from 'fastify';
import GracefulServer from '@gquittet/graceful-server';
import S from 'fluent-json-schema';
import fastifyEnv from '@fastify/env';
import { app } from './app/app';

// Instantiate Fastify with some config
const fastify = Fastify({
  logger: true,
});

const gracefulServer = GracefulServer(fastify.server);

gracefulServer.on(GracefulServer.READY, () => console.log('Server is ready'));

gracefulServer.on(GracefulServer.SHUTTING_DOWN, () =>
  console.log('Server is shutting down')
);

gracefulServer.on(GracefulServer.SHUTDOWN, (error) =>
  console.log('Server is down because of', error.message)
);

const start = async () => {
  try {
    const NODE_ENV = {
      DEVELOPMENT: 'development',
      PRODUCTION: 'production',
    };
    // It's very common to pass secrets and configuration
    // to your application via environment variables.
    // The `fastify-env` plugin will expose those configuration
    // under `fastify.config` and validate those at startup.
    await fastify.register(fastifyEnv, {
      schema: S.object()
        .prop(
          'NODE_ENV',
          S.string().enum(Object.values(NODE_ENV)).default(NODE_ENV.DEVELOPMENT)
        )
        .prop('HOST', S.string().required())
        .prop('PORT', S.string().required())
        .prop('DATABASE_URL', S.string().required())
        .valueOf(),
    });

    // Register your application as a normal plugin.
    await fastify.register(app);

    const host = fastify.config.HOST ?? 'localhost';
    const port = fastify.config.PORT ? Number(fastify.config.PORT) : 3000;

    await fastify.listen({ port, host });
    gracefulServer.setReady();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

// Run the server!
start();
