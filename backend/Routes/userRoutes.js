import express from 'express';
import {DeleteUser, getAllUser, getSingleUser, updateUser } from '../Controllers/UserController.js';
const Router = express.Router();

//update a new User
Router.put("/update/:id", updateUser);

//delete a new User
Router.delete("/delete/:id", DeleteUser);

//getSingle a new User
Router.get("/User/:id", getSingleUser);

//getAll a new User
Router.get("/allUsers", getAllUser);

export default Router;