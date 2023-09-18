import Character from './character';
import Maths from './math';

export default class Daemon extends Character {
  constructor(name, type, attack = 100, defence = 400, stoned = false) {
    super(name, type);
    this.attack = attack;
    this.defence = defence;
    this.stoned = stoned;
    this.squares = undefined;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }

  get attack() {
    return this._attack;
  }

  set attack(attack) {
    if (this.squares) {
      attack = Maths.attackFactor(attack, this.squares);
      if (this.stoned) {
        attack = Maths.stone(attack, this.squares);
      }
      this._attack = attack;
    }
  }
}
