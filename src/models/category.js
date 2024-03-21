import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryFor: {
    type: String,
    required: true,
  },
  image: [
    {
      imageFile: {
        type: Object,
        required: true,
      },
    },
  ],
});
export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);

// export default mongoose.model("Category", categorySchema);
