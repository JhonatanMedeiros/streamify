import { PrismaClient } from '@prisma/client';

export interface CreateMoviePros {
  title: string;
  description: string;
}

export async function createShowService(
  prisma: PrismaClient,
  { title, description }: CreateMoviePros
) {
  await prisma.show.create({
    data: {
      title,
      description,
    },
  });
}
