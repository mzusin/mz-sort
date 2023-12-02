/**
 * Selection sort is a sorting algorithm that
 * selects the smallest element from an unsorted list in each iteration
 * and places that element at the beginning of the unsorted list.
 * https://www.youtube.com/watch?v=0-W8OEwLebQ
 * Time Complexity
 * ---------------
 * Best    O(n^2)
 * Worst    O(n^2)
 * Average    O(n^2)
 * ---------------
 * Space Complexity    O(1)
 * Stability    No
 * ---------------
 * Number of comparisons is ((n - 1) + (n - 2) + (n - 3) + ..... + 1 = n(n - 1) / 2
 * ---------------
 * The time complexity of the selection sort is the same in all cases.
 * At every step, you have to find the minimum element and put it in the right place.
 * The minimum element is not known until the end of the array is not reached.
 */
export const selectionSort = (values: number[], isAsc = true) : number[] => {
    for (let i = 0; i < values.length - 1; i++) {
        let minOrMaxIndex = i;

        // find min/max index ------------------------
        for (let j = i + 1; j < values.length; j++) {
            if(isAsc) {
                if (values[j] < values[minOrMaxIndex]) {
                    minOrMaxIndex = j;
                }
            }
            else{
                if (values[j] > values[minOrMaxIndex]) {
                    minOrMaxIndex = j;
                }
            }
        }

        // swap -----------------------
        [values[i], values[minOrMaxIndex]] = [values[minOrMaxIndex], values[i]];
    }

    return values;
};