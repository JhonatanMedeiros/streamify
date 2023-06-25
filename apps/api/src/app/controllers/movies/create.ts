import { FastifyReply, FastifyRequest } from 'fastify';
import { createMovieService } from '../../services/create-movie.service';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const { title, description } = request.body as any;

  await createMovieService(prisma, {
    title,
    description,
  });

  reply.status(201).send({ message: 'Movie created success' });
}
