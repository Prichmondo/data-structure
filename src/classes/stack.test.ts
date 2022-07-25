import { Stack } from './stack';

it('is empty when created without arguments', () => {
  const stack = new Stack();
  expect(stack.length()).toBe(0);
});

it('can initiate with a list of items', () => {
  const stack = new Stack([1,2,3]);
  expect(stack.getData()).toEqual([1,2,3]);
});

it('pushes new items on top of the stack', () => {
  const stack = new Stack([1,2,3]);
  stack.push(4);
  stack.push(5);
  expect(stack.getData()).toEqual([5,4,1,2,3]);
});

it('pulls items from the top of the stack', () => {
  const stack = new Stack([1,2,3,4,5]);
  const pulledItem = stack.pull();
  expect(pulledItem).toEqual(1);
  expect(stack.getData()).toEqual([2,3,4,5]);
});

it('can be emptyed', () => {
  const stack = new Stack([1,2,3,4,5]);
  stack.empty();
  expect(stack.getData()).toEqual([]);
  expect(stack.length()).toBe(0);
});

it('can check if has data', () => {
  const stack = new Stack([1,2,3,4,5]);
  expect(stack.has(2)).toBe(true);
  expect(stack.has(6)).toBe(false);
});