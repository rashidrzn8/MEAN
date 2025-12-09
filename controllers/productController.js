const producrtModel = require("../model/productModel");

//get all products api - api/v1/products
exports.getProducts = async (req, res, next) => {
  const products = await producrtModel.find({});

  res.json({
    success: true,
    products,
  });
};

//get single product - api/v1/products/:id
exports.getSingleProduct = async (req, res, next) => {
  const product = await producrtModel.findById(req.params.id);
  res.json({
    success: true,
    product,
  });
};
