import { Channel } from "@prisma/client";
import { create } from "./impl/create-channel";
import { findBy } from "./impl/find-by";
import { getAll } from "./impl/get-all";

export class ChannelService {
  create: (channel: Channel) => Promise<Channel>;
  findBy: (name: string) => Promise<Channel[]>;
  getAll: () => Promise<Channel[]>;

  constructor() {
    this.create = create;
    this.findBy = findBy;
    this.getAll = getAll;
  }
}
