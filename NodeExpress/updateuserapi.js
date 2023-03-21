const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'yashdb',
});

// connect to MySQL server
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL server: ' + error.stack);
    return;
  }
  console.log('Connected to MySQL server as id ' + connection.threadId);
});

// display the user data
app.get('/users', (req, res) => {
  const { userId } = req.query;

  // retrieve the user data from the database using the user ID
  connection.query('SELECT * FROM user JOIN user_details ON user.id=user_details.id WHERE user.id=?', [userId], (error, results, fields) => {
    if (error) {
      console.error('Error retrieving user data: ' + error.stack);
      res.status(500).send('Error retrieving user data');
      return;
    }

    // return the user data as a response to the client
    res.status(200).send(results[0]);
  });
});

// update the user data
app.put('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const { name, username, email, address_street, address_suite, address_city, address_zipcode, phone } = req.body;

  // update the user data in the user table
  connection.query('UPDATE user SET name=?, username=?, email=? WHERE id=?', [name, username, email, userId], (error, results, fields) => {
    if (error) {
      console.error('Error updating user data in user table: ' + error.stack);
      res.status(500).send('Error updating user');
      return;
    }

    // update the user details in the user_details table
    connection.query('UPDATE user_details SET address_street=?, address_suite=?, address_city=?, address_zipcode=?, phone=? WHERE id=?', [address_street, address_suite, address_city, address_zipcode, phone, userId], (error, results, fields) => {
      if (error) {
        console.error('Error updating user data in user_details table: ' + error.stack);
        res.status(500).send('Error updating user');
        return;
      }

      // retrieve the updated user data from the database using the user ID
      connection.query('SELECT * FROM user JOIN user_details ON user.id=user_details.id WHERE user.id=?', [userId], (error, results, fields) => {
        if (error) {
          console.error('Error retrieving user data: ' + error.stack);
          res.status(500).send('Error retrieving user data');
          return;
        }

        // return the updated user data as a response to the client
        res.status(200).send(results[0]);
      });
    });
  });
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});