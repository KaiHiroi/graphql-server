/* resolvers.js*/

const { Proposals } = require("./data");

const resolvers = {
  proposals: async (_) => {
    return Proposals;
  },
  proposal: async ({ id }, context) => {
    return Proposals.find((proposal) => proposal.id == id);
  },
  // solutions: async (_) => {
  //   return;
  // },
};

module.exports = resolvers;
