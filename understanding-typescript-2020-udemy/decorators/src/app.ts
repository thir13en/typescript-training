// our decorator
// starts with capital letter
// the target holds the constructor function of the target class
function Logger(constructor: Function) {
    console.log(constructor);
}

// decorator factories allows us to create configurable decorators
function LoggerFactory(logString: string) {
    return (constructor: Function) => {
        console.log(logString);
        console.log(constructor);
    }
}


@Logger
class Genious {
    name!: 'Santi';

    constructor() {
        console.log('my name is ' + this.name)
    }
}

@LoggerFactory('here I come')
class ElocuentGenious {
    name!: 'Santi';

    constructor() {
        console.log('my name is ' + this.name)
    }
}

// an example of a decorator that injects template
function WithTemplate(template: string, hookId: string): (constructor: Function) => any {
    // we can use underscore when we don't need to access the underlying class
    // return function (_: Function) {
    // used any to allow for new constructor
    return function (constructor: any) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();

        if (hookEl) {
            // hookEl.innerHTML = template;
            console.log(template);
            hookEl.innerHTML = p.name;
        }
    }
}

@WithTemplate('<h1>hello world</h1>', 'hooked')
class Injected {
    name = 'Santi';

    constructor() {
        console.log('my name is ' + this.name)
    }
}


// multiple decorators can be applied to the same function, yay! composability!
@LoggerFactory('This will run last, since decorators are evaluated bottom up!')
@WithTemplate('<h1>hello world</h1>', 'hooked')
class MultiInjected {
    name = 'Santi';

    constructor() {
        console.log('my name is ' + this.name)
    }
}

// when you create a property decorator, the decorator receives two arguments
// the decorator is executed in the moment where the class is declared, NOT when it is instantiated
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
class Product {
    @Log
    title!: string;
    set price(val: number) {
        if (val > 0)
            this._price = val;
        else throw new Error('Price should be positive!');
    }

    constructor(private _price: number) {}

    getPriceWithTag(tax: number) {
        return  this._price * (1 + tax);
    }
}
