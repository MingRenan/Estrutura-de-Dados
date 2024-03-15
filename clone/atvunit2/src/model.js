
class Fibonacci {
    constructor() {
      this.cache = new Map();
      this.cache.set(0, 0);
      this.cache.set(1, 1);
    }
 
    calculate(n) {
      if (this.cache.has(n)) {
        return this.cache.get(n);
      }
 
      const result = this.calculate(n - 1) + this.calculate(n - 2);
      this.cache.set(n, result);
 
      return result;
    }
  }
  function testPerformance(n) {
    const fibonacci = new Fibonacci();
 
    console.time(`Fibonacci ${n}`);
    const result = fibonacci.calculate(n);
    console.timeEnd(`Fibonacci ${n}`);
 
    return result;
  }
  testPerformance(10);
  testPerformance(20);
  testPerformance(30);
  testPerformance(40);
