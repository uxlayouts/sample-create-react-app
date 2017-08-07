export default [
  {
    opacity: Animated.template`${this.state.animate}`,
    transform: Animated.template`
    translate3d(0,${this.state.animate.interpolate({
      inputRange: [0, 1],
      outputRange: ['50px', '0px'],
    })},0)`,
  },
  {
    opacity: Animated.template`${this.state.animate}`,
    transform: Animated.template`
    translate3d(${this.state.animate.interpolate({
      inputRange: [0, 1],
      outputRange: ['50px', '0px'],
    })},0,0)`,
  },
]
