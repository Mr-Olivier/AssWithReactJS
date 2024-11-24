import React from "react";
import { useForm } from "react-hook-form";

const StudentForm = () => {
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
      <h2 className="text-2xl font-bold mb-4">Student Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("firstName", { required: "First name is required" })}
          placeholder="First Name"
          className="input input-bordered w-full"
        />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}

        <input
          {...register("lastName", { required: "Last name is required" })}
          placeholder="Last Name"
          className="input input-bordered w-full"
        />
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}

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
          {...register("studentId", {
            required: "Student ID is required",
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Only alphanumeric values are allowed",
            },
          })}
          placeholder="Student ID"
          className="input input-bordered w-full"
        />
        {errors.studentId && (
          <p className="text-red-500">{errors.studentId.message}</p>
        )}

        <input
          type="date"
          {...register("dob", { required: "Date of birth is required" })}
          className="input input-bordered w-full"
        />
        {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}

        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
