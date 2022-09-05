import { Channel } from "@prisma/client";
import { prisma } from "../../../db/client";

export type ChannelMessage = {
  name: string;
  id: string;
  messages: { username: string; message: string; id: string }[];
};

export function findBy(searchValue: string): Promise<Channel[]> {
  return prisma.channel.findMany({
    where: { OR: [{ id: searchValue }, { name: { startsWith: searchValue } }] },
  });
}
