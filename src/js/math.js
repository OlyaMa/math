export default class Maths {
  static stone(attack, x) {
    return attack - Math.log2(x) * 5;
  }

  static attackFactor(attack, x) {
    return attack - attack * 0.1 * (x - 1);
  }
}
