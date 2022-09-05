import { Channel } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { api } from "../utils/api";

export const useFetchChannels = (initialChannels: Channel[]) => {
  return useQuery<Channel[]>(
    "getChannels",
    () => api.get("/api/channels").then((res) => res.data),
    { initialData: initialChannels }
  );
};

export const useCreateChannel = () => {
  const client = useQueryClient();
  return useMutation(
    ({ name }: { name: string }) =>
      api.post("/api/channels", {
        name,
      }),
    {
      onSuccess: () => {
        client.invalidateQueries("getChannels");
        client.invalidateQueries("getName");
      },
    }
  );
};
