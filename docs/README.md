# E-commerce com Transações e Rollback

Este projeto implementa um fluxo de compra em um e-commerce onde as transações são controladas e, em caso de erro, ocorre um rollback para garantir a consistência dos dados.

## Funcionalidades

- Compra de produtos com controle de estoque.
- Controle transacional: rollback em caso de erro.
- Autenticação simples via token JWT.
- Logs com Winston.
- Middleware para tratamento de erros.
- Testes automatizados com Jest.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:
   ```
   cd ecommerce-transactions
   ```

3. Instale as dependências:
   ```
   npm install
   ```

4. Configure as variáveis de ambiente no arquivo `.env`:
   ```
   cp .env.example .env
   ```

5. Execute as migrações (se houver):
   ```
   npm run migrate
   ```

6. Inicie o servidor:
   ```
   npm start
   ```

## Testes

Para rodar os testes, execute:

```
npm test
```

## CI/CD

O projeto está configurado para CI/CD com GitHub Actions. O pipeline executa os testes automaticamente em cada push para a branch principal.
