//import express from 'express';
import express, { Request, Response } from "express";
import bodyParser from 'body-parser';

import { User, UserDetail} from './model';
// Initialize Express app
const app = express();
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/users', async (req: Request, res: Response) => {
    const users = await User.findAll({ include: [UserDetail] });
    res.json(users);
  });
  
// Define API endpoint to create new user with admin role
app.post('/users', async (req, res) => {
  try {
    const { name, username, email, address_street, address_suite, address_city, address_zipcode, phone } = req.body;
    console.log(req);
    /*
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });*/

        const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Create new User and UserDetail records
    const user = await User.create({ name, username, email, /*isAdmin: true*/ });
    const userDetail = await UserDetail.create({  id: user.id,address_street, address_suite, address_city, address_zipcode, phone, });

    // Send success response
    res.status(201).json({ user, userDetail });
  } catch (error) {
    // Send error response
    res.status(400).json({ error});
  }
});


//update user

app.put('/users/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, username } = req.body;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      user.name = name;
      user.username = username;
       // throw error if email is being updated
    if (req.body.email) {
        return res.status(400).send('Cannot update email');
      }
      await user.save();
      res.send(user);
    } catch (error:any) {
      res.status(500).send({ message: error.message });
    }
  });
// Define the API endpoints
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    try {
      // Delete the user details
      await UserDetail.destroy({ where: { id: id } });
  
      // Delete the user
      await user.destroy();
  
      res.json({ message: 'User deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
// Start the server
app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });