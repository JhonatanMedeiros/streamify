import { FastifyReply, FastifyRequest } from 'fastify';
import { updateShowService } from '../../services/update-show.service';

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const params = request.params as { id: string };
  const { name, overview, adult, firstAirDateAt, lastAirDateAt } =
    request.body as any;

  await updateShowService(prisma, {
    id: params.id,
    name,
    overview,
    adult,
    firstAirDateAt,
    lastAirDateAt,
  });

  reply.status(201).send({ message: 'Show updated success' });
}
