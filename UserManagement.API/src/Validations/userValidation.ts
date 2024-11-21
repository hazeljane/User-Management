<<<<<<< HEAD
//import Joi validation library
import Joi from "joi";

//Define a validation schema for user data 
const userValidationSchema = Joi.object({
	//Email validation
	// -Must be a valid email format
	// -Required field email:
	Joi.string().email().required().messages({
		"string.email":"Please provide a valid email address",
		"any.required": "Email is required",
	}),

	//Password validation
	// -Must contain: uppercase,lowercase, number, special character
	// -Required field
	password: Joi.string().min(8).pattern(new RegExp(
		"^(?=.*[a-z]) (?=.*[A-Z]) (A-Za-z\\d@$!%*?&]{8,}$)"
		)
	)
	.required()
	.messages({
		"string.min":"Password must contain at least 8 characters long",
		"string.pattern.base":"Password must contain at least one uppercase, one lowercase, one number and one special character",
		"any.required": "Password is required", 
	}),

	//First name validation 
	// -Maximum 50 characters
	// -Require field
	firstName: Joi.string().max(50).required().messages({
		"string.max": "First name is required",
	}),

	//Last name validation 
	// -Maximum 50 characters
	// -Require field
	lastName: Joi.string().max(50).required().messages({
		"string.max": "Last name is required",
	}),
});

	//Helper function to validate user data
	// -Takes user data as input
	// -Returns validation result with all errors (abortEarly: false)
	// -Type 'any' is used for userData as it's raw input that needs validation
	export const validateUser = (userData: any) =>{
		return userValidationSchema.validate(userData, {
			abortEarly: false});
	};
=======
// import Joi validation library
import Joi from "joi";

// Define a validation schema for user data
const userValidationSchema = Joi.object({
  // Email validation
  // - Must be a valid email format
  // - Required field email
  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.email": "Please provide a valid email address",
      "any.required": "Email is required",
    }),

  // Password validation
  // - Must contain: uppercase, lowercase, number, special character
  // - Required field
  password: Joi.string()
    .min(8)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    )
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters long",
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      "any.required": "Password is required",
    }),

  // First name validation
  // - Maximum 50 characters
  // - Required field
  firstName: Joi.string()
    .max(50)
    .required()
    .messages({
      "string.max": "First name cannot exceed 50 characters",
      "any.required": "First name is required",
    }),

  // Last name validation
  // - Maximum 50 characters
  // - Required field
  lastName: Joi.string()
    .max(50)
    .required()
    .messages({
      "string.max": "Last name cannot exceed 50 characters",
      "any.required": "Last name is required",
    }),
});

// Helper function to validate user data
// - Takes user data as input
// - Returns validation result with all errors (abortEarly: false)
// - Type 'any' is used for userData as it's raw input that needs validation
export const validateUser = (userData: any) => {
  return userValidationSchema.validate(userData, { abortEarly: false });
};
>>>>>>> aff6777439e372d40520c19c0ea0bb1c517a6726
