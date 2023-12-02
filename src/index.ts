import { bubbleSort } from './core/bubble-sort';
import { selectionSort } from './core/selection-sort';
import { insertionSort } from './core/insertion-sort';
import { mergeSort } from './core/merge-sort';
import { quickSort } from './core/quick-sort';
import { countingSort } from './core/counting-sort';

const api = {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    quickSort,
    countingSort,
};

declare global {
    interface Window {
        mzSort: typeof api,
    }
}

window.mzSort = window.mzSort || api;

export * from './core/bubble-sort';
export * from './core/selection-sort';
export * from './core/insertion-sort';
export * from './core/merge-sort';
export * from './core/quick-sort';
export * from './core/counting-sort';