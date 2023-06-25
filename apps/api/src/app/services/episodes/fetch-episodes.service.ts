import { PrismaClient } from '@prisma/client';

export async function fetchEpisodesService(
  prisma: PrismaClient,
  tvShowId: string,
  seasonNumber: number
) {
  const episodes = await prisma.episode.findMany({
    where: {
      season: {
        seasonNumber,
        tvShow: {
          id: tvShowId,
        },
      },
    },
  });
  return {
    episodes,
  };
}
