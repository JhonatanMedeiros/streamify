import 'fastify';
declare module 'fastify' {
  interface FastifyInstance {
    config: {
      HOST: string;
      PORT: string;
      NODE_ENV: 'development' | 'production';
      DATABASE_URL: string;
    };
  }
}
