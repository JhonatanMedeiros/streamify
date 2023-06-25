import { FastifyReply, FastifyRequest } from 'fastify';
import { createShowService } from '../../services/create-show.service';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const { name, overview, adult, firstAirDateAt, lastAirDateAt } =
    request.body as any;

  await createShowService(prisma, {
    name,
    overview,
    adult,
    firstAirDateAt,
    lastAirDateAt,
  });

  reply.status(201).send({ message: 'Show created success' });
}
