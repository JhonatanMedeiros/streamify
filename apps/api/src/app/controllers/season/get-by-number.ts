import { FastifyReply, FastifyRequest } from 'fastify';
import { getSeasonByTvService } from '../../services/seasons/get-season-by-tv.service';

export async function getByNumber(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const {
    server: { prisma },
  } = request;

  const { tvShowId, number } = request.params as {
    tvShowId: string;
    number: string;
  };

  const seasonNumber = number ? Number(number) : null;

  const { season } = await getSeasonByTvService(prisma, tvShowId, seasonNumber);

  reply.status(200).send({ season });
}
