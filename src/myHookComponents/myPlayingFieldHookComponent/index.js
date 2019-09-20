import React, { useEffect } from "react";
import { useGlobalState } from "../useGlobalState";
import "./index.css";

import MyCarComp from "../myCarHookComponent";

window.speed = 1;

export default function Counter() {
  const [state, dispatch] = useGlobalState();
  let speed = state.speed * 4;

  //   window.speed = window.speed - 0.03 * 0.1;

  console.log(window.speed);
  return (
    <div
      id="skyBackground"
      style={{
        animation: `SkyAnimation ${speed * 10}s infinite linear `,
        animationFillMode: "forwards"
      }}
    >
      {/* //speed */}
      <div
        id="mountainBackground"
        style={{
          animation: `MountainAnimation ${speed * 6}s infinite linear `,
          animationFillMode: "forwards"
        }}
      >
        <div
          className="App"
          style={{
            animation: `RoadAnimation ${speed}s infinite linear`,
            animationFillMode: "forwards"
          }}
        >
          <MyCarComp></MyCarComp>
        </div>
      </div>
    </div>
  );
}
