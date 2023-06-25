import { PrismaClient } from '@prisma/client';

export interface UpdateMoviePros {
  id: string;
  title: string;
  overview: string;
  releaseDateAt?: string;
  adult?: boolean;
}

export async function updateMovieService(
  prisma: PrismaClient,
  { id, title, overview, releaseDateAt, adult }: UpdateMoviePros
) {
  await prisma.movie.update({
    where: {
      id,
    },
    data: {
      title,
      overview,
      releaseDateAt,
      adult,
    },
  });
}
