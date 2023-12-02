import { countingSort } from './counting-sort';

/**
 * Radix sort is a sorting algorithm that sorts the elements
 * by first grouping the individual digits of the same place value.
 * Then, sort the elements according to their increasing/decreasing order.
 * Counting sort is used as an intermediate sort in radix sort.
 *
 * Time Complexity
 * ---------------
 * For the radix sort that uses counting sort as an intermediate stable sort,
 * the time complexity is O(d(n + max)). Here, d is the number of cycles.
 * Best    O(n + max)
 * Worst    O(n + max)
 * Average    O(n + max)
 * ---------------
 * Space Complexity    O(max) - max is maximum element in the array
 * Stability    Yes
 *
 * If we take very large digit numbers or the number of other bases like 32-bit and 64-bit numbers
 * then it can perform in linear time however the intermediate sort takes large space.
 * This makes radix sort space inefficient.
 * This is the reason why this sort is not used in software libraries.
 */
export const radixSort = (values: number[], isAsc = true) : number[] => {

    const max = Math.max(...values);

    // Apply counting sort to sort elements based on place value.
    for (let place = 1; max / place > 0; place *= 10) {
        countingSort(values, isAsc, (_values: number[], _i: number) => {
            return (_values[_i] / place) % 10;
        });
    }

    return values;
};