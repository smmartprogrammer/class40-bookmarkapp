const { ApolloServer, gql } = require("apollo-server-lambda")

const typeDefs = gql`
  type Query {
    Bookmark: [Bookmark!]
  }

  type Bookmark {
    id: ID!
    url: String!
    desc: String!
  }

  type Mutation {
    addBookMarkz(url: String!, desc: String!)
  }
`

const authors = [
  {
    id: 1,
    URL: "https://github.com/gatsbyjs/gatsby-starter-hello-world",
    desc: "this is a github gatsby official repository",
  },
  {
    id: 2,
    URL: "https://github.com/gatsbyjs/gatsby-starter-hello-world",
    desc: "this is a github gatsby official repository",
  },
  {
    id: 3,
    URL: "https://github.com/gatsbyjs/gatsby-starter-hello-world",
    desc: "this is a github gatsby official repository",
  },
]

const resolvers = {
  Query: {
    Bookmark: (root, args, context) => {
      return authors
    },
  },
  Mutation: {
    addBookMark: (_, { url, desc }) => {
      console.log("url--desc", url, "desc", desc)
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
