import { PrismaClient } from '@prisma/client';

export interface CreateMoviePros {
  name: string;
  overview: string;
  adult: boolean;
  firstAirDateAt: string;
  lastAirDateAt: string;
}

export async function createShowService(
  prisma: PrismaClient,
  { name, overview, adult, firstAirDateAt, lastAirDateAt }: CreateMoviePros
) {
  await prisma.tvShow.create({
    data: {
      name,
      overview,
      adult,
      firstAirDateAt,
      lastAirDateAt,
    },
  });
}
