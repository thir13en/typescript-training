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
