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

app.get('/add_one', async (req, res) => {
    try {
      const result = await pool.query('INSERT INTO example_tab DEFAULT VALUES');

      if (result.rowCount > 0) {
        // Sukces - zwracamy status 201 (Created) i wiadomość
        res.status(201).json({ message: 'Dodano rekord', success: true });
      } else {
        // Nie dodano żadnego wiersza, ale nie było błędu
        res.status(200).json({ message: 'Nie dodano rekordu', success: false });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Błąd podczas pobierania danych' });
    }
  });

app.listen(port, () => {
  console.log(`Backend uruchomiony na porcie ${port}`);
});
