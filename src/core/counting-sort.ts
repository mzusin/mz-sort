/**
 * Counting sort is a sorting algorithm
 * that sorts the elements of an array
 * by counting the number of occurrences of each unique element in the array.
 * The count is stored in an auxiliary array
 * and the sorting is done by mapping the count as an index of the auxiliary array.
 *
 * Counting sort works best when the range of numbers in an array is very small
 * (for example all numbers could be in range [0, 3] etc.)
 *
 * Time Complexity
 * ---------------
 * Best    O(n + max)
 * Worst    O(n + max)
 * Average    O(n + max)
 * ---------------
 * Space Complexity    O(max) - max is maximum element in the array
 * Stability    Yes
 * -----------------
 * There is no comparison between any elements,
 * so it is better than comparison based sorting techniques.
 * But, it is bad if the integers are very large
 * because the array of that size should be made.
 */
export const countingSort = (values: number[], isAsc = true) : number[] => {
    const size = values.length;

    const output = []; // of (size + 1) length
    const min = Math.min(...values);
    const max = Math.max(...values);

    console.log(isAsc);
    // 1. Store the count of each element
    const map = new Map();
    for (let i = 0; i < size; i++) {
        const curr = map.get(values[i]) ?? 0;
        map.set(values[i], curr + 1);
    }

    // 2. Store the cumulative count of each array
    for (let i = min; i <= max; i++) {
        const iCurr = map.get(i) ?? 0;
        const iPrev = map.get(i - 1) ?? 0;
        map.set(i, iCurr + iPrev);
    }

    // 3. Find the index of each element of the original array in count array;
    // place the elements in output array
    for (let i = size - 1; i >= 0; i--) {
        const val = values[i];
        const curr = map.get(val);
        output[curr - 1] = val;
        map.set(val, curr - 1);
    }

    // Copy the sorted elements into original array
    for (let i = 0; i < size; i++) {
        values[i] = output[i];
    }

    return values;
};