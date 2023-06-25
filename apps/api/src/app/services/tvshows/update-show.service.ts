import { PrismaClient } from '@prisma/client';

export interface UpdateShowServicePros {
  id: string;
  name: string;
  overview: string;
  adult: boolean;
  firstAirDateAt: string;
  lastAirDateAt: string;
}

export async function updateShowService(
  prisma: PrismaClient,
  {
    id,
    name,
    overview,
    adult,
    firstAirDateAt,
    lastAirDateAt,
  }: UpdateShowServicePros
) {
  await prisma.tvShow.update({
    where: {
      id,
    },
    data: {
      name,
      overview,
      firstAirDateAt,
      lastAirDateAt,
      adult,
    },
  });
}
