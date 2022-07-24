"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("./stack");
it('is empty when created without arguments', () => {
    const stack = new stack_1.Stack();
    expect(stack.length()).toBe(0);
});
