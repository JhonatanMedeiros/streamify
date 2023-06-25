import { FastifyReply, FastifyRequest } from 'fastify';
import {
  CreateMoviePros,
  createMovieService,
} from '../../services/movies/create-movie.service';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const { title, overview, releaseDateAt, adult } =
    request.body as CreateMoviePros;

  await createMovieService(prisma, {
    title,
    overview,
    releaseDateAt,
    adult,
  });

  reply.status(201).send({ message: 'Movie created success' });
}
