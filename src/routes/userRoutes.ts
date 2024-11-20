import express from "express";
import { UserController } from "../controllers/UserController";

// Initialize express Router
const router = express.Router();
// Create an instance of UserController to handle route logic
const userController = new UserController(); // Changed to 'userController' for clarity

// User Routes:

// POST /api/users
// Creates a new user
// Request body should contain user details (email, password, firstName, lastName)
router.post("/", userController.createUser);

// GET /api/users
// Retrieves all users from the database
// Returns an array of users (password excluded)
router.get("/", userController.getAllUsers);

// GET /api/users/:id
// Retrieves a specific user by their ID
// :id - MongoDB ObjectId of the user
router.get("/:id", userController.getUserById);  // Updated to getUserById

// DELETE /api/users/:id
// Removes a user from the database
// :id - MongoDB ObjectId of the user to delete
router.delete("/:id", userController.deleteUser); // Corrected path

// Export the router for use in the main application
export default router;
