import { FastifyReply, FastifyRequest } from 'fastify';
import { fetchMoviesService } from '../../services/fetch-movies.service';

export async function fetch(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const { movies } = await fetchMoviesService(prisma);

  reply.status(200).send({ movies });
}
