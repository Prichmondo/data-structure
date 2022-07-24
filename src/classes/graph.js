"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = exports.NodeGraph = void 0;
const queue_1 = require("./queue");
const stack_1 = require("./stack");
class NodeGraph {
    constructor(data, nodes = []) {
        this.data = data;
        this.nodes = nodes;
    }
}
exports.NodeGraph = NodeGraph;
class Graph {
    constructor() {
        this.adjList = new Map();
    }
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }
    addEdge(source, destination) {
        var _a, _b;
        if (!this.adjList.has(source)) {
            this.adjList.set(source, []);
        }
        if (!this.adjList.has(destination)) {
            this.adjList.set(destination, []);
        }
        (_a = this.adjList.get(source)) === null || _a === void 0 ? void 0 : _a.push(destination);
        (_b = this.adjList.get(destination)) === null || _b === void 0 ? void 0 : _b.push(source);
    }
    print() {
        this.adjList.forEach((value, key) => {
            console.log(key, '->', value.join());
        });
    }
    bfs(start) {
        var _a;
        const result = [];
        const visited = new Set();
        const queue = new queue_1.Queue([start]);
        visited.add(start);
        let currentVertex;
        while (queue.length()) {
            currentVertex = queue.pull();
            if (currentVertex) {
                result.push(currentVertex);
                (_a = this.adjList.get(currentVertex)) === null || _a === void 0 ? void 0 : _a.forEach(n => {
                    if (!visited.has(n)) {
                        visited.add(n);
                        queue.push(n);
                    }
                });
            }
        }
        return result;
    }
    dfs(start) {
        var _a;
        const result = [];
        const visited = new Set();
        const stack = new stack_1.Stack([start]);
        visited.add(start);
        let currentVertex;
        while (stack.length()) {
            currentVertex = stack.pull();
            if (currentVertex) {
                result.push(currentVertex);
                (_a = this.adjList.get(currentVertex)) === null || _a === void 0 ? void 0 : _a.forEach(n => {
                    if (!visited.has(n)) {
                        visited.add(n);
                        stack.push(n);
                    }
                });
            }
        }
        return result;
    }
}
exports.Graph = Graph;
