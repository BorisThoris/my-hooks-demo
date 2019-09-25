import React, { useEffect } from "react";
import { useGlobalState } from "../useGlobalState";
import "./index.css";

import MyCarComp from "../myCarHookComponent";
import BackgroundHook from "./components/roadBackground";
import RoadBackgroundImg from "../../images/background2.png";
import SkyBackground from "../../images/skyBackground.jpg";
import mountainBackground from "../../images/mountainsBackground.png";

window.speed = 1;

export default function Counter() {
  const [state, dispatch] = useGlobalState();
  let speed = state.speed * 4;

  const CreateBackgroundComp = tempBackGroundImage => {
    let backgroundCubes = [];
    let tempBackground = (
      <div
        className="App2"
        style={{
          left: "-5%",
          backgroundImage: `url(${tempBackGroundImage})`
        }}
      ></div>
    );

    // window.alert("render");
    backgroundCubes.push(tempBackground);

    return (
      <BackgroundHook
        backgroundImage={tempBackGroundImage}
        backgroundArray={backgroundCubes}
      />
    );
  };

  console.log(true);
  let Sky = () => CreateBackgroundComp(SkyBackground);
  let Mountain = () => CreateBackgroundComp(mountainBackground);
  let Road = () => CreateBackgroundComp(RoadBackgroundImg);
  return (
    <div style={{ width: "100%" }}>
      {Sky()}
      {Mountain()}
      {Road()}

      <MyCarComp></MyCarComp>
    </div>
  );
}
