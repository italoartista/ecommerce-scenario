const orderService = require('../services/orderService');

exports.purchase = async (req, res) => {
  const { userId, items } = req.body;

  try {
    const result = await orderService.purchaseProducts(userId, items);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
