import pool from "../config/database";

const createProductsTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price numeric NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "products" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

createProductsTable().then(() => process.exit(0));
