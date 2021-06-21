const _ = require('../math');

test('adds 1 + 2 to equal 3', () => {
  expect(_.sum(1, 2)).toBe(3);
});

test('subs 2 - 1 to equal 1', () => {
  expect(_.sub(2, 1)).toBe(1);
});