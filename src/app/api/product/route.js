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

export async function POST(request) {
  try {
    mongoose
      .connect(process.env.MONGOURL)
      .then((res) => console.log("db connected"))
      .catch((err) => console.log("error", err));
    const { data } = await request.json();
    console.log(data, "thisisreqpageno");
    // return Response.json({ status: "hai" });
    const product = new productSchemas({
      productName: data.productName,
      price: data.price,
      sizeChart: data.sizeChart,
      stockCount: data.stockCount,
      productDetails: data.productDetails,
      productDescription: data.productDescription,
      image: data.image,
      categoryOf: mongoose.Types.ObjectId.createFromHexString(data.categoryOf),
    });
    const result = await product.save();
    return Response.json({ result });
  } catch (error) {
    console.log(error, "thisiserror");
    throw new Error("Failed to create product");
  }
}
