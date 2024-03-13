const typeDefs = `#graphql 
  type Product {
    id: ID!
    productName: String!
    price: Int!
    sizeChart: [sizeChart]!
    stockCount: Int!
    productDetails: String!
    productDescription: String!
    images: [Image]
    categoryOf: Category
  }

  type sizeChart {
    size: String!
    stock: Int!
  }
  type Image {
    url: String
  }
  input sizeChartInput {
    size: String!
    stock: Int!
  }

  input ImageInput {
    url: String
  }

  type Category {
    id: ID!
    categoryName: String!
    image: [Image]
  }

  input ProductInput {
    productName: String!
    price: Int!
    sizeChart: [sizeChartInput]!
    stockCount: Int!
    productDetails: String!
    productDescription: String!
    image: [ImageInput]
    categoryOf: ID
  }

  input CategoryInput {
    categoryName: String!
    image: [ImageInput]
  }

  type Query {
    products: [Product!]!
    categories: [Category!]!
  }

  type Mutation {
    createProduct(productInput: ProductInput): Product
    createCategory(categoryInput: CategoryInput): Category
  }
`;

//   schema {
//     query: RootQuery
//     mutation: RootMutation # Added mutation entry point
//   }
export default typeDefs;
