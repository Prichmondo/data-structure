export function divideAndConquerSearch<T>(arr: T[], comparer: (value: T) => boolean, match: (value: T) => boolean): T | null {
  let mid = Math.floor(arr.length/2);
  let length = arr.length;
  while(length>0) {
    if(match(arr[mid])) {
      return arr[mid];
    }
    length = Math.floor(length/2);
    if(comparer(arr[mid])) {      
      mid = mid + length;
    } else {
      mid = mid - length;
    }
  }

  return null;
}