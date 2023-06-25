import { PrismaClient } from '@prisma/client';

export interface CreateEpisodePros {
  tvShowId: string;
  seasonNumber: number;
  name: string;
  overview: string;
  episodeNumber: number;
  airDateAt: string;
}

export async function createEpisodeService(
  prisma: PrismaClient,
  {
    tvShowId,
    seasonNumber,
    name,
    overview,
    episodeNumber,
    airDateAt,
  }: CreateEpisodePros
) {
  const { id: seasonId } = await prisma.season.findFirstOrThrow({
    where: {
      tvShowId,
      seasonNumber,
    },
  });

  await prisma.episode.create({
    data: {
      name,
      overview,
      episodeNumber,
      airDateAt,
      season: {
        connect: {
          id: seasonId,
        },
      },
    },
  });
}
