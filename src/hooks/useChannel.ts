import { Channel } from "@prisma/client";
import { useQuery } from "react-query";
import { api } from "../utils/api";

export const useFetchChannels = (initialChannels: Channel[]) => {
  return useQuery<Channel[]>(
    "getChannels",
    () => api.get("/api/channels").then((res) => res.data),
    { initialData: initialChannels }
  );
};
