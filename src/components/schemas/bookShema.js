import * as yup from 'yup';

const bookShema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Maximum name length is 32 symbols')
    .required('Name is required'),
  email: yup
    .string()
    
    .matches(
      /^[^@]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/,
      'Invalid email format'
    )
    .required('Email is required'),
  date: yup
    .date()
    .required('Booking date is required')
    .nullable(),
});

export default bookShema;