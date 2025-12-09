const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDatabase = require("./config/connectDatabase");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });
const app = express();
const PORT = process.env.PORT || 3000;

const products = require("./routes/product");
const orders = require("./routes/order");
connectDatabase();
app.use("/api/v1/", products);
app.use("/api/v1/", orders);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
