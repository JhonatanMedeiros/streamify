import { FastifyReply, FastifyRequest } from 'fastify';
import { deleteMovieService } from '../../services/movies/delete-movie.service';

export async function deleteMovie(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const {
    server: { prisma },
  } = request;

  const params = request.params as { id: string };

  try {
    await deleteMovieService(prisma, params.id);

    reply.status(200).send({ message: 'Movie deleted success' });
  } catch {
    reply.unauthorized();
  }
}
