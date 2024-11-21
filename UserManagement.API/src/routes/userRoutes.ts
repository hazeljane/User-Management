import express from "express";
import { UserController } from "../controllers/UserController";

//Initialize express Router
const router = express.Router();
//Create instance of UserController to handle Route logic
const UserController = new UserController();

//User Routes:

//POST /api/users
//Creates a new user
//Request body should contain user details 
(email, password, firstName, lastName)router.post("/",userController.createUser);

//GET /api/users
//Retrieves all users from the database
//Returns arrray of users (password excluded)
router.get("/", userController.getAllUsers);

//GET /api/users/:id
//Retrieves a specific user by their ID
//:id -MongoDB ObjectId of the user
router.get(":id", userController.updateUser);

//DELETE /api/users/:id
//Removes a user from the database
//:id -MongoDB ObjectId of the user to delete
router.delete(":id", userController.deleteUser);

//Export the router for use in main application
export default router;