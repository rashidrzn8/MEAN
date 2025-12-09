const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((con) => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.error("Database connection failed:", err);
    });
};

module.exports = connectDatabase;
