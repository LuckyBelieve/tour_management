import express from 'express';
import {DeleteUser, getAllUser, getSingleUser, updateUser } from '../Controllers/UserController.js';
import { verifyAdmin, verifyUser } from '../middleware/authMiddleware.js';
const Router = express.Router();

//update a User
Router.put("/update/:id",verifyUser ,updateUser);

//delete a User
Router.delete("/delete/:id",verifyUser,DeleteUser);

//getSingle a User
Router.get("/User/:id",verifyUser ,getSingleUser);

//getAll a User
Router.get("/allUsers",verifyAdmin ,getAllUser);

export default Router;