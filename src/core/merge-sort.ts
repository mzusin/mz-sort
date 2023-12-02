/**
 * Merge Sort is one of the most popular sorting algorithms
 * that is based on the principle of Divide and Conquer Algorithm.
 * Here, a problem is divided into multiple sub-problems.
 * Each sub-problem is solved individually.
 * Finally, sub-problems are combined to form the final solution.
 * https://www.youtube.com/watch?v=dENca26N6V4
 * Time Complexity
 * ---------------
 * Best Case Complexity: O(n * log n)
 * Worst Case Complexity: O(n * log n)
 * Average Case Complexity: O(n * log n)
 * ---------------
 * Space Complexity    O(n)
 * Stability    Yes
 */
export const mergeSort = (values: number[], isAsc = true): number[] => {
    helper(values, 0, values.length - 1, isAsc);
    return values;
};

/**
 * merges 2 sub arrays: [left, mid] and [mid+1, right]
 */
const merge = (values: number[], left: number, mid: number, right: number, isAsc: boolean) => {

    // create temp arrays
    const leftArr = [];
    const rightArr = [];

    const lMax = mid - left + 1;
    const rMax = right - mid;

    // copy data to the left array
    for (let i = 0; i < lMax; i++){
        leftArr[i] = values[left + i];
    }

    // copy data to the right array
    for (let j = 0; j < rMax; j++){
        rightArr[j] = values[mid + 1 + j];
    }

    // merge the temp arrays back into arr[left, ..., right] ------
    let l = 0; // index of first subarray
    let r = 0; // index of second subarray
    let m = left; // index of merged subarray

    while (l < lMax && r < rMax) {

        if(isAsc) {
            if (leftArr[l] <= rightArr[r]) {
                values[m] = leftArr[l];
                l++;
            }
            else {
                values[m] = rightArr[r];
                r++;
            }
        }
        else{
            if (leftArr[l] >= rightArr[r]) {
                values[m] = leftArr[l];
                l++;
            }
            else {
                values[m] = rightArr[r];
                r++;
            }
        }

        m++;
    }

    // copy the remaining items of the left array if exist
    while (l < lMax) {
        values[m] = leftArr[l];
        l++;
        m++;
    }

    // copy the remaining items of the right array if exist
    while (r < rMax) {
        values[m] = rightArr[r];
        r++;
        m++;
    }
};

const helper = (values: number[], left: number, right: number, isAsc: boolean) => {
    if(left >= right) return values;

    const mid = Math.floor((right + left) / 2);
    helper(values, left, mid, isAsc);
    helper(values, mid + 1, right, isAsc);

    merge(values, left, mid, right, isAsc);

    return values;
};


