import Magician from '../magician';
import Daemon from '../daemon';

test.each([
  ['class Magican', new Magician('Magician', 'Magician'), 85],
  ['class Magican', new Daemon('Daemon', 'Daemon'), 85],
])('testing working status stoned true of %s', (_, imported, expected) => {
  const tested = imported;
  tested.squares = 2;
  tested.stoned = true;
  tested.attack = 100;
  expect(tested.attack).toBe(expected);
});

test.each([
  ['class Magican', new Magician('Magician', 'Magician'), 90],
  ['class Magican', new Daemon('Daemon', 'Daemon'), 90],
])('testing working status stoned false of %s', (_, imported, expected) => {
  const tested = imported;
  tested.squares = 2;
  tested.stoned = false;
  tested.attack = 100;
  expect(tested.attack).toBe(expected);
});
