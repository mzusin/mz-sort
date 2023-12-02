import { bucketSort } from '../src/core/bucket-sort';

describe('bucketSort asc', () => {
    it('should sort an array of numbers in ascending order', () => {
        const inputArray = [12, 11, 13, 5, 6, 7];
        const expectedOutput = [5, 6, 7, 11, 12, 13];

        bucketSort(inputArray, 3);
        expect(inputArray).toEqual(expectedOutput);
    });

    it('should handle an empty array', () => {
        const inputArray: number[] = [];
        bucketSort(inputArray, 5);
        expect(inputArray).toEqual([]);
    });

    it('should handle an array with one element', () => {
        const inputArray = [42];
        bucketSort(inputArray, 5);
        expect(inputArray).toEqual([42]);
    });

    it('should handle an array with duplicate elements', () => {
        const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const expectedOutput = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];

        bucketSort(inputArray, 5);
        expect(inputArray).toEqual(expectedOutput);
    });

    /*it('should handle an array with negative numbers', () => {
        const inputArray = [-5, -2, -8, -1, -3];
        const expectedOutput = [-8, -5, -3, -2, -1];

        bucketSort(inputArray, 5);
        expect(inputArray).toEqual(expectedOutput);
    });*/

    it('should sort an array of numbers in ascending order', () => {
        const inputArray = [12, 11, 13, 5, 6, 7];
        const expectedOutput = [5, 6, 7, 11, 12, 13];

        bucketSort(inputArray, 5);
        expect(inputArray).toEqual(expectedOutput);
    });

    it('should handle an already sorted array in descending order', () => {
        const inputArray = [9, 7, 5, 4, 3, 1];
        const expectedOutput = [1, 3, 4, 5, 7, 9];

        bucketSort(inputArray, 5);
        expect(inputArray).toEqual(expectedOutput);
    });

    it('should handle an array with all elements equal', () => {
        const inputArray = [8, 8, 8, 8, 8];
        const expectedOutput = [8, 8, 8, 8, 8];

        bucketSort(inputArray, 5);
        expect(inputArray).toEqual(expectedOutput);
    });

    it('should handle a large array with random values', () => {
        const inputArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
        const sortedArray = [...inputArray].sort((a, b) => a - b);

        bucketSort(inputArray, 5);
        expect(inputArray).toEqual(sortedArray);
    });
});

describe('bucketSort desc', () => {
    it('should sort an array of numbers in descending order', () => {
        const inputArray = [12, 11, 13, 5, 6, 7];
        const expectedOutput = [13, 12, 11, 7, 6, 5];

        bucketSort(inputArray, 5, false);
        expect(inputArray).toEqual(expectedOutput);
    });

    it('should handle an empty array', () => {
        const inputArray: number[] = [];
        bucketSort(inputArray, 5, false);
        expect(inputArray).toEqual([]);
    });

    it('should handle an array with one element', () => {
        const inputArray = [42];
        bucketSort(inputArray, 5, false);
        expect(inputArray).toEqual([42]);
    });

    it('should handle an array with duplicate elements', () => {
        const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const expectedOutput = [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1];

        bucketSort(inputArray, 5, false);
        expect(inputArray).toEqual(expectedOutput);
    });

    /*it('should handle an array with negative numbers', () => {
        const inputArray = [-5, -2, -8, -1, -3];
        const expectedOutput = [-1, -2, -3, -5, -8];

        bucketSort(inputArray, 5, false);
        expect(inputArray).toEqual(expectedOutput);
    });*/

    it('should sort an array of numbers in descending order', () => {
        const inputArray = [12, 11, 13, 5, 6, 7];
        const expectedOutput = [13, 12, 11, 7, 6, 5];

        bucketSort(inputArray, 5, false);
        expect(inputArray).toEqual(expectedOutput);
    });

    it('should handle an already sorted array in descending order', () => {
        const inputArray = [9, 7, 5, 4, 3, 1];
        const expectedOutput = [9, 7, 5, 4, 3, 1];

        bucketSort(inputArray, 5, false);
        expect(inputArray).toEqual(expectedOutput);
    });

    it('should handle an array with all elements equal', () => {
        const inputArray = [8, 8, 8, 8, 8];
        const expectedOutput = [8, 8, 8, 8, 8];

        bucketSort(inputArray, 5, false);
        expect(inputArray).toEqual(expectedOutput);
    });

    it('should handle a large array with random values', () => {
        const inputArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
        const sortedArray = [...inputArray].sort((a, b) => b - a);

        bucketSort(inputArray, 5, false);
        expect(inputArray).toEqual(sortedArray);
    });
});
