import Joi from 'joi';

export const validationSchema = Joi.object({
    firstName: Joi.string().required(),
    age: Joi.number().required(),
});