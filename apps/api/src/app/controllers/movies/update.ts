import { FastifyReply, FastifyRequest } from 'fastify';
import {
  UpdateMoviePros,
  updateMovieService,
} from '../../services/movies/update-movie.service';

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const params = request.params as { id: string };
  const { title, overview, releaseDateAt, adult } =
    request.body as UpdateMoviePros;

  await updateMovieService(prisma, {
    id: params.id,
    title,
    overview,
    releaseDateAt,
    adult,
  });

  reply.status(201).send({ message: 'Movie updated success' });
}
