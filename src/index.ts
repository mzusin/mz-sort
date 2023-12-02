import { aaa } from './core/main';


const api = {
    aaa,
};

declare global {
    interface Window {
        mzSort: typeof api,
    }
}

window.mzSort = window.mzSort || api;

export * from './core/main';