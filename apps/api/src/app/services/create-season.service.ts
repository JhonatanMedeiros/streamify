import { PrismaClient } from '@prisma/client';

export interface CreateMoviePros {
  name: string;
  overview: string;
  seasonNumber: number;
  airDateAt: string;
  tvShowId: string;
}

export async function createSeasonService(
  prisma: PrismaClient,
  { name, overview, seasonNumber, airDateAt, tvShowId }: CreateMoviePros
) {
  await prisma.season.create({
    data: {
      name,
      overview,
      seasonNumber,
      airDateAt,
      tvShowId,
    },
  });
}
