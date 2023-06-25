import { PrismaClient } from '@prisma/client';

export async function fetchMoviesService(prisma: PrismaClient, page = 1) {
  const take = 20;
  const movies = await prisma.movie.findMany({
    take,
    skip: (page - 1) * take,
  });
  return {
    movies,
  };
}
