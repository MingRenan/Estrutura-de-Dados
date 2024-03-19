class FibonacciModel {
    private cache: Map<number, number>;

    constructor() {
        this.cache = new Map<number, number>();
        this.cache.set(0, 0);
        this.cache.set(1, 1);
    }

    fibonacciWithCache(n: number): number {
        if (this.cache.has(n)) {
            return this.cache.get(n)!;
        } else {
            const result = this.fibonacciWithCache(n - 1) + this.fibonacciWithCache(n - 2);
            this.cache.set(n, result);
            return result;
        }
    }

    fibonacciWithoutCache(n: number): number {
        if (n <= 1) {
            return n;
        } else {
            return this.fibonacciWithoutCache(n - 1) + this.fibonacciWithoutCache(n - 2);
        }
    }
}

export default FibonacciModel;
