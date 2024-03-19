import FibonacciModel from './fibonacci.model';

class FibonacciView {
    static analyzePerformance(n: number): void {
        const model = new FibonacciModel();

        // With Cache
        console.time('With Cache');
        model.fibonacciWithCache(n);
        console.timeEnd('With Cache');

        // Without Cache
        console.time('Without Cache');
        model.fibonacciWithoutCache(n);
        console.timeEnd('Without Cache');
    }
}

// Example usage
FibonacciView.analyzePerformance(30); // Change the value of n as needed

export default FibonacciView;
