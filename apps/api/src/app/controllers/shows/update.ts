import { FastifyReply, FastifyRequest } from 'fastify';
import { updateShowService } from '../../services/update-show.service';

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const params = request.params as { id: string };
  const { title, description } = request.body as any;

  await updateShowService(prisma, {
    id: params.id,
    title,
    description,
  });

  reply.status(201).send({ message: 'Show updated success' });
}
