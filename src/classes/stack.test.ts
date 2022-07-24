import { Stack } from './stack';

it('is empty when created without arguments', () => {
  const stack = new Stack();
  expect(stack.length()).toBe(0);
});