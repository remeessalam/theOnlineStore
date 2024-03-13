import { useQuery, gql, useMutation } from "@apollo/client";
import createApolloClient from "../../../apollo-client";
const client = createApolloClient();
console.log(client, "thisisclientmaf");

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProduct($productInput: ProductInput!) {
    createProduct(productInput: $productInput) {
      productName
      price
      # Include other fields you want to retrieve after creating the product
    }
  }
`;

// export const createProduct = async (formData) => {
//   const productInput = {
//     productDescription: formData?.productDescription,
//     productDetails: formData?.productDetails,
//     productName: formData?.productName,
//     sizeChart: formData?.sizeChart,
//     price: formData?.price,
//     image: [
//       {
//         url: formData?.image?.url,
//       },
//     ],
//     stockCount: formData?.stockCount,
//     categoryOf: formData?.categoryOf,
//   };
//   let requestBody = {
//     query: `
//         mutation CreateProduct($ProductInput: productInput) {
//           createProduct(productInput: $ProductInput) {
//             productName
//             price
//           }
//         }
//       `,
//     variables: {
//       productInput: {
//         productDescription: formData?.productDescription,
//         productDetails: formData?.productDetails,
//         productName: formData?.productName,
//         sizeChart: formData?.sizeChart,
//         price: formData?.price,
//         image: [
//           {
//             url: formData?.image?.url,
//           },
//         ],
//         stockCount: formData?.stockCount,
//         categoryOf: formData?.categoryOf,
//       },
//     },
//   };
//   try {
//     console.log(formData, "thisfetchpageconsole");
//     fetch("http://localhost:3000/api/graphql", {
//       method: "POST",
//       body: JSON.stringify(requestBody),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((data) => {
//         console.log(data, "thisisdatfromfetch");
//         return data;
//       })
//       .catch((err) => console.log(err, "htiafdasdgfasfgasfga"));
//     // const { data } = await client.query({
//     //   query: gql`
//     //     mutation CreateProduct($ProductInput: productInput) {
//     //       createProduct(productInput: $ProductInput) {
//     //         productName
//     //         price
//     //       }
//     //     }
//     //   `,
//     //   variables: {
//     //     productInput: {
//     //       productDescription: formData?.productDescription,
//     //       productDetails: formData?.productDetails,
//     //       productName: formData?.productName,
//     //       sizeChart: formData?.sizeChart,
//     //       price: formData?.price,
//     //       image: [
//     //         {
//     //           url: formData?.image?.url,
//     //         },
//     //       ],
//     //       stockCount: formData?.stockCount,
//     //       categoryOf: formData?.categoryOf,
//     //     },
//     //   },
//     // });
//     // return data;
//   } catch (err) {
//     console.log(err, "thisiserror");
//   }
// };

// export const createProduct = async (formData) => {};

// const { data } = await client.query({
//       query: gql`
//         mutation CreateProduct($ProductInput: productInput) {
//           createProduct(productInput: $ProductInput) {
//             productName
//             price
//           }
//         }
//       `,
//       variables: {
//         productInput: {
//           productDescription: formData?.productDescription,
//           productDetails: formData?.productDetails,
//           productName: formData?.productName,
//           sizeChart: formData?.sizeChart,
//           price: formData?.price,
//           image: [
//             {
//               url: formData?.image?.url,
//             },
//           ],
//           stockCount: formData?.stockCount,
//           categoryOf: formData?.categoryOf,
//         },
//       },
//     });

// let requestBody =gql` {
//   query: `
//             mutation CreateProduct($ProductInput: productInput) {
//               createProduct(productInput: $ProductInput) {
//                 productName
//                 price
//               }
//             }
//           `,
//   variables: {
//     productInput: {
//       productDescription: formData?.productDescription,
//       productDetails: formData?.productDetails,
//       productName: formData?.productName,
//       sizeChart: formData?.sizeChart,
//       price: formData?.price,
//       image: [
//         {
//           url: formData?.image?.url,
//         },
//       ],
//       stockCount: formData?.stockCount,
//       categoryOf: formData?.categoryOf,
//     },
//   },
// }`;

const CREATE_LINK_MUTATION = gql`
  mutation CreateProduct($ProductInput: productInput) {
    createProduct(productInput: $ProductInput) {
      productName
      price
    }
  }
`;
export const createProduct = async (formData) => {
  const [createProduct] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      productInput: {
        productDescription: formData?.productDescription,
        productDetails: formData?.productDetails,
        productName: formData?.productName,
        sizeChart: formData?.sizeChart,
        price: formData?.price,
        image: [
          {
            url: formData?.image?.url,
          },
        ],
        stockCount: formData?.stockCount,
        categoryOf: formData?.categoryOf,
      },
    },
  });
  console.log(createProduct, "thisiafsdfjaskjlfhgjwnflkjsf");
};
