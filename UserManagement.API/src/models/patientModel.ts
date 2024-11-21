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
