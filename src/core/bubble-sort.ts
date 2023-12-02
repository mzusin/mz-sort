/**
 * Bubble sort is a sorting algorithm that compares two adjacent elements
 * and swaps them until they are in the intended order.
 */
export const bubbleSort = (values: number[], isAsc = true) : number[] => {

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