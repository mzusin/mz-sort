/**
 * Quicksort is a sorting algorithm based on the divide and conquer approach where:
 * - An array is divided into subarrays by selecting a pivot element (element selected from the array).
 * - While dividing the array, the pivot element should be positioned in such a way that elements
 *      less than pivot are kept on the left side
 *      and elements greater than pivot are on the right side of the pivot.
 * - The left and right subarrays are also divided using the same approach.
 *   This process continues until each subarray contains a single element.
 * - At this point, elements are already sorted. Finally, elements are combined to form a sorted array.
 * https://www.youtube.com/watch?v=kDgvnbUIqT4
 * Time Complexity
 * ---------------
 * Best    O(n * log n) - It occurs when the pivot element is always the middle element or near to the middle element.
 * Worst    O(n^2) - It occurs when the pivot element picked is either the greatest or the smallest element.
 * Average    O(n * log n)
 * ---------------
 * Space Complexity    O(log n)
 * Stability    No
 */
export const quickSort = (values: number[], isAsc = true) : number[] => {
    helper(values, 0, values.length - 1, isAsc)
    return values;
};

const helper = (values: number[], low: number, high: number, isAsc: boolean) => {
    if (low < high) {

        // find pivot element such that
        // elements smaller than pivot are on the left
        // elements greater than pivot are on the right
        const pivot = partition(values, low, high, isAsc);

        // recursive call on the left of pivot
        helper(values, low, pivot - 1, isAsc);

        // recursive call on the right of pivot
        helper(values, pivot + 1, high, isAsc);
    }
};

const partition = (values: number[], low: number, high: number, isAsc: boolean) => {

    // choose the rightmost element as pivot
    const pivot = values[high];

    // pointer for greater element
    let i = low - 1;

    // traverse through all elements
    // compare each element with pivot
    for (let j = low; j < high; j++) {

        if(isAsc && values[j] <= pivot || !isAsc && values[j] >= pivot) {
            i++;

            // swapping element at i with element at j
            [values[i], values[j]] = [values[j], values[i]];
        }
    }

    // swap the pivot element with the greater element specified by i
    [values[i + 1], values[high]] = [values[high], values[i + 1]];

    // return the position from where partition is done
    return i + 1;
};
