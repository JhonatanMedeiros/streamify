import { FastifyReply, FastifyRequest } from 'fastify';
import { fetchMoviesService } from '../../services/fetch-movies.service';

export async function fetch(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const { page: pageQuery } = request.query as { page: string };

  const page = pageQuery ? Number(pageQuery) : 1;

  const { movies } = await fetchMoviesService(prisma, page);

  reply.status(200).send({ movies });
}
