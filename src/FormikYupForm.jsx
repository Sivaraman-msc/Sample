import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// 🔒 Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  age: Yup.number().integer().min(18, 'You must be 18+').required('Age is required'),
  password: Yup.string().min(8, 'Minimum 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required')
});

export default function FormikYupForm() {
  const initialValues = {
    name: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: ''
  };

  const onSubmit = (values, { resetForm }) => {
    console.log('Form Data:', values);
    resetForm(); // Reset form after submit
  };

  return (
    <div>
      <h2>Formik + Yup Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="name" placeholder="Name" />
            <ErrorMessage name="name" component="p" style={{ color: 'red' }} />

            <Field name="email" placeholder="Email" type="email" />
            <ErrorMessage name="email" component="p" style={{ color: 'red' }} />

            <Field name="age" placeholder="Age" type="number" />
            <ErrorMessage name="age" component="p" style={{ color: 'red' }} />

            <Field name="password" placeholder="Password" type="password" />
            <ErrorMessage name="password" component="p" style={{ color: 'red' }} />

            <Field name="confirmPassword" placeholder="Confirm Password" type="password" />
            <ErrorMessage name="confirmPassword" component="p" style={{ color: 'red' }} />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
