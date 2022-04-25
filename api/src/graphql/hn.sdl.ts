export const schema = gql`
  enum ItemType {
    job
    story
    comment
    poll
    pollopt
  }
  type Item {
    id: Int!
    deleted: Boolean
    type: ItemType
    by: String
    time: DateTime
    text: String
    dead: Boolean
    parent: String
    poll: String
    kids: [String]
    url: String
    score: String
    title: String!
    parts: [String]
    descendants: Int
  }
  type User {
    id: String!
    created: DateTime!
    karma: Int
    about: String
    submitted: [Int]!
  }
  type Sort {
    title: String!
    id: String!
  }
  type Query {
    sorts: [Sort!]!
    items(sort: String = "topstories"): [Item]!
    item(id: Int!): Item!
  }
`
