import { PrismaClient } from '@prisma/client';

export async function deleteMovieService(prisma: PrismaClient, id: string) {
  await prisma.movie.delete({
    where: {
      id,
    },
  });
  return null;
}
