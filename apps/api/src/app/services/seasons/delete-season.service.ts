import { PrismaClient } from '@prisma/client';

export async function deleteSeasonService(prisma: PrismaClient, id: string) {
  await prisma.season.delete({
    where: {
      id,
    },
  });
  return null;
}
