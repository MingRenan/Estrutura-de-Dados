export function fibonacciRecursive(n: number): number {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

export function fibonacciWithCache(n: number, cache: Map<number, number>): number {
    if (n <= 1) return n;

    if (cache.has(n)) {
        return cache.get(n)!;
    }

    const result = fibonacciWithCache(n - 1, cache) + fibonacciWithCache(n - 2, cache);
    cache.set(n, result);
    return result;
}
