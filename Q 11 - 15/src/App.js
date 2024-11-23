import React from "react";
import LoginForm from "./components/LoginForm";
import ControlledForm from "./components/ControlledForm";
import ValidationForm from "./components/ValidationForm";
import MultiStepForm from "./components/MultiStepForm";
import CheckboxForm from "./components/CheckboxForm";

function App() {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-primary">
        React Forms Showcase
      </h1>

      <section>
        <h2 className="text-2xl font-bold text-secondary">
          Question 11: Login Form
        </h2>
        <LoginForm />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-secondary">
          Question 12: Controlled Form
        </h2>
        <ControlledForm />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-secondary">
          Question 13: Validation Form
        </h2>
        <ValidationForm />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-secondary">
          Question 14: Multi-Step Form
        </h2>
        <MultiStepForm />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-secondary">
          Question 15: Checkbox Form
        </h2>
        <CheckboxForm />
      </section>
    </div>
  );
}

export default App;
