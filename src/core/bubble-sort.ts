/**
 * Bubble sort is a sorting algorithm that compares two adjacent elements
 * and swaps them until they are in the intended order.
 * https://www.youtube.com/watch?v=Iv3vgjM8Pv4
 * Time Complexity
 * ---------------
 * Best    O(n)
 * Worst    O(n^2)
 * Average    O(n^2)
 * ---------------
 * Space Complexity    O(1)
 * Stability    Yes
 * ---------------
 * Number of comparisons is (n-1) + (n-2) + (n-3) +.....+ 1 = n(n-1)/2
 */
export const bubbleSort = (values: number[], isAsc = true) : number[] => {
    // N = 6:
    // ------------------
    // i = 0, j in [0, 5)
    // i = 1, j in [0, 4)
    // i = 2, j in [0, 3)
    // i = 3, j in [0, 2)
    // i = 4, j in [0, 1)

    for(let i=0; i<values.length - 1; i++) {
        for(let j=0; j<values.length - 1 - i; j++) {

            if(isAsc && values[j] < values[j + 1] ||
                !isAsc && values[j] > values[j + 1]) continue;

            // swap -----------------------------------------------
            [values[j], values[j + 1]] = [values[j + 1], values[j]];
        }
    }

    return values;
};