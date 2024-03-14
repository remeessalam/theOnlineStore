const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: mongoose.Decimal128,
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

// export default mongoose.modƒel("Products", productSchema);

export default mongoose.models.Products ||
  mongoose.model("Products", productSchema);
