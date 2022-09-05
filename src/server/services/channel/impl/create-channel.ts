import { Channel } from "@prisma/client";
import { prisma } from "../../../db/client";

export async function create(channel: Channel): Promise<Channel> {
  await prisma.channel.deleteMany({
    where: {
      createdAt: {
        lte: new Date(new Date().setDate(new Date().getDate() - 2)),
      },
    },
  });

  return prisma.channel.create({
    data: channel,
  });
}
