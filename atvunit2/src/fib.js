class Fibonacci {
    constructor() {
      this.cache = {};
    }
  
    fibonacci(n) {
      if (n in this.cache) {
        return this.cache[n];
      }
  
      if (n <= 1) {
        return n;
      }
  
      const result = this.fibonacci(n - 1) + this.fibonacci(n - 2);
      this.cache[n] = result;
      
      return result;
    }
  }
  
  const fibonacci = new Fibonacci();
  
  // Realizando teste de desempenho para diferentes valores de n
  const testValues = [10, 20, 30, 40, 50];
  
  testValues.forEach((value) => {
    console.time(`fibonacci_${value}`);
    console.log(`Fibonacci(${value}): ${fibonacci.fibonacci(value)}`);
    console.timeEnd(`fibonacci_${value}`);
  })