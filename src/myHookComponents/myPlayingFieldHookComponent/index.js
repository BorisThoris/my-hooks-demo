import React, { useEffect } from "react";
import { useGlobalState } from "../useGlobalState";
import "./index.css";

import MyCarComp from "../myCarHookComponent";

window.speed = 1;

export default function Counter() {
  const [state, dispatch] = useGlobalState();
  let speed = state.speed * 4;

  console.log(true);
  return (
    <div>
      <div
        id="skyBackground"
        style={{
          animation: `SkyAnimation  infinite linear `,
          animationDuration: `${speed * 10}s`,
          animationFillMode: "forwards"
        }}
      >
        {/* //speed */}
        <div
          id="mountainBackground"
          style={{
            animation: `MountainAnimation  infinite linear `,
            animationFillMode: "forwards",
            animationDuration: ` ${speed * 6}s`
          }}
        >
          <div
            className="App2"
            style={{
              animation: `RoadAnimation  infinite linear`,
              animationFillMode: "forwards",
              animationDuration: ` ${speed}s`
            }}
          ></div>
        </div>
      </div>

      <MyCarComp></MyCarComp>
    </div>
  );
}
