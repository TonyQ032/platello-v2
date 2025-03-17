import { useState } from "react";
import logo from "/logo.png";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center align-center">
        <img
          src={logo}
          className="max-h-40 dark:brightness(10) dark:invert-100"
          alt="Platello"
        />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
