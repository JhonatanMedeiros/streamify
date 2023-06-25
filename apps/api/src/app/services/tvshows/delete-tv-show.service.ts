import { PrismaClient } from '@prisma/client';

export async function deleteTvShowService(prisma: PrismaClient, id: string) {
  await prisma.tvShow.delete({
    where: {
      id,
    },
  });
  return null;
}
