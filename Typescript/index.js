"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express from 'express';
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const model_1 = require("./model");
// Initialize Express app
const app = (0, express_1.default)();
//app.use(bodyParser.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield model_1.User.findAll({ include: [model_1.UserDetail] });
    res.json(users);
}));
// Define API endpoint to create new user with admin role
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const user = yield model_1.User.create({ name, username, email, /*isAdmin: true*/ });
        const userDetail = yield model_1.UserDetail.create({ id: user.id, address_street, address_suite, address_city, address_zipcode, phone, });
        // Send success response
        res.status(201).json({ user, userDetail });
    }
    catch (error) {
        // Send error response
        res.status(400).json({ error });
    }
}));
//update user
app.put('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, username } = req.body;
        const user = yield model_1.User.findByPk(id);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        user.name = name;
        user.username = username;
        // throw error if email is being updated
        if (req.body.email) {
            return res.status(400).send('Cannot update email');
        }
        yield user.save();
        res.send(user);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}));
// Define the API endpoints
app.delete('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield model_1.User.findByPk(id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    try {
        // Delete the user details
        yield model_1.UserDetail.destroy({ where: { id: id } });
        // Delete the user
        yield user.destroy();
        res.json({ message: 'User deleted' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}));
// Start the server
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
