import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    payment: "",
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="card bg-base-100 shadow-md p-6">
      {step === 1 && (
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>
      )}
      {step === 2 && (
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>
      )}
      {step === 3 && (
        <div className="form-control">
          <label className="label">
            <span className="label-text">Payment Info</span>
          </label>
          <input
            type="text"
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>
      )}
      <div className="flex justify-between mt-4">
        {step > 1 && (
          <button onClick={handlePrev} className="btn btn-secondary">
            Back
          </button>
        )}
        {step < 3 ? (
          <button onClick={handleNext} className="btn btn-primary">
            Next
          </button>
        ) : (
          <button className="btn btn-success">Submit</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
