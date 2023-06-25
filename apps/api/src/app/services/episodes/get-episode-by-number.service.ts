import { PrismaClient } from '@prisma/client';

export async function getEpisodeByNumberService(
  prisma: PrismaClient,
  tvShowId: string,
  seasonNumber: number,
  episodeNumber: number
) {
  console.log(tvShowId);
  console.log(seasonNumber);
  const episode = await prisma.episode.findFirstOrThrow({
    where: {
      episodeNumber,
      season: {
        seasonNumber,
        tvShowId,
      },
    },
  });
  return {
    episode,
  };
}
