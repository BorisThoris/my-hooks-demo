import React from "react";
// import { useGlobalState } from "../../useGlobalState";

const hoc = Component => {
  return class WithKeyboard extends React.Component {
    componentDidMount() {}

    imageMover = (element, bgn, bool, speed) => {
      // const [state, dispatch] = useGlobalState();
      // window.alert(speed);
      let newX = element.props.style.left.split("%")[0] - speed / 100;
      // window.alert(newX);
      if (newX === -10 && bool) {
        newX = 100;
      }
      if (newX <= -105) {
        newX = 0;
      }

      return React.cloneElement(element, {
        style: { left: `${newX}%`, backgroundImage: `${bgn}` }
      });
    };

    render() {
      return (
        <Component
          lolFunc={this.lolFunc}
          imageMover={this.imageMover}
          backgroundImage={this.props.backgroundImage}
          backgroundArray={this.props.backgroundArray}
        ></Component>
      );
    }
  };
};

export default hoc;
