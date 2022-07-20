import Joi from 'joi';

export const validationSchema = Joi.object({
    // firstName: Joi.string().required().messages({
    //     "string.base": `firstName should be a type of 'text'`,
    //     "string.empty": `firstName cannot be an empty field`,
    //     "any.required": `firstName is a required.`,
    // }),
    encodeData: Joi.string().required(),
});