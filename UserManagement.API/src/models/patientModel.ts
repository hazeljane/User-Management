<<<<<<< HEAD
//import mongoose and Schema class from mongoose package
import mongoose, { Schema }
from "mongoose";
import {IPatient} from "../ interfaces/patientInterface";

//Define a schema for Patient documents in MongoDB
export const patientSchema = new Schema({
	//Basic patient information 
	firstName: {type:String,
length:50, required:true},
//Required field, max 50 chars 
lastName: {type: String,
length:50, required:true},
//Required field, max 50 chars

//Patient's address details (all optional)
street1:{type:String,length:50},
//Primary street address
street2:{type:String,length:50}, 
//Secondary dtreet address (apt, until, etc.)
city:{type:String, length:50},
//City name
state:{type:String, length:50},
//State/Province
postalCode: {type:String, length:50}
//ZIP/Postal code

//Additional patient details
dateOfBirth:{type:Date},
//Patients birth date
contactNumber:{type:String,length:50},
//Phone number
},
//Add automatic timestamp fields (createdAt, updateAt)
{timestamps:true}
);

//Create and export the Patient model
//This will create a 'patients' collection in MongoDB
export const Patient = mongoose.model<IPatient>("Patients", patientSchema);
=======
import mongoose, { Schema, Document } from "mongoose";
import { IPatient } from "../interfaces/patientInterface";  // Assuming the interface is defined

// Define a schema for Patient documents in MongoDB
const patientSchema: Schema = new Schema({
  // Basic patient information
  firstName: { type: String, maxlength: 50, required: true },
  // Required field, max 50 chars
  lastName: { type: String, maxlength: 50, required: true },
  // Required field, max 50 chars

  // Patient's address details (all optional)
  street1: { type: String, maxlength: 50 }, // Primary street address
  street2: { type: String, maxlength: 50 }, // Secondary address (apt, unit, etc.)
  city: { type: String, maxlength: 50 }, // City name
  state: { type: String, maxlength: 50 }, // State/Province
  postalCode: { type: String, maxlength: 50 }, // ZIP/Postal code

  // Additional patient details
  dateOfBirth: { type: Date }, // Patient's birth date
  contactNumber: { type: String, maxlength: 50 }, // Phone number
},
// Add automatic timestamp fields (createdAt, updatedAt)
{
  timestamps: true
});

// Create and export the Patient model
// This will create a 'patients' collection in MongoDB
export const Patient = mongoose.model<IPatient>("Patient", patientSchema);
>>>>>>> aff6777439e372d40520c19c0ea0bb1c517a6726
