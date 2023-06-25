import { FastifyReply, FastifyRequest } from 'fastify';
import { deleteTvShowService } from '../../services/tvshows/delete-tv-show.service';

export async function deleteTvShow(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const {
    server: { prisma },
  } = request;

  const params = request.params as { id: string };

  try {
    await deleteTvShowService(prisma, params.id);

    reply.status(200).send({ message: 'Show deleted success' });
  } catch {
    reply.unauthorized();
  }
}
