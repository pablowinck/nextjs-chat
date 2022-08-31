import { prisma } from "../../../db/client";

export type ChannelMessage = {
  name: string;
  id: string;
  messages: { username: string; message: string; id: string }[];
};

export function findByName(name: string): Promise<ChannelMessage | null> {
  return prisma.channel.findFirstOrThrow({
    where: { name },
    select: {
      name: true,
      id: true,
      messages: { select: { username: true, message: true, id: true } },
    },
  });
}
