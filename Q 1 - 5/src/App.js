import React from "react";

import Welcome from "./components/Welcome";
import CurrentDate from "./components/CurrentDate";
import ParentComponent from "./components/ParentComponent";
import Button from "./components/Button";
import ProfileCard from "./components/ProfileCard";
import ListComponent from "./components/ListComponent";

function App() {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* Question 1 */}
      <div>
        <h2 className="text-xl font-bold mb-2">
          Question 1: Welcome Message and Current Date
        </h2>
        <Welcome />
        <CurrentDate />
      </div>

      {/* Question 2 */}
      <div>
        <h2 className="text-xl font-bold mb-2">
          Question 2: Parent and Child Components for Hobbies
        </h2>
        <ParentComponent />
      </div>

      {/* Question 3 */}
      <div>
        <h2 className="text-xl font-bold mb-2">
          Question 3: Reusable Button Component
        </h2>
        <Button text="Click Me" color="primary" />
        <Button text="Submit" color="success" />
      </div>

      {/* Question 4 */}
      <div>
        <h2 className="text-xl font-bold mb-2">
          Question 4: Profile Card Component
        </h2>
        <ProfileCard name="Jane Doe" age={25} email="jane.doe@gmail.com" />
      </div>

      {/* Question 5 */}
      <div>
        <h2 className="text-xl font-bold mb-2">
          Question 5: Display List Using .map()
        </h2>
        <ListComponent />
      </div>
    </div>
  );
}

export default App;
