import { FastifyReply, FastifyRequest } from 'fastify';
import { fetchShowsService } from '../../services/tvshows/fetch-shows.service';

export async function fetch(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const { page: pageQuery } = request.query as { page: string };

  const page = pageQuery ? Number(pageQuery) : 1;

  const { shows } = await fetchShowsService(prisma, page);

  reply.status(200).send({ shows });
}
