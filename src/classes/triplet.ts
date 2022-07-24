export function findTripletSum(arr: number[], sum: number) {
  for (let i = 0; i < arr.length; i++) {
    let subSet = new Set();
    let current_sum = sum - arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (subSet.has(current_sum - arr[j])) {
        return [arr[i], arr[j], current_sum - arr[j]];
      }
      subSet.add(arr[j]);  
    }
  }
  return null;
}