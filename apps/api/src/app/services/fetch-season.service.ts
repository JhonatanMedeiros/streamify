import { PrismaClient } from '@prisma/client';

export async function fetchSeasonService(prisma: PrismaClient, page = 1) {
  const take = 20;
  const shows = await prisma.season.findMany({
    take,
    skip: (page - 1) * take,
    include: {
      tvShow: {
        select: {
          id: true,
          name: true,
          overview: true,
          season: true,
          firstAirDateAt: true,
          lastAirDateAt: true,
          adult: true,
        },
      },
    },
  });
  return {
    shows,
  };
}
