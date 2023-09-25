const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", true);

exports.dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database is connected and running successfully");
  } catch (error) {
    console.error(error.message);
  }
};

