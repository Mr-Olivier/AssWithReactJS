import React from "react";
import LecturerForm from "./components/LecturerForm";
import StudentForm from "./components/StudentForm";
import DriverForm from "./components/DriverForm";
import BookForm from "./components/BookForm";
import ModuleForm from "./components/ModuleForm";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Registration Forms
      </h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Question 26: Lecturer Registration Form
          </h2>
          <LecturerForm />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Question 27: Student Registration Form
          </h2>
          <StudentForm />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Question 28: Driver Registration Form
          </h2>
          <DriverForm />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Question 29: Book Registration Form
          </h2>
          <BookForm />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Question 30: Module Registration Form
          </h2>
          <ModuleForm />
        </div>
      </div>
    </div>
  );
};

export default App;
