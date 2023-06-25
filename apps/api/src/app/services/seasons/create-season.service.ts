import { PrismaClient } from '@prisma/client';

export interface CreateSeasonPros {
  name: string;
  overview: string;
  seasonNumber: number;
  airDateAt: string;
  tvShowId: string;
}

export async function createSeasonService(
  prisma: PrismaClient,
  { name, overview, seasonNumber, airDateAt, tvShowId }: CreateSeasonPros
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
