import { PrismaClient } from '@prisma/client';

export async function deleteShowService(prisma: PrismaClient, id: string) {
  await prisma.show.delete({
    where: {
      id,
    },
  });
  return null;
}
