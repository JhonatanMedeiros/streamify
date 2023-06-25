import { FastifyReply, FastifyRequest } from 'fastify';
import { getMovieService } from '../../services/movies/get-movie.service';

export async function getById(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const params = request.params as { id: string };

  try {
    const { movie } = await getMovieService(prisma, params.id);

    reply.status(200).send({ movie });
  } catch {
    reply.unauthorized();
  }
}
