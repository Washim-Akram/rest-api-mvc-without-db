let users = require("../models/users.model");
const { v4: uuidv4 } = require('uuid');

// Get All Users
const getAllUser = (req, res) => {
    res.status(200).json(users);
};

// Create User
const createUser = (req, res) => {
    const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email
    }
    users.push(newUser);
    res.status(201).json(users);
};

// Update User
const updateUser = (req, res) => {
    const userId = req.params.id;
    const {username, email} = req.body;
   users.filter((user) => user.id === userId).map((selectedUser) => {
    selectedUser.username = username;
    selectedUser.email = email;
   });
   res.status(200).json(users);
};

// Delete User
const deleteUser = (req, res) => {
    const userId = req.params.id;
    users = users.filter((user) => user.id !== userId);
    res.status(200).json(users);
};

module.exports = {getAllUser, createUser, updateUser, deleteUser};