import categorySchemas from "@/models/category";
// import productSchemas from "@/models/product";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

cloudinary.config({
  cloud_name: "dgveluvei",
  api_key: "672534592576227",
  api_secret: "m_ON69zq5EyIbxSLa0_Q_5_z9Kk",
});
// console.log(cloudinary, "thisisclloudinary");
export async function GET() {
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

export async function POST(request) {
  try {
    mongoose
      .connect(process.env.MONGOURL)
      .then((res) => console.log("db connected"))
      .catch((err) => console.log("error", err));
    const { data } = await request.json();
    console.log(data, "this is args");
    const category = new categorySchemas({
      categoryName: data.categoryName,
      categoryFor: data.categoryFor,
      image: data.image,
    });
    const result = await category.save();
    console.log(result);
    return Response.json({ result });
  } catch (error) {
    // throw new Error("Failed to create category");
    return Response.json({ error: error });
  }
}

export async function DELETE(req) {
  try {
    mongoose
      .connect(process.env.MONGOURL)
      .then((res) => console.log("db connected"))
      .catch((err) => console.log("error", err));
    const url = new URL(req.url);
    let _id = url.searchParams.get("_id");
    if (_id) {
      const category = await categorySchemas.findById(_id);
      console.log(
        category?.image[0]?.imageFile?.public_id,
        category?.image.map((image) => image?.imageFile?.public_id),
        "thisdifadfdf"
      );
      cloudinary.api
        .delete_resources(
          category?.image.map((image) => image?.imageFile?.public_id),
          {
            type: "upload",
            resource_type: "image",
          }
        )
        .then(console.log("deleteed"));
      const result = await categorySchemas.deleteOne({ _id: _id });
      console.log(result, "thisisdata");
      return Response.json({
        status: true,
        msg: "category deleted succesfully",
      });
      return Response.json({ status: true, msg: "image deleted", category });
    }

    const { data } = await req?.json();
    if (data) {
      console.log(data, "thisisdata");
      const { imgId, id, imgUrl } = data;
      const category = await categorySchemas.findByIdAndUpdate(
        id,
        {
          $pull: { image: { _id: imgId } },
        },
        { new: true }
      );
      console.log(category, "thisiscategory");
      if (category) {
        const url = imgUrl;
        const parts = url.split("/");
        const imageName = parts[parts.length - 1]; // Get the last part of the URL
        const imageId = imageName.split(".")[0]; // Remove the file extension
        console.log(imageId);
        cloudinary.api
          .delete_resources([imageId], {
            type: "upload",
            resource_type: "image",
          })
          .then(console.log("deleteed"));
      }
      // consoleƒ.log(category, "deletedcategory");
    }

    console.log(req, "request", _id, data);
    return Response.json({
      status: false,
      msg: "Failed to delete category or image",
    });
  } catch (err) {
    console.error("Failed to delete category:", err);
    return Response.json({ status: false, msg: "Failed to delete category" });
  }
}

export async function PUT(request) {
  console.log("callreached");
  try {
    mongoose
      .connect(process.env.MONGOURL)
      .then((res) => console.log("db connected"))
      .catch((err) => console.log("error", err));
    const { data } = await request.json();
    console.log(data, "this is args");
    const { form, id } = data;
    // return Response.json("status request reached fine");
    const category = await categorySchemas.findByIdAndUpdate(
      id,
      {
        categoryName: form.categoryName,
        categoryFor: form.categoryFor,
        image: form.image,
      },
      { new: true }
    );
    console.log(category);
    return Response.json({ category });
  } catch (error) {
    return Response.json({ error });
  }
}
