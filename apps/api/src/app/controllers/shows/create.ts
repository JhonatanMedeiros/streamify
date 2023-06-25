import { FastifyReply, FastifyRequest } from 'fastify';
import { createShowService } from '../../services/create-show.service';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const { title, description } = request.body as any;

  await createShowService(prisma, {
    title,
    description,
  });

  reply.status(201).send({ message: 'Show created success' });
}
