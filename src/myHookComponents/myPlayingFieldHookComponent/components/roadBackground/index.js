import React, { useState, useEffect, useCallback } from "react";
import withBackgroundHoc from "../../hoc";
import { useGlobalState } from "../../../useGlobalState";
import "./index.css";

let backgroundCubes = [];

function RoadBackground({
  lolFunc,
  imageMover,
  onKeyUpHandler,
  keyboardRef,
  backgroundImage,
  backgroundArray
}) {
  const [state, dispatch] = useGlobalState();
  const speed = state.speed;
  const bool = true;
  backgroundCubes = backgroundArray;

  let tempBackground = (
    <div
      className="App2"
      style={{
        left: "-5%",
        backgroundImage: `url(${backgroundImage})`
      }}
    ></div>
  );

  let tempBackground2 = (
    <div
      className="App2"
      style={{
        left: "105%",
        backgroundImage: `url(${backgroundImage})`
      }}
    ></div>
  );

  //   backgroundCubes.push(tempBackground);

  const [background, setBackground] = useState(tempBackground);

  const backgroundMove = useCallback(element => {
    return imageMover(element, backgroundImage, false, speed);
  });

  useEffect(() => {
    if (bool) {
      for (let cube of backgroundCubes) {
        // eslint-disable-next-line no-loop-func
        // setTimeout(function() {
        //   console.log(cube);
        let newCube = backgroundMove(cube);
        let index = backgroundCubes.indexOf(cube);
        //   console.log(index);
        backgroundCubes.splice(index, 1, newCube);
        setBackground(newCube);
        // }, 0.000000025);
      }
    }
  }, [background, backgroundMove, bool]);

  return (
    <div onKeyUp={onKeyUpHandler} ref={keyboardRef}>
      {background}
    </div>
  );
}

export default withBackgroundHoc(RoadBackground);
