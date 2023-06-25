import { PrismaClient } from '@prisma/client';

export interface UpdateMoviePros {
  id: string;
  title: string;
  description: string;
}

export async function updateMovieService(
  prisma: PrismaClient,
  { id, title, description }: UpdateMoviePros
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
