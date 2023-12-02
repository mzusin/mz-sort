declare module 'mz-sort' {
    export const bubbleSort: (values: number[], isAsc?: boolean) => number[];
    export const selectionSort: (values: number[], isAsc?: boolean) => number[];
    export const insertionSort: (values: number[], isAsc?: boolean) => number[];
    export const mergeSort: (values: number[], isAsc?: boolean) => number[];
    export const quickSort: (values: number[], isAsc?: boolean) => number[];
    export const countingSort: (values: number[], isAsc?: boolean) => number[];
    export const radixSort: (values: number[], isAsc?: boolean) => number[];
    export const bucketSort: (values: number[], bucketsNumber: number, isAsc?: boolean) => number[];
}