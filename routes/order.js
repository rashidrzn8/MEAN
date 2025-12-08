const express = require("express");
const {
  getOrders,
  getSingleOrder,
  createOrder,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/orders").post(createOrder);
router.route("/orders/:id").get(getSingleOrder);

module.exports = router;
