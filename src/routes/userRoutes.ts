import express from "express";
import { UserController } from "../controllers/UserController";

// Initialize express Router
const router = express.Router();
// Create an instance of UserController to handle route logic
const userController = new UserController(); // Instance of UserController

// User Routes:

// POST /api/users
// Creates a new user
// Request body should contain user details (email, password, firstName, lastName)
router.post("/", userController.createUser);

// POST /api/users/login
// User login, authenticates the user and returns a JWT token
// Request body should contain email and password
router.post("/login", userController.loginUser);

// GET /api/users
// Retrieves all users from the database
// Returns an array of users (password excluded)
router.get("/", userController.getAllUsers);

// GET /api/users/:id
// Retrieves a specific user by their ID
// :id - MongoDB ObjectId of the user
router.get("/:id", userController.getUserById);

// PUT /api/users/:id
// Updates user profile
// :id - MongoDB ObjectId of the user, request body contains updated fields
router.put("/:id", userController.updateUserProfile);

// DELETE /api/users/:id
// Removes a user from the database
// :id - MongoDB ObjectId of the user to delete
router.delete("/:id", userController.deleteUser);

// POST /api/users/:id/follow
// Follows a user (social networking feature)
// :id - MongoDB ObjectId of the user to follow
router.post("/:id/follow", userController.followUser);

// POST /api/users/:id/unfollow
// Unfollows a user (social networking feature)
// :id - MongoDB ObjectId of the user to unfollow
router.post("/:id/unfollow", userController.unfollowUser);

// Export the router for use in the main application
export default router;
