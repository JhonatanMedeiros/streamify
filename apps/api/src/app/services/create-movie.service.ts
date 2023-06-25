import { PrismaClient } from '@prisma/client';

export interface CreateMoviePros {
  title: string;
  description: string;
}

export async function createMovieService(
  prisma: PrismaClient,
  { title, description }: CreateMoviePros
) {
  await prisma.movie.create({
    data: {
      title,
      description,
    },
  });
}
