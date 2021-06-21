const _ = require('../math');

test('sum 1 + 2 to equal 3', () => {
  expect(_.sum(1, 2)).toBe(3);
});

test('div by 0 is Infinity',() => {
  expect(_.div(1, 0)).not.toBeFinite(); // Use jest-extended Matcher and negator.
});