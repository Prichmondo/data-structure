export class Stack<T> {
  public data: T[];

  constructor (data: T[] = []) {
    this.data = data;
  }

  public has(item: T): boolean {
    return typeof this.data.find(i => i === item) !== undefined;
  }

  public pull(): T | undefined {
    return this.data.shift();
  }
  
  public push(item: T) {
    return this.data.unshift(item);
  }

  public length(): number {
    return this.data.length;
  }

  public empty(): void {
    this.data = [];
  }
}
