// necessary to use the variable name "name", otherwise collides with a global dom typing from TS
export {};

const name = 'Bruh';

(document.querySelector('#name') as HTMLSpanElement)!.innerText = name;
