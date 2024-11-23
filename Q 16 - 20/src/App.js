import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <MainRoutes />
      </div>
    </Router>
  );
};

export default App;
