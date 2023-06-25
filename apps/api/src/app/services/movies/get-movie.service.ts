import { PrismaClient } from '@prisma/client';

export async function getMovieService(prisma: PrismaClient, id: string) {
  const movie = await prisma.movie.findFirstOrThrow({
    where: {
      id,
    },
  });
  return {
    movie,
  };
}
