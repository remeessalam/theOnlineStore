import { gql } from "@apollo/client";
import createApolloClient from "../../../apollo-client";
const client = createApolloClient();

export const fetchData = async () => {
  const { data } = await client.query({
    query: gql`
      query Categories {
        categories {
          categoryName
          image {
            url
          }
        }
      }
    `,
  });
  console.log(data, "laksdnflkthisisdata");
  return data;
};
export const fetchproductData = async () => {
  const { data } = await client.query({
    query: gql`
      query Products {
        products {
          id
          productName
          price
          sizeChart {
            size
            stock
          }
          stockCount
          productDetails
          productDescription
          images {
            url
          }
        }
      }
    `,
  });
  return data;
};
