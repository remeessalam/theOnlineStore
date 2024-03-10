import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryName: {
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
});
export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);

// export default mongoose.model("Category", categorySchema);
