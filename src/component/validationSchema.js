import * as yup from 'yup';

export const validationSchema = yup.object({
    encodeData: yup
        .string('Enter your Encode Data')
        .required('Encode Data is required'),
});