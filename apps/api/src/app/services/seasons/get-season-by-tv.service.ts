import { PrismaClient } from '@prisma/client';

export async function getSeasonByTvService(
  prisma: PrismaClient,
  tvShowId: string,
  seasonNumber: number
) {
  console.log(tvShowId);
  console.log(seasonNumber);
  const season = await prisma.season.findFirstOrThrow({
    where: {
      seasonNumber,
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
    season,
  };
}
