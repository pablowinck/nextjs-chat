import { NextApiRequest, NextApiResponse } from "next";
import { ChannelService } from "../../../server/services/channel";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method, query } = req;
  const service = new ChannelService();
  switch (method) {
    case "POST": {
      const channel = await service.create(body);
      res.status(200).json(channel);
      return;
    }
    case "GET": {
      const findBy = query.findBy;
      if (!!findBy && typeof findBy === "string") {
        const channels = await service.findBy(findBy);
        res.status(200).json(channels);
        return;
      }
      const channels = await service.getAll();
      res.status(200).json(channels);
      return;
    }
    default:
      res.status(404).json({ responseData: "not found" });
  }
};

export default handler;
