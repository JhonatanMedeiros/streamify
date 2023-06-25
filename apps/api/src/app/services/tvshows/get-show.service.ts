import { PrismaClient } from '@prisma/client';

export async function getShowService(prisma: PrismaClient, id: string) {
  const show = await prisma.tvShow.findFirstOrThrow({
    where: {
      id,
    },
  });
  return {
    show,
  };
}
