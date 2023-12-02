declare module 'mz-sort' {
    export const bubbleSort: (values: number[], isAsc?: boolean) => number[];
    export const selectionSort: (values: number[], isAsc?: boolean) => number[];
    export const insertionSort: (values: number[], isAsc?: boolean) => number[];
    export const mergeSort: (values: number[], isAsc?: boolean) => number[];
    export const quickSort: (values: number[], isAsc?: boolean) => number[];
}