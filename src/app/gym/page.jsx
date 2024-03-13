"use client";
import { useEffect, useState } from "react";
import { fetchData, fetchproductData } from "./querys";
import { createProduct } from "./mutation";
import { useMutation, gql } from "@apollo/client";
const GymPage = () => {
  const [sizeChart, setSizeChart] = useState({
    size: "",
    stock: "",
  });
  const [setImage, setSetImage] = useState({});

  const [categoryFormData, setcategoryFormData] = useState({
    categoryName: "",
    image: "",
  });

  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    sizeChart: [],
    stockCount: "",
    produceDetails: "",
    productDescription: "",
    image: [],
    categoryOf: "",
  });

  useEffect(() => {
    const productData = fetchproductData();
    productData.then((res) => {
      console.log(res, "thisisdata");
    });
    const categoryData = fetchData();

    console.log(categoryData, "jashdfajsdfthisisdata");
  }, []);

  console.log(formData, "thisisformdataingobal");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if ((value <= 0 && value === "-1") || value === "00") return;

    console.log(e);
    setFormData({ ...formData, [name]: value });
    console.log(formData, "form data");
  };

  const handleImageChange = (e) => {
    const { name, value } = e.target;
    setSetImage({ url: value });
    console.log(setImage, "-setimage", name, value, "thisformdataisinimage");
  };

  const addImageToFormData = (e) => {
    e.preventDefault();

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        image: [...prevFormData.image, setImage],
      };
    });
    console.log(formData, "thisformdataisinimage");
  };

  const addsizeChart = (e) => {
    const { name, value } = e.target;
    console.log(typeof value, "thisisnumber");
    if ((value <= 0 && value === "-1") || value === "00") return;
    setSizeChart({ ...sizeChart, [name]: value });
  };

  const handleSizeChart = (e) => {
    e.preventDefault();
    const newSizeChart = [...formData.sizeChart, sizeChart];
    setFormData({ ...formData, sizeChart: newSizeChart });
    setSizeChart({ size: "", stock: "" });
    console.log(formData, "thisisformdatainhandlesi");
  };

  const createCategoryHandle = () => {
    const { name, value } = e.target;
    setcategoryFormData({ ...categoryFormData, [name]: value });
  };

  const submitCategory = (e) => {
    e.preventDefault();
    formData;
  };

  // const productInput = {
  //   productDescription: formData?.productDescription,
  //   productDetails: formData?.produceDetails,
  //   productName: formData?.productName,
  //   sizeChart: formData?.sizeChart,
  //   price: formData?.price,
  //   image: [
  //     {
  //       url: formData?.image?.url,
  //     },
  //   ],
  //   stockCount: formData?.stockCount,
  //   categoryOf: formData?.categoryOf,
  // };
  const productInput = `{
    productName: String!
    price: Int!
    sizeChart: [sizeChartInput]!
    stockCount: Int!
    productDetails: String!
    productDescription: String!
    image: [ImageInput]
    categoryOf: ID
  }`;
  const CREATE_PRODUCT_MUTATION = gql`
    mutation CreateProduct(
      $productName: String!
      $price: Int!
      $sizeChart: [sizeChartInput]!
      $stockCount: Int!
      $productDetails: String!
      $productDescription: String!
      $image: [ImageInput]
      $categoryOf: ID
    ) {
      createProduct(
        productName: $productName
        price: $price
        sizeChart: $sizeChart
        stockCount: $stockCount
        productDetails: $productDetails
        productDescription: $productDescription
        image: $image
        categoryOf: $categoryOf
      ) {
        productName
        price
      }
    }
  `;

  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: { productInput },
    }
  );
  const addproduct = (e) => {
    console.log("function_is_called");
    e.preventDefault();
    console.log(data, "thisisdatfromapollogrpahql");
    createProduct({
      variables: {
        productName: productInput.productName,
        price: productInput.price,
        sizeChart: productInput.sizeChart, // Assuming productInput.sizeChart is already properly formatted
        stockCount: productInput.stockCount,
        productDetails: productInput.productDetails,
        productDescription: productInput.productDescription,
        image: productInput.image,
        categoryOf: productInput.categoryOf,
      },
    });
    // const data = createProduct(formData);
    // data
    //   .then((res) => {
    //     console.log(res, "thisisdatafromproductCreate");
    //   })
    //   .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col">
      <h1>gym page</h1>
      <div className="flex flex-row flex-wrap">
        <div>
          <form
            onSubmit={addproduct}
            action=""
            className="flex flex-col flex-wrap items-start justify-center m-2 p-3 gap-4"
          >
            <div className="flex gap-3">
              <label>product name</label>
              <input
                className="border rounded-md"
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3">
              <label>price</label>
              <input
                className="border rounded-md p-1 [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] focus:outline-none"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3">
              <label>size chart</label>
              <input
                className="border rounded-md p-1 [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] focus:outline-none"
                type="text"
                name="size"
                value={sizeChart.size}
                onChange={addsizeChart}
              />
              <input
                className="border rounded-md p-1 [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] focus:outline-none"
                type="number"
                name="stock"
                value={sizeChart.stock}
                onChange={addsizeChart}
              />
              <button
                onClick={handleSizeChart}
                className="bg-blue-900 text-white rounded-md pt-1 pb-1 pl-5 pr-5 "
              >
                add size chart
              </button>
            </div>
            <div className="flex gap-3">
              <label>stock count</label>
              <input
                className="border rounded-md p-1 [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] focus:outline-none"
                type="number"
                name="stockCount"
                value={formData.stockCount}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3">
              <label>product details</label>
              <input
                className="border rounded-md p-1 [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] focus:outline-none"
                type="text"
                name="produceDetails"
                value={formData.produceDetails}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3">
              <label>product description</label>
              <input
                className="border rounded-md p-1 [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] focus:outline-none"
                type="text"
                name="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3">
              <label>image</label>
              <input
                className="border rounded-md overflow-hidden p-1 [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] focus:outline-none"
                type="text"
                name="url"
                value={formData?.image?.url}
                onChange={handleImageChange}
              />
              <button onClick={(e) => addImageToFormData(e)}>
                {" "}
                add to form data
              </button>
            </div>
            <div className="flex gap-3">
              <label>category of</label>
              <input
                className="border rounded-md p-1 [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] focus:outline-none"
                type="text"
                name="categoryOf"
                value={formData.categoryOf}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              // onClick={(e) => addproduct(e)}
              className="bg-blue-900 text-white rounded-md pt-1 pb-1 pr-5 pl-5"
            >
              create product
            </button>
          </form>
        </div>
        <div className="flex flex-col bg-green-300 m-2 p-3 gap-6">
          <h1>create categories</h1>
          <div className="flex gap-4">
            <label>category name</label>
            <input
              className="border rounded-md p-1 [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] focus:outline-none"
              type="text"
              name="categoryName"
              value={categoryFormData.categoryName}
              onChange={createCategoryHandle}
            />
          </div>
          <div className="flex gap-4">
            <label>category image</label>
            <input
              className="border rounded-md p-1 [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] focus:outline-none"
              type="text"
              name="image"
              value={categoryFormData.image}
              onChange={createCategoryHandle}
            />
          </div>
          <button
            className="bg-blue-900 text-white rounded-md pt-1 pb-1"
            onClick={submitCategory}
          >
            Create Category
          </button>
        </div>
      </div>
      <div className="flex flex-col m-2 p-3 gap-4">
        <h1 className="flex gap-6">productName: {formData.productName}</h1>
        <h1>price: {formData.price}</h1>
        <h1 className="flex flex-row flex-wrap gap-2">
          sizeChart:{" "}
          {formData?.sizeChart.map((item) => {
            console.log(item, "thisisiteminformdata");
            return (
              <div className="bg-blue-600 text-white p-2 gap-2 rounded-md">
                <h1>stock: {item.stock}</h1>
                <h1>size: {item.size}</h1>
              </div>
            );
          })}
        </h1>
        <h1>stockCount: {formData.stockCount}</h1>
        <h1>produceDetails: {formData.produceDetails}</h1>
        <h1>productDescription: {formData.productDescription}</h1>
        <h1 className="flex flex-row flex-wrap gap-2">
          image:{" "}
          {formData?.image.map((item) => {
            console.log(item, "thisisitem");
            return (
              <div className="bg-blue-600 text-white p-2 gap-2 rounded-md">
                <h1>url: {item.url}</h1>
              </div>
            );
          })}
        </h1>
        <h1>categoryOf: {formData.categoryOf}</h1>
      </div>
    </div>
  );
};

export default GymPage;
