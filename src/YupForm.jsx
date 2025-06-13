import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email('Invalid email').required("Email is required"),
  age: yup.number().integer().min(18, "You must be 18+").required('Age is required'),
  password: yup.string().min(8, "Minimum 8 characters").required("Password required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords does not match')
    .required('Confirm password is required')
}).required();

export default function YupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Name" />
        <p>{errors.name?.message}</p>

        <input {...register('email')} placeholder="Email" />
        <p>{errors.email?.message}</p>

        <input {...register('age')} placeholder="Age" type="number" />
        <p>{errors.age?.message}</p>

        <input {...register('password')} placeholder="Password" type="password" />
        <p>{errors.password?.message}</p>

        <input {...register('confirmPassword')} placeholder="Confirm Password" type="password" />
        <p>{errors.confirmPassword?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
