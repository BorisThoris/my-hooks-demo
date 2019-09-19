import React, { useEffect } from "react";
import { useGlobalState } from "../useGlobalState";
import "./index.css";

import carSvg from "./images/image2vector.svg";
import wheelSvg from "./images/wheel2vector.svg";
import flameSvg from "./images/flameSvg.svg";

import gasPedal from "./images/gasPedal.png";
import breakPedal from "./images/breakPedal.png";
import arrow from "./images/directionArrow.png";
import arrow2 from "./images/directionArrow2.png";

export default function Counter() {
  const [state, dispatch] = useGlobalState();

  function pedalClick(p, boolean) {
    let pedalType = p;
    let gasPressed = state.gasPedalDown;
    let brakePressed = state.brakePedalDown;

    switch (pedalType) {
      case "gasPedal":
        if (!gasPressed) dispatch({ type: "PEDALDOWN", pedal: "gas" });
        else dispatch({ type: "PEDALUP", pedal: "gas" });
        break;

      case "brakePedal":
        if (!brakePressed) dispatch({ type: "PEDALDOWN", pedal: "brake" });
        else dispatch({ type: "PEDALUP", pedal: "brake" });
        break;

      default:
        return;
    }
  }

  function directionClick(d) {
    window.alert(d);
  }

  useEffect(() => {
    let brakePedalDown = state.brakePedalDown;
    let gasPedalDown = state.gasPedalDown;
    const interval = setInterval(() => {
      console.log(state);
      if (brakePedalDown) {
        dispatch({ type: "SLOWDOWN" });
        console.log("lololol");
      }
      if (gasPedalDown) {
        dispatch({ type: "SPEEDUP" });
      }
    }, 50);
    return () => clearInterval(interval);
  }, [dispatch, state, state.brakePedalDown]);

  let wheelSpeed = state.speed;

  return (
    <div>
      <div id="arrowHolder">
        <button>
          <img
            onMouse={() => {
              directionClick("up");
            }}
            className="dirArrow"
            src={arrow}
            style={{
              height: "45%",
              width: "100",
              marginBottom: "16px",

              cursor: "pointer",
              zIndex: "5"
            }}
            alt="err"
          ></img>{" "}
        </button>
        <img
          onClick={() => {
            directionClick("down");
          }}
          className="dirArrow"
          src={arrow2}
          style={{
            height: "45%",
            width: "100%",

            cursor: "pointer",
            zIndex: "5"
          }}
          alt="err"
        ></img>
      </div>

      <div id="pedalHolder">
        <img
          onMouseUp={() => {
            pedalClick("brakePedal");
          }}
          onMouseDown={() => {
            pedalClick("brakePedal");
          }}
          className="pedal"
          src={breakPedal}
          style={{ height: "100%", width: "100%", transition: "0.55s" }}
          alt="err"
        ></img>
        <img
          onMouseUp={() => {
            pedalClick("gasPedal");
          }}
          onMouseDown={() => {
            pedalClick("gasPedal");
          }}
          className="pedal"
          src={gasPedal}
          style={{ height: "100%", width: "100%", transition: "0.25s" }}
          alt="err"
        ></img>
      </div>

      <div id="carContainer">
        <img src={carSvg} className="carBody" alt="lol"></img>
        <img
          src={wheelSvg}
          style={{
            animation: `WheelGas ${wheelSpeed}s linear infinite`,
            animationFillMode: "forwards"
          }}
          className="wheel1"
          alt="lol"
        ></img>
        <img
          src={wheelSvg}
          style={{
            animation: `WheelGas ${wheelSpeed}s linear infinite`,
            animationFillMode: "forwards"
          }}
          className="wheel2"
          alt="lol"
        ></img>
        <img src={flameSvg} className="flame" alt="lol"></img>
      </div>
    </div>
  );
}
