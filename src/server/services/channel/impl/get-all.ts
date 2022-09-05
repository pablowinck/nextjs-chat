import { Channel } from "@prisma/client";
import { prisma } from "../../../../server/db/client";

export function getAll(): Promise<Channel[]> {
  return prisma.channel.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });
}
