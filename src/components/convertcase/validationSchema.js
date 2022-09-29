import Joi from 'joi';

export const validationSchema = Joi.object({
    convertString: Joi.string().min(2).required(),
});