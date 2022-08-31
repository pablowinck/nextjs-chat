import { NextApiRequest, NextApiResponse } from "next";

const getChannelMessages = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  res.status(200).json({ responseData: "ok" });
};

export default getChannelMessages;
