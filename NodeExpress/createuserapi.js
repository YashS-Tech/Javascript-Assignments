const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL connection 
const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'yashdb'
});

// Create a new user
app.post("/users", (req, res) => {
  const { name, username, email, street, suite, city, zipcode, phone } = req.body;

  // Insert the user into the database
  pool.query('INSERT INTO user (name, username, email) VALUES (?, ?, ?)', [name, username, email], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Failed to create user' });
    } else {
      const user_id = result.insertId;

      // Insert the user details into the database
      pool.query('INSERT INTO user_details (id, address_street, address_suite, address_city, address_zipcode, phone) VALUES (?, ?, ?, ?, ?, ?)', [user_id,street, suite, city, zipcode, phone], (err, result) => {
        if (err) {
          res.status(500).json({ error: 'Failed to create user details' });
        } else {
          res.json({ message: 'User created successfully' });
        }
      });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});