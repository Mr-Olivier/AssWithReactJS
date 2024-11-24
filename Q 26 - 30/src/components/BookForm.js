import React from "react";
import { useForm } from "react-hook-form";

const BookForm = () => {
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
      <h2 className="text-2xl font-bold mb-4">Book Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("bookTitle", { required: "Book title is required" })}
          placeholder="Book Title"
          className="input input-bordered w-full"
        />
        {errors.bookTitle && (
          <p className="text-red-500">{errors.bookTitle.message}</p>
        )}

        <input
          {...register("author", { required: "Author is required" })}
          placeholder="Author"
          className="input input-bordered w-full"
        />
        {errors.author && (
          <p className="text-red-500">{errors.author.message}</p>
        )}

        <input
          {...register("isbn", { required: "ISBN is required" })}
          placeholder="ISBN"
          className="input input-bordered w-full"
        />
        {errors.isbn && <p className="text-red-500">{errors.isbn.message}</p>}

        <input
          {...register("publishedYear", {
            required: "Published year is required",
            pattern: {
              value: /^\d{4}$/,
              message: "Published year must be a 4-digit number",
            },
          })}
          placeholder="Published Year"
          className="input input-bordered w-full"
        />
        {errors.publishedYear && (
          <p className="text-red-500">{errors.publishedYear.message}</p>
        )}

        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default BookForm;
