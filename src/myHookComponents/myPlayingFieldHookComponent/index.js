import React, { useEffect } from "react";
import { useGlobalState } from "../useGlobalState";
import "./index.css";

import MyCarComp from "../myCarHookComponent";

window.speed = 1;

export default function Counter() {
  const [state, dispatch] = useGlobalState();
  let speed = state.speed * 10;

  window.speed = window.speed - 0.03 * 4;

  console.log(window.speed);
  return (
    <div id="skyBackground">
      {/* //speed */}
      <div
        className="App"
        style={{
          animation: `RoadAnimation ${speed}s infinite linear`,
          animationFillMode: "forwards"
        }}
      >
        <div id="mountainbbackground">
          <MyCarComp></MyCarComp>
        </div>
      </div>
    </div>
  );
}
