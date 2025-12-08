exports.getProducts = (req, res, next) => {
  const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 150 },
    { id: 3, name: "Product C", price: 200 },
  ];
  res.json({ message: "Get all products" });
};

exports.getSingleProduct = (req, res, next) => {
  res.json({ message: `Get product with ID ${req.params.id}` });
};
