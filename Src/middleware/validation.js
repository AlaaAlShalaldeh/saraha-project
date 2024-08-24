import joi from 'joi'
const dataMethods = ['body', 'query', 'params'];
export const generalFields={
  email:joi.string().email().required(),
  password:joi.string().min(6).required(),
}
const validation = (schema) => {
  return (req, res, next) => {
    const validationArray = [];

    dataMethods.forEach((key) => {
      if (schema[key]) {  // Check if the schema for the key exists
        const validationResult = schema[key].validate(req[key], { abortEarly: false });
        if (validationResult.error) {
          validationArray.push(...validationResult.error.details);
        }
      }
    });

    if (validationArray.length > 0) {
      return res.status(400).json({ message: "Validation error", error: validationArray });
    } else {
      next();
    }
  };
};

export default validation;
