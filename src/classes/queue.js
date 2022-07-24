"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor(data = []) {
        this.data = data;
    }
    has(item) {
        return typeof this.data.find(i => i === item) !== undefined;
    }
    pull() {
        return this.data.pop();
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
exports.Queue = Queue;
