import React from "react";
import { useGlobalState } from "../useGlobalState";

export default function Counter() {
  const [state, dispatch] = useGlobalState();

  let name = state.name;
  return (
    <div>
      <h1>Hello Bro, my name is {name}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
    </div>
  );
}
