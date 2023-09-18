import Magician from '../magician';

test.each([
  [
    'invalid name input: less then 2',
    ['M', 'Magician', 100, 100],
    'The name must be at least 2 and no more than 10 characters',
  ],
  [
    'invalid name input: more then 10',
    ['MagicanMagican', 'Magician', 100, 100],
    'The name must be at least 2 and no more than 10 characters',
  ],
  [
    'invalid type input: not in the list: Bowman, Swordsman, Magician, Daemon, Undead, Zombie',
    ['Magican', 'Lulu', 100, 1, 10, 10],
    'The type must be one of the list: Bowman, Swordsman, Magician, Daemon, Undead, Zombie',
  ],
])('testing working status with %s', (_, imported, expected) => {
  expect(() => new Magician(...imported)).toThrow(expected);
});
