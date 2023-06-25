import { PrismaClient } from '@prisma/client';

export async function getShowService(prisma: PrismaClient, id: string) {
  const show = await prisma.show.findFirstOrThrow({
    where: {
      id,
    },
  });
  return {
    show,
  };
}
