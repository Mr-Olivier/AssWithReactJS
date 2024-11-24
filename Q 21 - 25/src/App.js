import React from "react";
// Import components for each question
import Parent from "./components/Parent"; // Question 21
import Counter from "./components/Counter"; // Question 22
import HeavyCalculation from "./components/HeavyCalculation"; // Question 23
import TodoList from "./components/TodoList"; // Question 24
import LiveTime from "./components/LiveTime"; // Question 25

const App = () => {
  return (
    <div className="space-y-8 p-6">
      {/* Question 21: Create a parent component that passes a prop to a child component. */}
      <section>
        <h2 className="text-xl font-bold mb-4">
          Question 21: Parent and Child Component with React.memo
        </h2>
        <Parent />
      </section>

      {/* Question 22: Build a component that displays a counter and optimizes unrelated items using React.memo. */}
      <section>
        <h2 className="text-xl font-bold mb-4">
          Question 22: Counter with Optimized Unrelated Items
        </h2>
        <Counter />
      </section>

      {/* Question 23: Create a "heavy calculation" component that uses React.memo for optimization. */}
      <section>
        <h2 className="text-xl font-bold mb-4">
          Question 23: Heavy Calculation with React.memo
        </h2>
        <HeavyCalculation />
      </section>

      {/* Question 24: Build a todo list app with a memoized list component. */}
      <section>
        <h2 className="text-xl font-bold mb-4">
          Question 24: Todo List App with Memoized List Component
        </h2>
        <TodoList />
      </section>

      {/* Question 25: Implement a live time updates component with static UI parts optimized. */}
      <section>
        <h2 className="text-xl font-bold mb-4">
          Question 25: Live Time Updates with Optimized Static UI
        </h2>
        <LiveTime />
      </section>
    </div>
  );
};

export default App;
