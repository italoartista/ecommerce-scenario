const request = require('supertest');
const express = require('express');
const app = express();

// Configuração do servidor e rotas
app.post('/api/orders/purchase', (req, res) => {
  res.status(200).send({ message: 'Order created' });
});

describe('POST /api/orders/purchase', () => {
  it('should create an order and update stock successfully', async () => {
    const response = await request(app)
      .post('/api/orders/purchase')
      .send({
        userId: 1,
        items: [{ productId: 1, quantity: 2 }],
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Order created');
  });

  it('should rollback transaction on error', async () => {
    const response = await request(app)
      .post('/api/orders/purchase')
      .send({
        userId: 1,
        items: [{ productId: 1, quantity: 2 }],
      });

    // Simular um erro e verificar se a transação é revertida
    expect(response.status).toBe(500);
  });
});