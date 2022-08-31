import { Channel } from "@prisma/client";
import { prisma } from "../../../db/client";

export async function create(channel: Channel): Promise<Channel> {
  const channelLength = await prisma.channel.count();
  if (channelLength >= 5) {
    const channels = await prisma.channel.findMany();
    await prisma.channel.delete({
      where: { id: channels[0]?.id },
    });
  }
  return prisma.channel.create({ data: channel });
}
