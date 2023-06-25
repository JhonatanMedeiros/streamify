import { FastifyReply, FastifyRequest } from 'fastify';
import { deleteSeasonService } from '../../services/seasons/delete-season.service';

export async function deleteSeason(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const {
    server: { prisma },
  } = request;

  const { id } = request.params as {
    id: string;
  };

  try {
    await deleteSeasonService(prisma, id);
    reply.status(200).send({ message: 'Season deleted success' });
  } catch {
    reply.unauthorized();
  }
}
