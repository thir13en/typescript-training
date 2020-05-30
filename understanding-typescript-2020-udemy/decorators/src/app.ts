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
// Actually, if we are dealing with an accessor we can receive up to three arguments
function LogNew(target: any, name: string, property: PropertyDescriptor) {
    console.log('LogNew Decorator');
    console.log(target);
    console.log(name);
    console.log(property);
}
function LogMethod(target: any, name: string | Symbol, property: PropertyDescriptor) {
    console.log('LogNew Decorator');
    console.log(target);
    console.log(name);
    console.log(property);
}
function LogParameter(target: any, name: string | Symbol, position: number) {
    console.log('LogNew Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    @Log
    title!: string;
    @LogNew
    set price(val: number) {
        if (val > 0)
            this._price = val;
        else throw new Error('Price should be positive!');
    }

    constructor(private _price: number) {}

    @LogMethod
    getPriceWithTag(@LogParameter tax: number) {
        return  this._price * (1 + tax);
    }
}

function WithTemplateOverride(template: string, hookId: string) {
    /**
     * if you return something inside of the return function, you will OVERRIDE the constructor function
     * of the class that receives this decorator, you can do so via the CLASS JavaScript, which at the end
     * of the day is only syntactic sugar for constructor functions.
     */
    return function<T extends { new(...args: any[]): {name: string} }>(originalConstructor: T) {
        // The cream comes here
        return class extends originalConstructor {
            // constructor(...args: any[]) {
            // this tells typescript we know we don't use args and we can ignore them
            constructor(..._: any[]) {
                // we must invoke the original constructor
                super();
                /**
                 * now the template will ONLY be rendered if we INSTANTIATE this class
                 * and not at declaration time.
                 */
                const hookEl = document.getElementById(hookId);

                if (hookEl) {
                    // hookEl.innerHTML = template;
                    console.log(template);
                    hookEl.innerHTML = this.name;
                }
            }
        }
    }
}

// A more succinct example from Stack Overflow
function DecoratorName(attr: any) {
    return function _DecoratorName<T extends {new(...args: any[]): {}}>(constr: T){
        return class extends constr {
            constructor(...args: any[]) {
                super(...args)
                console.log('Did something after the original constructor!')
                console.log('Here is my attribute!', attr.attrName)
            }
        }
    }
}

@WithTemplateOverride('<h1>hello world</h1>', 'hooked')
class Person {
    name = 'Santi';

    constructor() {
        console.log('my name is ' + this.name)
    }
}

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]; // ['required', 'positive'...]
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    const previousValidators =
        registeredValidators[target.constructor.name] && registeredValidators[target.constructor.name][propName] ?
            [...registeredValidators[target.constructor.name][propName]] : []

    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...previousValidators, 'required'],
    }
}
function PositiveNumber(target: any, propName: string) {
    const previousValidators =
        registeredValidators[target.constructor.name] && registeredValidators[target.constructor.name][propName] ?
            [...registeredValidators[target.constructor.name][propName]] : []

    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...previousValidators, 'positive'],
    }
}
function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];

    if (!objValidatorConfig) {
        return true;
    }

    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
                default:
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    name: string;
    @PositiveNumber
    price: number;

    constructor(n: string, p: number) {
        this.name = n;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const course = new Course(title, price);

    if (!validate(course)) {
        alert('Validation failed!');
    } else {
        console.log('Validation successful for', course);
    }
})

