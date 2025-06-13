import React from 'react'
import { useForm } from 'react-hook-form';

export default function HookForm() {
     const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} placeholder="First Name" />
      {errors.firstName && <p>This field is required</p>}

      <input {...register("age", { required: true, min: 18 })} placeholder="Age" type="number" />
      {errors.age && <p>Minimum age is 18</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
