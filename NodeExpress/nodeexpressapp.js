const express = require('express');
const mysql = require('mysql');

const app = express();

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'yashdb'
});

// Connect to MySQL
connection.connect();

// GET request for list of users without address
app.get("/users", (req, res) => {
  connection.query('SELECT id, name, username, email FROM user', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get("/",(req,res)=>
{
    res.send("hello world");
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});