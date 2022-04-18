import { prisma } from "./prisma";

export = {
  Query: {
    parties: async (_parent: any, args: any) => await prisma.party.findMany(),
  },
};
