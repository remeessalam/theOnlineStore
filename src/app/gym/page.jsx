"use client";
import { useEffect, useState } from "react";
// import axios from "axios";
const GymPage = () => {
  const [sizeChart, setSizeChart] = useState({
    size: "",
    stock: "",
  });
  const [setImage, setSetImage] = useState({});
  const [csetImage, setCsetImage] = useState({});
  const [categoryFormData, setcategoryFormData] = useState({
    categoryName: "",
    image: [],
  });

  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    sizeChart: [],
    stockCount: "",
    productDetails: "",
    productDescription: "",
    image: [],
    categoryOf: "",
  });

  useEffect(() => {
    fetchproductData();

    fetchData();
  }, []);

  const fetchData = () => {
    fetch("/api/category").then((res) => {
      res.json().then((categories) => {
        // setCategories(categories);
      });
    });
  };
  const fetchproductData = () => {
    fetch("/api/product").then((res) => {
      res.json().then((categories) => {
        // setCategories(categories);
      });
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if ((value <= 0 && value === "-1") || value === "00") return;

    setFormData({ ...formData, [name]: value });
    console.log(formData, "form data");
  };

  const handleImageChange = (e) => {
    const { name, value } = e.target;
    setSetImage({ url: value });
  };

  const addImageToFormData = (e) => {
    e.preventDefault();

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        image: [...prevFormData.image, setImage],
      };
    });
  };

  const addsizeChart = (e) => {
    const { name, value } = e.target;
    if ((value <= 0 && value === "-1") || value === "00") return;
    setSizeChart({ ...sizeChart, [name]: value });
  };

  const handleSizeChart = (e) => {
    e.preventDefault();
    const newSizeChart = [...formData.sizeChart, sizeChart];
    setFormData({ ...formData, sizeChart: newSizeChart });
    setSizeChart({ size: "", stock: "" });
  };

  const createCategoryHandle = (e) => {
    const { name, value } = e.target;
    setcategoryFormData({ ...categoryFormData, [name]: value });
  };
  const addcategoryimagetoForm = () => {
    setcategoryFormData((pre) => {
      return { ...pre, image: [...pre.image, csetImage] };
    });
    setCsetImage({});
    document.querySelector('input[name="image"]').value = "";
  };

  const submitCategory = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: categoryFormData }),
    });
  };

  const addproduct = async (e) => {
    e.preventDefault();
    let data = { name: "remees", age: 26, job: "developer", marriage: true };
    const response = await fetch("/api/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: formData }),
    });
    // const response = await axios.post("/api/product", JSON.stringify(data), {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
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
                name="productDetails"
                value={formData.productDetails}
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
              value={csetImage?.url}
              onChange={(e) => {
                const { value } = e.target;
                setCsetImage({ url: value });
              }}
            />
            <button onClick={addcategoryimagetoForm}>add category image</button>
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
          {formData?.sizeChart.map((item, i) => {
            return (
              <div
                key={i}
                className="bg-blue-600 text-white p-2 gap-2 rounded-md"
              >
                <h1>stock: {item.stock}</h1>
                <h1>size: {item.size}</h1>
              </div>
            );
          })}
        </h1>
        <h1>stockCount: {formData.stockCount}</h1>
        <h1>productDetails: {formData.productDetails}</h1>
        <h1>productDescription: {formData.productDescription}</h1>
        <h1 className="flex flex-row flex-wrap gap-2">
          image:{" "}
          {formData?.image.map((item, i) => {
            return (
              <div
                key={i}
                className="bg-blue-600 text-white p-2 gap-2 rounded-md"
              >
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
