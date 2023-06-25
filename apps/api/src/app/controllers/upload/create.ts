import { FastifyReply, FastifyRequest } from 'fastify';
import fs from 'node:fs';
import { basename, extname } from 'node:path';
import util from 'node:util';
import { pipeline } from 'node:stream';

const pump = util.promisify(pipeline);

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const file = await request.file();

  const {
    server: { prisma },
  } = request;

  const fileExtension = extname(file.filename);
  const fileWithoutSpaces = file.filename.replace(/\s+/g, '_');
  const fileName = basename(fileWithoutSpaces, fileExtension);

  const filePath = `${fileName}-${Date.now()}${fileExtension}`;
  const path = `./uploads/${filePath}`;
  await pump(file.file, fs.createWriteStream(path));

  await prisma.file.create({
    data: {
      name: file.filename,
      path: filePath,
      mimetype: file.mimetype,
    },
  });

  reply.code(200).send({ message: 'File uploaded' });
}
