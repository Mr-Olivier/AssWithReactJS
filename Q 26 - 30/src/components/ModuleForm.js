import React from "react";
import { useForm } from "react-hook-form";

const ModuleForm = () => {
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
      <h2 className="text-2xl font-bold mb-4">Module Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("moduleName", { required: "Module name is required" })}
          placeholder="Module Name"
          className="input input-bordered w-full"
        />
        {errors.moduleName && (
          <p className="text-red-500">{errors.moduleName.message}</p>
        )}

        <input
          {...register("moduleCode", { required: "Module code is required" })}
          placeholder="Module Code"
          className="input input-bordered w-full"
        />
        {errors.moduleCode && (
          <p className="text-red-500">{errors.moduleCode.message}</p>
        )}

        <textarea
          {...register("description")}
          placeholder="Description"
          className="textarea textarea-bordered w-full"
        ></textarea>

        <input
          {...register("credits", {
            required: "Credits are required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Credits must be a numeric value",
            },
          })}
          placeholder="Credits"
          className="input input-bordered w-full"
        />
        {errors.credits && (
          <p className="text-red-500">{errors.credits.message}</p>
        )}

        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default ModuleForm;
