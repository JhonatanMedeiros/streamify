import { PrismaClient } from '@prisma/client';

export async function fetchSeasonService(
  prisma: PrismaClient,
  tvShowId: string
) {
  const seasons = await prisma.season.findMany({
    where: {
      tvShow: {
        id: tvShowId,
      },
    },
    include: {
      episodes: {
        select: {
          id: true,
          name: true,
          overview: true,
          episodeNumber: true,
          airDateAt: true,
        },
      },
    },
  });
  return {
    seasons,
  };
}
