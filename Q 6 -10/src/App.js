import React from "react";
import ButtonToggle from "./components/ButtonToggle";
import Counter from "./components/Counter";
import HoverColor from "./components/HoverColor";
import UserForm from "./components/UserForm";
import DropdownMenu from "./components/DropdownMenu";

function App() {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <div>
        <h2 className="text-xl font-bold mb-2">
          Question 6: Button Toggle (ON/OFF)
        </h2>
        <ButtonToggle />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">
          Question 7: Counter with Increment and Decrement
        </h2>
        <Counter />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">
          Question 8: Background Color Change on Hover
        </h2>
        <HoverColor />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">
          Question 9: Form to Log User Input
        </h2>
        <UserForm />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">
          Question 10: Dropdown Menu Component
        </h2>
        <DropdownMenu />
      </div>
    </div>
  );
}

export default App;
