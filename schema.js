/* schema.js */

const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        proposals: [Proposal!]!,
        proposal(id: Int!): Proposal!
    }

    type Proposal {
        id: ID!
        problem: Problem!
        harm: String
        cause: String
        solutions: [Solution]
    }

    type Problem {
        id: ID!
        text: String!
    }

    type Solution {
      id: ID!
      law: String
      to: Int
      since: Int
      until: Int
      amount: Int
      members: [Member]
    }

    type Member {
      id: ID!
      address: String!
    }
`);

module.exports = schema;
