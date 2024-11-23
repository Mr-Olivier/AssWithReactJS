import React from "react";
import { useForm } from "react-hook-form";

const ValidationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card bg-base-100 shadow-md p-6"
    >
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="input input-bordered"
        />
        {errors.email && (
          <p className="text-error mt-2">{errors.email.message}</p>
        )}
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="input input-bordered"
        />
        {errors.password && (
          <p className="text-error mt-2">{errors.password.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Submit
      </button>
    </form>
  );
};

export default ValidationForm;
