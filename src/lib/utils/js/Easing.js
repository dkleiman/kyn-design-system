/**
 * Easing Functions - inspired from http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 */
export default {
  /** No easing, no acceleration */
  linear(t) { return t; },
  /** Accelerating from zero velocity */
  easeInQuad(t) { return t * t; },
  /** Decelerating to zero velocity */
  easeOutQuad(t) { return t * (2 - t); },
  /** Acceleration until halfway, then deceleration */
  easeInOutQuad(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
  /** Accelerating from zero velocity */
  easeInCubic(t) { return t * t * t; },
  /** Decelerating to zero velocity */
  easeOutCubic(t) {
    const u = t - 1;
    return u * u * u + 1;
  },
  /** Acceleration until halfway, then deceleration */
  easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
  /** Accelerating from zero velocity */
  easeInQuart(t) { return t * t * t * t; },
  /** Decelerating to zero velocity */
  easeOutQuart(t) {
    const u = t - 1;
    return 1 - u * u * u * u;
  },
  /** Acceleration until halfway, then deceleration */
  easeInOutQuart(t) {
    const u = t - 1;
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * u * u * u * u;
  },
  /** Accelerating from zero velocity */
  easeInQuint(t) { return t * t * t * t * t; },
  /** Decelerating to zero velocity */
  easeOutQuint(t) {
    const u = t - 1;
    return 1 + u * u * u * u * u;
  },
  /** Acceleration until halfway, then deceleration */
  easeInOutQuint(t) {
    const u = t - 1;
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * u * u * u * u * u;
  },
  /** Decelerating exponentially */
  easeOutExpo(t) { return -(2 ** (-10 * t)) + 1; },
  /** Decelerating circular */
  easeOutCirc(t) {
    const u = t - 1;
    return Math.sqrt(1 - u * u);
  },
};
