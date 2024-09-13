module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    // Simulação de validação do token JWT
    const token = authHeader.split(' ')[1];
    if (token === 'valid-token') {
      req.userId = 1; // Exemplo de ID de usuário autenticado
      next();
    } else {
      return res.status(403).json({ message: 'Token inválido' });
    }
  } else {
    res.status(401).json({ message: 'Autenticação necessária' });
  }
};
