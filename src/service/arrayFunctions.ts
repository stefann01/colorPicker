export{}
declare global {
    interface Array<T> {
        swap(first: number, second:number): Array<T>;
    }
}

if (!Array.prototype.swap) {
  Array.prototype.swap = function<T>(first: number, second:number): T[] {
    let temp = this[first];
    this[first] = this[second];
    this[second] = temp;
    return this;
  }
}