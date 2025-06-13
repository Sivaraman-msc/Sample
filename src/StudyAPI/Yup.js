import * as yup from 'yup'

export const SignUpForm = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Minimum 8 characters required').required('Password is required'),
  role: yup.string().oneOf(['Developer', 'Tester', 'ProjectManager'], 'Invalid role').required('Role is required'),
  profile: yup.mixed().required('Profile is required')
});