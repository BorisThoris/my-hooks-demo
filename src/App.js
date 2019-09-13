import React from "react";

import { Provider } from "./myHookComponents/useGlobalState";
import MyNameComp from "./myHookComponents/myNameHookComponent";
import MyCarComp from "./myHookComponents/myCarHookComponent";

import "./App.css";
// import Counter from "./Counter";

function reducer(state, action) {
  let tempSpeed = state.speed;
  let tempGasPedalDown = state.gasPedalDown;
  let tempBrakePedalDown = state.brakePedalDown;
  let tempName = state.name;

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
      tempSpeed -= 0.05;
      if (tempSpeed <= 0) {
        tempSpeed = 0.05;
      }

      break;
    case "SLOWDOWN":
      tempSpeed += 0.15;

      if (tempSpeed > 1) {
        tempSpeed = 1;
      }
      break;

    default:
      return state;
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
    <div className="App">
      <Provider reducer={reducer} initialState={initialState}>
        <MyNameComp></MyNameComp>
        <MyCarComp></MyCarComp>
      </Provider>
    </div>
  );
}
