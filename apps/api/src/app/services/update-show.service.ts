import { PrismaClient } from '@prisma/client';

export interface UpdateShowServicePros {
  id: string;
  title: string;
  description: string;
}

export async function updateShowService(
  prisma: PrismaClient,
  { id, title, description }: UpdateShowServicePros
) {
  await prisma.show.update({
    where: {
      id,
    },
    data: {
      title,
      description,
    },
  });
}
