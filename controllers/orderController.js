exports.getOrders = (req, res, next) => {
  res.json({ message: "Get all orders" });
};

exports.getSingleOrder = (req, res, next) => {
  res.json({ message: `Get order with ID ${req.params.id}` });
};

exports.createOrder = (req, res, next) => {
  res.json({ message: "Create a new order" });
};
