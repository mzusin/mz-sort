import { bubbleSort } from './core/bubble-sort';


const api = {
    bubbleSort,
};

declare global {
    interface Window {
        mzSort: typeof api,
    }
}

window.mzSort = window.mzSort || api;

export * from './core/bubble-sort';