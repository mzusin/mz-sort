import { bubbleSort } from './core/bubble-sort';
import { selectionSort } from './core/selection-sort';
import { insertionSort } from './core/insertion-sort';
import { mergeSort } from './core/merge-sort';

const api = {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
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