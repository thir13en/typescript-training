// our decorator
// starts with capital letter
// the target holds the constructor function of the target class
function Logger(target: Function) {
    console.log(target);
}


@Logger
class Genious {
    name!: 'Santi';

    constructor() {
        console.log('my name is ' + this.name)
    }
}
