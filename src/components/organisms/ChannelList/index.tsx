import { Loading } from "@nextui-org/react";
import { Channel } from "@prisma/client";
import React from "react";
import { useFetchChannels } from "../../../hooks/useChannel";
import { api } from "../../../utils/api";
import ChannelCard from "../../molecules/ChannelCard";

const ChannelList: React.FC<{ initialChannels?: Channel[] }> = ({
  initialChannels,
}) => {
  const { isError, isLoading, isIdle, data } = useFetchChannels(
    initialChannels || []
  );
  return (
    <div className="flex gap-4 items-center justify-center">
      {isError || isLoading || isIdle ? (
        <Loading color="primary" size="xl">
          Loading
        </Loading>
      ) : (
        data.map((channel) => (
          <ChannelCard channel={channel} key={channel.id} />
        ))
      )}
    </div>
  );
};

export default ChannelList;

export async function getServerSideProps() {
  const channels = await api.get("/api/channels").then((res) => res.data);

  return {
    props: { initialChannels: channels },
  };
}
