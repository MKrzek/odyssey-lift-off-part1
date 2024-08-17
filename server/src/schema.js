import gql from "graphql-tag"

const typeDefs = gql`
type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    moduleCount: Int
}

type Author {
    id: ID!
    name: String!
    photo: String
}
type Query {
    tracksForHome: [Track!]!
}
`

export default typeDefs