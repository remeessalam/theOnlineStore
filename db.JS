dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("db is conneted");
  } catch (err) {
    console.log(err);
  }
};
connectDB();
