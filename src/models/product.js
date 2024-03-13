import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sizeChart: [
    {
      size: {
        type: String,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
      },
    },
  ],
  stockCount: {
    type: Number,
    required: true,
  },
  productDetails: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  image: [
    {
      url: {
        type: String,
        required: true,
      },
    },
  ],
  categoryOf: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

// export default mongoose.model("Products", productSchema);
export default mongoose.models.Products ||
  mongoose.model("Products", productSchema);
