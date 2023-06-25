import { FastifyReply, FastifyRequest } from 'fastify';
import { deleteShowService } from '../../services/delete-show.service';

export async function deleteShow(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const params = request.params as { id: string };

  try {
    await deleteShowService(prisma, params.id);

    reply.status(200).send({ message: 'Show deleted success' });
  } catch {
    reply.unauthorized();
  }
}
