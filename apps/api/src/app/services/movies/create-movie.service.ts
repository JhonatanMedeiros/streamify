import { PrismaClient } from '@prisma/client';

export interface CreateMoviePros {
  title: string;
  overview: string;
  releaseDateAt?: string;
  adult?: boolean;
}

export async function createMovieService(
  prisma: PrismaClient,
  { title, overview, releaseDateAt, adult }: CreateMoviePros
) {
  await prisma.movie.create({
    data: {
      title,
      overview,
      releaseDateAt,
      adult,
    },
  });
}
