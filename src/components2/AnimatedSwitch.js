import React from 'react';
import { Switch } from 'react-router-dom';
import * as Animated from 'animated/lib/targets/react-dom';
import { shape } from 'prop-types';

class AnimatedSwitch extends Switch {
  state = { animate: new Animated.Value(0) };

  componentWillAppear(cb) {
    setTimeout(
      () => Animated.spring(this.state.animate, { toValue: 1 }).start(),
      150,
    );
    cb();
  }
  componentWillEnter(cb) {
    setTimeout(
      () => Animated.spring(this.state.animate, { toValue: 1 }).start(),
      150,
    );
    cb();
  }
  componentWillLeave(cb) {
    Animated.spring(this.state.animate, { toValue: 0 }).start();
    setTimeout(() => cb(), 100);
  }
  render() {
    const slideLeft = {
      opacity: Animated.template`${this.state.animate}`,
      transform: Animated.template`
      translate3d(${this.state.animate.interpolate({
        inputRange: [0, 1],
        outputRange: ['50px', '0px'],
      })},0,0)`,
    };
    return (
      <Animated.div style={slideLeft} className="animated-page-wrapper">
        {super.render()}
      </Animated.div>
    );
  }
}

// Type Seting With Prop-Types
AnimatedSwitch.propTypes = {
  location: shape({}),
};

export default AnimatedSwitch;

// const pop = {
//   opacity: Animated.template`${this.state.animate}`,
//   transform: Animated.template`
//   translate3d(${this.state.animate.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['-50px', '0px'],
//   })},0,0)`,
// };
// const slideRight = {
//   opacity: Animated.template`${this.state.animate}`,
//   transform: Animated.template`translate3d(${this.state.animate.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['-50px', '0px'],
//   })},0,0)`,
// };
// const slideDown = {
//   opacity: Animated.template`${this.state.animate}`,
//   transform: Animated.template`
//   translate3d(0,${this.state.animate.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['50px', '0px'],
//   })},0)`,
// };
// const slideUp = {
//   opacity: Animated.template`${this.state.animate}`,
//   transform: Animated.template`
//   translate3d(0,${this.state.animate.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['-50px', '0px'],
//   })},0)`,
// };
