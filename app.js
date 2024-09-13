const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./config/logger');
const orderRoutes = require('./routes/orderRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

dotenv.config();

const app = express();
app.use(express.json());

app.use(helmet());
app.use(cors());

app.use('/api/orders', orderRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  logger.info(`Servidor rodando na porta ${PORT}`);
});
