import React from "react";

import { Provider } from "./myHookComponents/useGlobalState";

import MyGameField from "./myHookComponents/myPlayingFieldHookComponent";

import "./App.css";
// import Counter from "./Counter";

function reducer(state, action) {
  let tempSpeed = state.speed;
  let tempGasPedalDown = state.gasPedalDown;
  let tempBrakePedalDown = state.brakePedalDown;

  switch (action.type) {
    case "INCREMENT":
      break;

    case "PEDALDOWN":
      switch (action.pedal) {
        case "gas":
          tempGasPedalDown = true;
          break;
        case "brake":
          tempBrakePedalDown = true;
          break;

        default:
          break;
      }
      break;

    case "PEDALUP":
      switch (action.pedal) {
        case "gas":
          tempGasPedalDown = false;
          break;
        case "brake":
          tempBrakePedalDown = false;
          break;

        default:
          break;
      }
      break;

    case "SPEEDUP":
      tempSpeed += 1;
      if (tempSpeed >= 6) {
        tempSpeed = 5;
      }

      break;
    case "SLOWDOWN":
      if (tempSpeed <= 2) {
        tempSpeed -= 0.025;
      } else tempSpeed -= 0.5;

      if (tempSpeed <= 0) {
        tempSpeed = 0;
      }
      break;

    default:
      break;
  }

  return {
    ...state,
    speed: tempSpeed,
    gasPedalDown: tempGasPedalDown,
    brakePedalDown: tempBrakePedalDown
  };
}

const initialState = {
  name: "Boris",
  speed: 1,
  gasPedalDown: false,
  breakPedalDown: false
};

export default function App() {
  return (
    <div
      className="App"
      // style={{ animation: `RoadAnimation ${speed}s infinite linear` }}
    >
      <Provider reducer={reducer} initialState={initialState}>
        <MyGameField></MyGameField>
        {/* <MyNameComp></MyNameComp> */}
        {/* <MyCarComp></MyCarComp> */}
      </Provider>
    </div>
  );
}
