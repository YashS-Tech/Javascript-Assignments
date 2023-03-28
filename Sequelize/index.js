const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
const { User, UserDetails } = require('./models');

app.post('/users', async (req, res) => {
    try {
      const { name, username, email, address_street, address_suite, address_city, address_zipcode, phone } = req.body;
        console.log(req);
      const user = await User.create({ name, username, email });
      
      const userDetails = await UserDetails.create({ id: user.id, address_street, address_suite, address_city, address_zipcode, phone });
  
      res.json({ message: 'User created successfully', user, userDetails });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating user' });
    }
  });
  
  
 app.get('/users', async (req, res) => {
    try {
      const users = await User.findAll({ include: [UserDetails] });
  
      res.json({ users });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error getting users' });
    }
  });
  
 //update user;
 app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, username, email, address_street, address_suite, address_city, address_zipcode, phone } = req.body;

  try {
    await User.update(
      { name, username, email },
      { where: { id } }
    );

    await UserDetails.update(
      { address_street, address_suite, address_city, address_zipcode, phone },
      { where: { id } }
    );

    const updatedUser = await User.findOne({
      where: { id },
      include: UserDetails
    });

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating user' });
  }
});
  //Delete  a user 
  app.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      await UserDetails.destroy({ where: { id: userId } });
      await User.destroy({ where: { id: userId } });
      res.send(`User with ID ${userId} and their details have been deleted.`);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while deleting the user.');
    }
  });
app.listen(3000, () => console.log('Server started on port 3000'));

