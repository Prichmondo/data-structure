"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor(data = []) {
        this.data = data;
    }
    has(item) {
        return typeof this.data.find(i => i === item) !== undefined;
    }
    pull() {
        return this.data.shift();
    }
    push(item) {
        return this.data.unshift(item);
    }
    length() {
        return this.data.length;
    }
    empty() {
        this.data = [];
    }
}
exports.Stack = Stack;
