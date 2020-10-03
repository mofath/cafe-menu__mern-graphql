const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Item {
  _id: ID!
  name: String!
  type: String!
  price: Float!
  image: String!
}
input ItemInput {
  name: String!
  type: String!
  price: Float!
  image: String!
}
type RootQuery {
    items: [Item!]!
}
type RootMutation {
    createItem(itemInput: ItemInput): Item
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`)