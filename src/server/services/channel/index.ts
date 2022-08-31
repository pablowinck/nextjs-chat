import { Channel } from "@prisma/client";
import { create } from "./impl/create-channel";
import { ChannelMessage, findByName } from "./impl/find-by";
import { getAll } from "./impl/get-all";

export class ChannelService {
  create: (channel: Channel) => Promise<Channel>;
  findByName: (name: string) => Promise<ChannelMessage | null>;
  getAll: () => Promise<Channel[]>;

  constructor() {
    this.create = create;
    this.findByName = findByName;
    this.getAll = getAll;
  }
}
