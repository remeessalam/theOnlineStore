import categorySchemas from "@/models/category";
// import productSchemas from "@/models/product";
import mongoose from "mongoose";

export async function GET(req) {
  try {
    mongoose
      .connect(process.env.MONGOURL)
      .then((res) => console.log("db connected"))
      .catch((err) => console.log("error", err));
    const categories = await categorySchemas.find();
    return Response.json({ categories });
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
}

export async function POST(req) {
  try {
    mongoose
      .connect(process.env.MONGOURL)
      .then((res) => console.log("db connected"))
      .catch((err) => console.log("error", err));
    console.log(req, "this is args");
    const category = new categorySchemas({
      categoryName: req.categoryInput.categoryName,
      image: req.categoryInput.image,
    });
    const result = await category.save();
    console.log(result);
    return result;
  } catch (error) {
    throw new Error("Failed to create category");
  }
}
