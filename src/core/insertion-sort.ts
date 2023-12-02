/**
 * Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.
 * Insertion sort works similarly as we sort cards in our hand in a card game.
 * We assume that the first card is already sorted then, we select an unsorted card.
 * If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left.
 * In the same way, other unsorted cards are taken and put in their right place.
 * https://www.youtube.com/watch?v=EdIKIf9mHk0
 * Time Complexity
 * ---------------
 * Best    O(n)
 * Worst    O(n^2)
 * Average    O(n^2)
 * ---------------
 * Space Complexity    O(1)
 * Stability    Yes
 * ---------------
 * Number of comparisons:
 * Each element has to be compared with each of the other elements so, for every nth element, (n-1) number of comparisons are made.
 * Thus, the total number of comparisons = n*(n-1) ~ n^2
 */
export const insertionSort = (values: number[], isAsc = true) : number[] => {

    for (let i = 1; i < values.length; i++) {
        const saved = values[i];
        let j = i - 1;

        // Compare key with each element on the left of it
        // until an element smaller than it is found.
        if(isAsc) {
            while (j >= 0 && saved < values[j]) {
                values[j + 1] = values[j];
                j--;
            }
        }
        else{
            while (j >= 0 && saved > values[j]) {
                values[j + 1] = values[j];
                j--;
            }
        }

        // Place key at after the element just smaller than it.
        values[j + 1] = saved;
    }

    return values;
};