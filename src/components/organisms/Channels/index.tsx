import { Channel } from "@prisma/client";
import React from "react";
import { useFetchChannels } from "../../../hooks/useChannel";
import { api } from "../../../utils/api";
import ChannelCard from "../../molecules/ChannelCard";

const Channels: React.FC<{ initialChannels?: Channel[] }> = ({
  initialChannels,
}) => {
  const channels = useFetchChannels(initialChannels || []);
  return (
    <div className="flex gap-4">
      {channels.data?.map((channel) => (
        <ChannelCard channel={channel} key={channel.id} />
      ))}
    </div>
  );
};

export default Channels;

export async function getServerSideProps() {
  const channels = await api.get("/api/channels").then((res) => res.data);

  return {
    props: { initialChannels: channels },
  };
}
