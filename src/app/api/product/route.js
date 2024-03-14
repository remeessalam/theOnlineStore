// import categorySchemas from "@/models/category";
import productSchemas from "@/models/product";
import mongoose from "mongoose";

export async function GET(req) {
  try {
    mongoose
      .connect(process.env.MONGOURL)
      .then((res) => console.log("db connected"))
      .catch((err) => console.log("error", err));
    const products = await productSchemas.find();
    return Response.json({ products });
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
}

export async function POST(req) {
  try {
    mongoose
      .connect(process.env.MONGOURL)
      .then((res) => console.log("db connected"))
      .catch((err) => console.log("error", err));
    const { formData } = req.json();
    console.log(formData, req.body, "thisisreqpageno");
    return Response.json({ satus: "hai" });
    const product = new productSchemas({
      productName: req.productInput.productName,
      price: req.productInput.price,
      sizeChart: req.productInput.sizeChart,
      stockCount: req.productInput.stockCount,
      productDetails: req.productInput.productDetails,
      productDescription: req.productInput.productDescription,
      image: req.productInput.image,
      categoryOf: mongoose.Types.ObjectId.createFromHexString(
        req.productInput.categoryOf
      ),
    });
    const result = await product.save();
    // return Response.json({ result });
  } catch (error) {
    console.log(error, "thisiserror");
    throw new Error("Failed to create product");
  }
}
