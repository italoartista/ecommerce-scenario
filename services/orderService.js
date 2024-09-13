      const db = require('../config/database');

exports.purchaseProducts = async (userId, items) => {
  const client = await db.connect();

  try {
    await client.query('BEGIN');

    // Criar o pedido
    const orderRes = await client.query(
      'INSERT INTO orders (user_id, status) VALUES (, ) RETURNING *',
      [userId, 'PENDING']
    );
    const orderId = orderRes.rows[0].id;

    // Iterar sobre os itens do pedido
    for (const item of items) {
      const productRes = await client.query(
        'SELECT stock FROM products WHERE id = ',
        [item.productId]
      );
      const product = productRes.rows[0];

      // Verificar se há estoque suficiente
      if (product.stock < item.quantity) {
        throw new Error(`Estoque insuficiente para o produto com ID ${item.productId}`);
      }

      // Atualizar o estoque do produto
      await client.query(
        'UPDATE products SET stock = stock -  WHERE id = ',
        [item.quantity, item.productId]
      );

      // Inserir item do pedido
      await client.query(
        'INSERT INTO order_items (order_id, product_id, quantity) VALUES (, , )',
        [orderId, item.productId, item.quantity]
      );
    }

    await client.query('COMMIT');

    return { orderId, message: 'Compra realizada com sucesso' };

  } catch (error) {
    await client.query('ROLLBACK');
    throw new Error(`Falha na compra: ${error.message}`);
  } finally {
    client.release();
  }
};
