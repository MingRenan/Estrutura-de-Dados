import { fibonacciRecursive, fibonacciWithCache } from "./model";

function analyzePerformance(func: (n: number) => number, n: number): void {
    const startTime = performance.now();
    func(n);
    const endTime = performance.now();
    console.log(`Tempo de execução para n = ${n}: ${endTime - startTime} milissegundos`);
}

const n = 40; // Número de Fibonacci a ser calculado

console.log("Análise de desempenho para Fibonacci sem cache:");
analyzePerformance(fibonacciRecursive, n);

console.log("\nAnálise de desempenho para Fibonacci com cache:");
const cache = new Map<number, number>();
analyzePerformance((n) => fibonacciWithCache(n, cache), n);
