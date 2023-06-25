import { FastifyReply, FastifyRequest } from 'fastify';
import { getShowService } from '../../services/get-show.service';

export async function getById(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const params = request.params as { id: string };

  try {
    const { show } = await getShowService(prisma, params.id);

    reply.status(200).send({ show });
  } catch {
    reply.unauthorized();
  }
}
