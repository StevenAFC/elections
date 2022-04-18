import { gql } from "apollo-server-core";

export default gql`
  type Party {
    id: ID!
    name: String
  }

  type Candidate {
    id: ID!
    name: String
  }

  type Query {
    parties: [Party]!
  }
`;
