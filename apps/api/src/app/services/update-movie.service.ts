import { PrismaClient } from '@prisma/client';

export interface CreateMoviePros {
  id: string;
  title: string;
  description: string;
}

export async function updateMovieService(
  prisma: PrismaClient,
  { id, title, description }: CreateMoviePros
) {
  await prisma.movie.update({
    where: {
      id,
    },
    data: {
      title,
      description,
    },
  });
}
