const express = require('express');
const pg = require('pg');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

const pool = new pg.Pool({
  user: 'postgres', // Replace with your database credentials
  host: 'localhost',
  database: 'bookstore_management_db',
  password: '048124',
  port: 5432, // Default PostgreSQL port
});

app.get('/top-authors', async (req, res) => {
  const authorName = req.query.author_name;
  
  const baseQuery = `
    SELECT authors.name, SUM(item_price * quantity) AS total_revenue
    FROM sale_items
    JOIN books ON sale_items.book_id = books.id
    JOIN authors ON books.author_id = authors.id
    GROUP BY authors.name
    ORDER BY total_revenue DESC
    LIMIT 10;
  `;

  if (authorName) {
    const text = baseQuery + ' WHERE authors.name = $1;';
    const values = [authorName];
    try {
      const client = await pool.connect();
      const result = await client.query(text, values);
      res.json(result.rows);
      client.release();
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    try {
      const client = await pool.connect();
      const result = await client.query(baseQuery);
      res.json(result.rows);
      client.release();
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    }
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
