import { PrismaClient } from '@prisma/client';

export async function fetchMoviesService(prisma: PrismaClient) {
  const movies = await prisma.movie.findMany();
  return {
    movies,
  };
}
