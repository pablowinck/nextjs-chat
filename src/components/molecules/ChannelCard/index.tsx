import { Channel } from "@prisma/client";
import Image from "next/image";
import React from "react";

const ChannelCard: React.FC<{ channel: Channel }> = ({ channel }) => (
  <div className="p-8 backdrop-brightness-50 flex flex-col items-center justify-center gap-4 rounded-lg cursor-pointer hover:scale-105 transition-all">
    <div className="rounded-lg overflow-hidden w-20 h-20">
      <Image
        className="flex-1"
        src={`https://avatars.dicebear.com/api/adventurer-neutral/${channel.name}.svg`}
        width="85px"
        height="85px"
        alt="avatar"
      />
    </div>
    <span className="text-lg text-white ">{channel.name}</span>
  </div>
);

export default ChannelCard;
