import { Graph } from './classes/graph'

const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);

graph.addEdge(1, 2);
graph.addEdge(1, 3);

graph.addEdge(2, 4);
graph.addEdge(2, 3);

graph.addEdge(3, 5);
graph.addEdge(3, 4);

graph.addEdge(4, 1);

graph.addEdge(5, 2);

graph.addEdge(6, 5);
graph.addEdge(6, 4);

graph.print();

console.log(graph.bfs(1));
console.log(graph.dfs(1));