import React from "react";
import CreateChannelButton from "../../atoms/CreateChannelButton";
import ChannelSearch from "../../molecules/ChannelSearch";
import ChannelList from "../../organisms/ChannelList";

const Channels: React.FC = () => {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center gap-8 min-h-screen p-4 bg-slate-800">
      <h1 className="text-3xl text-white font-bold">Channels</h1>
      <ChannelSearch />
      <ChannelList />
      <CreateChannelButton />
    </main>
  );
};

export default Channels;
