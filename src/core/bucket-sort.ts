// TODO: handle negative numbers

/**
 * Bucket Sort is a sorting algorithm that divides the unsorted array
 * into several groups called buckets.
 * Each bucket is then sorted by using any of the suitable sorting algorithms
 * or recursively applying the same bucket algorithm.
 * Finally, the sorted buckets are combined to form a final sorted array.
 *
 * Time Complexity
 * ---------------
 *
 * Best    O(n + k)
 * ----------------
 * It occurs when the elements are uniformly distributed in the buckets
 * with a nearly equal number of elements in each bucket.
 * The complexity becomes even better if the elements inside the buckets are already sorted.
 * If insertion sort is used to sort elements of a bucket then
 * the overall complexity in the best case will be linear ie. O(n+k).
 * O(n) is the complexity for making the buckets and
 * O(k) is the complexity for sorting the elements of the bucket
 * using algorithms having linear time complexity at the best case.
 *
 * Worst    O(n^2)
 * ---------------
 * When there are elements of close range in the array,
 * they are likely to be placed in the same bucket.
 * This may result in some buckets having more elements than others.
 * It makes the complexity depend on the sorting algorithm used to sort the elements of the bucket.
 * The complexity becomes even worse when the elements are in reverse order.
 * If insertion sort is used to sort elements of the bucket,
 * then the time complexity becomes O(n^2).
 *
 * Average    O(n)
 * ----------------
 * It occurs when the elements are distributed randomly in the array.
 * Even if the elements are not distributed uniformly,
 * bucket sort runs in linear time.
 *
 * ---------------
 * Space Complexity    O(n + k)
 * Stability    Yes
 *
 *
 * Bucket sort is used when:
 * - input is uniformly distributed over a range.
 * - there are floating point values
 */
export const bucketSort = (values: number[], bucketsNumber: number, isAsc = true) : number[] => {
    if (values.length <= 0) return values;

    const buckets: number[][] = [];

    // Add elements into the buckets
    for (let i = 0; i < values.length; i++) {
        const bucketIndex = Math.floor(values[i] * bucketsNumber);
        const bucket = buckets[bucketIndex] ?? [];
        bucket.push(values[i]);
        buckets[bucketIndex] = bucket;
    }

    // Sort the elements of each bucket
    for(const bucket of buckets) {
        if(!bucket) continue;

        if(isAsc) {
            bucket.sort((a, b) => a - b);
        }
        else{
            bucket.sort((a, b) => b - a);
        }
    }

    // Get the sorted array
    let index = 0;

    if(isAsc) {
        for (let i = 0; i < buckets.length; i++) {
            const bucket = buckets[i];
            if(!bucket) continue;

            for(let j=0; j<bucket.length; j++) {
                values[index] = bucket[j];
                index++;
            }
        }
    }
    else{
        for (let i = buckets.length - 1; i >= 0; i--) {
            const bucket = buckets[i];
            if(!bucket) continue;

            for(let j=0; j<bucket.length; j++) {
                values[index] = bucket[j];
                index++;
            }
        }
    }

    return values;
};