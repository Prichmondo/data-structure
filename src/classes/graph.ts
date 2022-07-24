import { Queue } from "./queue";
import { Stack } from "./stack";

export class NodeGraph<T> {
  public data: T;
  public nodes: T[];
  constructor (data: T, nodes: T[] = []) {
    this.data = data;
    this.nodes = nodes;
  }
}

export class Graph<T = number> {
  public adjList: Map<T, T[]>;

  constructor () {
    this.adjList = new Map<T, T[]>();
  }

  public addVertex(vertex: T)
  {
    if(!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }    
  }

  public addEdge(source: T, destination: T)
  {
    if(!this.adjList.has(source)) {
      this.adjList.set(source, []);
    } 
    if(!this.adjList.has(destination)) {
      this.adjList.set(destination, []);
    }
    this.adjList.get(source)?.push(destination);
    this.adjList.get(destination)?.push(source);    
  }

  public print() {
    this.adjList.forEach((value, key) => {
      console.log(key, '->', value.join());
    })
  }

  public bfs(start: T) {
    const result = [];
    const visited = new Set<T>();
    const queue = new Queue<T>([start]);
    visited.add(start);
    let currentVertex: T | undefined;
    while (queue.length()) {
      currentVertex = queue.pull();
      if(currentVertex) {
        result.push(currentVertex);
        this.adjList.get(currentVertex)?.forEach(n => {
          if(!visited.has(n)) {
            visited.add(n);
            queue.push(n);
          }
        })
      }
    }
    return result;
  }

  public dfs(start: T) {
    const result = [];
    const visited = new Set<T>();
    const stack = new Stack<T>([start]);
    visited.add(start);
    let currentVertex: T | undefined;
    while (stack.length()) {
      currentVertex = stack.pull();
      if(currentVertex) {
        result.push(currentVertex);
        this.adjList.get(currentVertex)?.forEach(n => {
          if(!visited.has(n)) {
            visited.add(n);
            stack.push(n);
          }
        })
      }
    }
    return result;
  }

}
