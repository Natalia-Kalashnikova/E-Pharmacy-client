import * as yup from 'yup';

const cartFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required.')
    .min(2, 'Name must be at least 2 characters.')
    .max(50, 'Name must be less than 50 characters.'),
  email: yup
    .string()
    .required('Email is required.')
    .email('Please enter a valid email address.'),
  phone: yup
    .string()
    .required('Phone number is required.')
    .matches(
      /^[\d\s-]{7,15}$/,
      'Please enter a valid phone number (e.g., 123 456 7890 or 123-456-7890).'
    ),
  address: yup
    .string()
    .required('Address is required.')
    .min(5, 'Address must be at least 5 characters.')
    .max(100, 'Address must be less than 100 characters.'),
  paymentMethod: yup.string().required('Payment method is required.'),
});

export default cartFormSchema;
