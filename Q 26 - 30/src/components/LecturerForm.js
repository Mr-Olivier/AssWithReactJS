import React from "react";
import { useForm } from "react-hook-form";

const LecturerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Lecturer Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          className="input input-bordered w-full"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
              message: "Invalid email format",
            },
          })}
          placeholder="Email"
          className="input input-bordered w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          {...register("subject", { required: "Subject is required" })}
          placeholder="Subject"
          className="input input-bordered w-full"
        />
        {errors.subject && (
          <p className="text-red-500">{errors.subject.message}</p>
        )}

        <input
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Only numeric values are allowed",
            },
          })}
          placeholder="Phone Number"
          className="input input-bordered w-full"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default LecturerForm;
