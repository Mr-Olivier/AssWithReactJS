import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-primary">Product Details</h2>
      <p className="mt-2 text-gray-700">Viewing details for product ID: {id}</p>
    </div>
  );
};

export default ProductDetails;
