declare module jQuery {

    // the method for selecting DOM elements with Sizzle
    interface Sizzle {
        (selector: string): HTMLElement | undefined;
    }

    // now we will be able to import { $ } from 'jQuery';
    export const $: Sizzle;
}

