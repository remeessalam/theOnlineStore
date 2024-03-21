import categorySchemas from "@/models/category";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";

cloudinary.config({
  cloud_name: "dgveluvei",
  api_key: "672534592576227",
  api_secret: "m_ON69zq5EyIbxSLa0_Q_5_z9Kk",
});

export const POST = async (request) => {
  try {
    const { msg } = await request.json();
    console.log(msg, "request reached");
    return Response.json({ status: "req and res done" });
  } catch (err) {
    throw new Error("failed to delete");
  }
};

export async function DELETE(req) {
  try {
    mongoose
      .connect(process.env.MONGOURL)
      .then((res) => console.log("db connected"))
      .catch((err) => console.log("error", err));

    const { data } = await req?.json();
    if (data) {
      console.log(data, "thisisdata");
      const { imageFile, id } = data;
      console.log(imageFile, id, "thisisimageandid");
      //   return Response.json({ msg: "request and response done" });
      const category = await categorySchemas.findByIdAndUpdate(
        id,
        {
          $pull: { image: { _id: imageFile?.id } },
        },
        { new: true }
      );
      console.log(category, "thisiscategory");
      if (category) {
        // const url = imgUrl;
        // const parts = url.split("/");
        // const imageName = parts[parts.length - 1]; // Get the last part of the URL
        // const imageId = imageName.split(".")[0]; // Remove the file extension
        // console.log(imageId);
        cloudinary.api
          .delete_resources([imageFile?.imageFile?.public_id], {
            type: "upload",
            resource_type: "image",
          })
          .then(console.log("deleteed"));
      }
      // consoleƒ.log(category, "deletedcategory");
      return Response.json({ status: true, msg: "image deleted", category });
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
