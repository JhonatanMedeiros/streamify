import { FastifyReply, FastifyRequest } from 'fastify';
import { updateMovieService } from '../../services/update-movie.service';

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const params = request.params as { id: string };
  const { title, description } = request.body as any;

  await updateMovieService(prisma, {
    id: params.id,
    title,
    description,
  });

  reply.status(201).send({ message: 'Movie updated success' });
}
