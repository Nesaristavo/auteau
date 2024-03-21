import { useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleMouseWheel = (e) => {
    setCount(count + e.deltaY);
  };

  return (
    <div onMouseWheel={handleMouseWheel}>
      <h1>Count: {count}</h1>
    </div>
  );
};
