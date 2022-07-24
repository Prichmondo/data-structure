export function test(fn: () => void, iterations = 1000) {
  const startTime = performance.now();
  for(let i = 0; i<iterations; i++) {
      fn();            
  }
  const endTime = performance.now();
  console.log(`avg execution time ${endTime - startTime} milliseconds`);
}