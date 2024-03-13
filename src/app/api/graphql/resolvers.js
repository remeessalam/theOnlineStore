import categorySchemas from "@/models/category";
import productSchemas from "@/models/product";
import mongoose from "mongoose";
const resolvers = {
  Query: {
    products: async () => {
      try {
        mongoose
          .connect(process.env.MONGOURL)
          .then((res) => console.log("db connected"))
          .catch((err) => console.log("error", err));
        const products = await productSchemas.find();
        return products;
      } catch (error) {
        throw new Error("Failed to fetch products");
      }
    },
    categories: async () => {
      try {
        mongoose
          .connect(process.env.MONGOURL)
          .then((res) => console.log("db connected"))
          .catch((err) => console.log("error", err));
        const categories = await categorySchemas.find();
        return categories;
      } catch (error) {
        throw new Error("Failed to fetch categories");
      }
    },
  },
  Mutation: {
    createProduct: async (args, req) => {
      try {
        mongoose
          .connect(process.env.MONGOURL)
          .then((res) => console.log("db connected"))
          .catch((err) => console.log("error", err));

        console.log(req, "thisisreqpageno");
        // return "hai";
        const product = new productSchemas({
          productName: req.productInput.productName,
          price: req.productInput.price,
          sizeChart: req.productInput.sizeChart,
          stockCount: req.productInput.stockCount,
          productDetails: req.productInput.productDetails,
          productDescription: req.productInput.productDescription,
          image: req.productInput.image,
          categoryOf:  mongoose.Types.ObjectId.createFromHexString(req.productInput.categoryOf),
        });
        const result = await product.save();
        return result;
      } catch (error) {
        console.log(error, "thisiserror");
        throw new Error("Failed to create product");
      }
    },
    createCategory: async (args, req) => {
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
    },
  },
};

export default resolvers;
