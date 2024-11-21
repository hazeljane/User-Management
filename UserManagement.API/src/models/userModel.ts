<<<<<<< HEAD
import mongoose, { Schema } from "mongoose";
import {IUser} from "../ interfaces/userInterface";

//Define the schema for the User model
//Schema specifies the structure and validation rules for User documents in MongoDB
export const userSchema = new Schema({
//User email field - must be unique, required, and max 100 characters
	email: {type:String,length:100, required:true},
//Password field - required and max 50 characters
	password: {type:String, length:50, required:true},
//First name field - required and max 50 characters 
	firstName: {type:String,length:50, required:true},
//Last name field - required and max 50 characters
	lastName: {type: String,length:50, required:true},
//Enable automatic timestamp fields (createdAt and UpdatedAt)
	{ timestamps: true}
);
//Create and export the User model
export const User = mongoose.model<IUser>("User", userSchema);
=======
 import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";   // For password hashing
import { IUser } from "../interfaces/userInterface";  // Assuming you have an IUser interface

// Define the schema for the User model
// Schema specifies the structure and validation rules for User documents in MongoDB
export const userSchema: Schema = new Schema(
  {
    // User email field - must be unique, required, and max 100 characters
    email: { type: String, required: true, unique: true, maxlength: 100 },
    
    // Password field - required and max 50 characters
    password: { type: String, required: true, maxlength: 50 },
    
    // First name field - required and max 50 characters
    firstName: { type: String, required: true, maxlength: 50 },
    
    // Last name field - required and max 50 characters
    lastName: { type: String, required: true, maxlength: 50 },

    // Optional fields (could be useful in a social media application)
    dateOfBirth: { type: Date },
    contactNumber: { type: String },
    following: { type: [String], default: [] },  // Array of user IDs this user is following

    // Enable automatic timestamp fields (createdAt and updatedAt)
  },
  { timestamps: true }
);

// Pre-save hook to hash the password before saving it
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();  // Only hash the password if it is new or modified

  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Instance method to compare entered password with stored hashed password
userSchema.methods.isValidPassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

// Create and export the User model
export const User = mongoose.model<IUser>("User", userSchema);
>>>>>>> aff6777439e372d40520c19c0ea0bb1c517a6726
