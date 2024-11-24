import React from "react";
import { useForm } from "react-hook-form";

const DriverForm = () => {
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
      <h2 className="text-2xl font-bold mb-4">Driver Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          className="input input-bordered w-full"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          {...register("licenseNumber", {
            required: "License number is required",
          })}
          placeholder="License Number"
          className="input input-bordered w-full"
        />
        {errors.licenseNumber && (
          <p className="text-red-500">{errors.licenseNumber.message}</p>
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

        <select
          {...register("vehicleType", { required: "Vehicle type is required" })}
          className="select select-bordered w-full"
        >
          <option value="">Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="truck">Truck</option>
          <option value="motorcycle">Motorcycle</option>
        </select>
        {errors.vehicleType && (
          <p className="text-red-500">{errors.vehicleType.message}</p>
        )}

        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default DriverForm;
