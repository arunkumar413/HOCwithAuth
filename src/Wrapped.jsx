import { useState } from "react";

export const Wrapped = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter Functional Component</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <button onClick={() => setCount(0)}>Reset counter</button>
    </div>
  );
};
