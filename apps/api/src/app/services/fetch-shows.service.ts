import { PrismaClient } from '@prisma/client';

export async function fetchShowsService(prisma: PrismaClient, page = 1) {
  const take = 20;
  const shows = await prisma.tvShow.findMany({
    take,
    skip: (page - 1) * take,
    include: {
      season: {
        select: {
          id: true,
          name: true,
          overview: true,
          seasonNumber: true,
          airDateAt: true,
          episodes: {
            select: {
              id: true,
              name: true,
              overview: true,
            },
          },
        },
      },
    },
  });
  return {
    shows,
  };
}
