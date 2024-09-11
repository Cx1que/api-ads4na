import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://database_caique_user:cQRzYhdh0G59gsDnmTQmrHIvH9k5izhP@dpg-crh1pog8fa8c738r2jc0-a.oregon-postgres.render.com/database_caique';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;