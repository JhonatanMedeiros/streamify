import { PrismaClient } from '@prisma/client';

export async function fetchShowsService(prisma: PrismaClient, page = 1) {
  const take = 20;
  const shows = await prisma.show.findMany({
    take,
    skip: (page - 1) * take,
  });
  return {
    shows,
  };
}
