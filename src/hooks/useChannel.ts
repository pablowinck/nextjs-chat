import { Channel } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSearchChannelContext } from "../context/SearchChannelContext";
import { api } from "../utils/api";

export const useFetchChannels = (initialChannels: Channel[]) => {
  const { searchValue } = useSearchChannelContext();
  return useQuery<Channel[]>(
    ["getChannels", searchValue],
    () =>
      api
        .get("/api/channels", {
          params: {
            findBy: searchValue,
          },
        })
        .then((res) => res.data),
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
