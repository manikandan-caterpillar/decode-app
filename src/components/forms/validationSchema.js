import Joi from 'joi';

export const validationSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
});