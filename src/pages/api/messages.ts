import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const messages = async (req: NextApiRequest, res: NextApiResponse) => {
  const channelId = req.query.channelId;
  if (!channelId || typeof channelId !== "string") {
    res.status(500).json({ responseData: "channelId is required" });
    return;
  }
  const messages = await prisma.message.findMany({
    where: { channelId },
  });
  res.status(200).json(messages);
};

export default messages;
