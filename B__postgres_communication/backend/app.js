const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Konfiguracja połączenia z bazą (adres hosta to nazwa serwisu w docker-compose)
const pool = new Pool({
  host: 'postgres',
  user: 'postgres',
  password: 'example', // ustawione w docker-compose
  database: 'postgres',
  port: 5432,
});

app.get('/records', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM example_tab ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Błąd podczas pobierania danych' });
  }
});

app.listen(port, () => {
  console.log(`Backend uruchomiony na porcie ${port}`);
});
