import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
type Book {
    id: Int!
    title: String
    author: Author
}
  
type Author {
    name: String
    books: [Book]
}

type Query {
    books: [Book]
    authors: [Author],
    book(id: Int!): Book
}

type Mutation{
    addBook(title: String): Book
    updateBook(id: Int, title: String): Book
}

`;

const books = [
  {
    id: 1,
    title: "The Awakening",
    author: {
      name: "Kate Chopin",
    },
  },
  {
    id: 2,
    title: "City of Glass",
    author: {
      name: "Paul Auster",
    },
  },
];

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => {
      return books.find((book) => book.id == args.id);
    },
  },
  Mutation: {
    addBook: (parent, args) => {
      let book = {
        id: 3,
        title: args.title,
        author: {
          name: "hard coded",
        },
      };
      books.push(book);
      return book;
    },
    updateBook: (parent, args) => {
      let index = books.findIndex((book) => book.id === args.id);
      books[index].title = args.title;
      return books[index];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
