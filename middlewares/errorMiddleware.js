const logger = require('../config/logger');

const errorMiddleware = (err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({ error: 'Internal server error' });
};

module.exports = errorMiddleware;
