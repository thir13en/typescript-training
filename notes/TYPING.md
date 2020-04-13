In Typescript, types are defined by a collection of it's properties. This is known as Structural 
Subtyping

### Intersection types
Intersection types can be also achieved by interface extension, but there is a custom syntax for this one:  
`const name: Type1 & Type2`

### Type Guards
We can make sure a certain type is used in a type that is a composition of several types such as
Union Types, by a checking pattern named Type Guard
```
type Combined = Type1 | Type2 // Type2 has property1 which Type1 does not

const com: Combined

// notice the string in the property name
if ('property1' in com) {
    // logic that belongs to Type2
}
```

### Class type checking
For classes you would use the following syntax:  
`ìf instance instanceof ClassName;`

### Discriminated Union types
Adds some syntactic sugar for determining which properties can we use
in union types. First we set a type property in every element.
```
interface Bird {
    type: 'bird',
    flyingSpeed: 200
}
interface Horse {
    type: 'horse',
    runningSpeed: 50
}

type Animal: Bird | Horse;

moveAnimal(animal: Animal) {
    let speed: number;
    switch (animal.type) {
        // we get intellisense here
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            breaK;
        default:
            break;
    }
}

// we get intellisense and type checking here
moveAnimal({ type: 'bird', flyingSpeed: 120 });
```
### Type Casting
expression as TypeCasted

# Index Properties
Useful when we don't know how many properties an interface will have,
but we know the type. The syntax is as follows:
```typescript
    interface Name {
        // allows to receive many properties whose name can be evaluated
        // as a string, and ALL of them will be of type string.
        [prop: string]: string
    }
```

### Function Overload
You can call a function defining several possible input parameters and types
```typescript
function add(a: number, b:number): number;
function add(a: string, b:string): string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return a.toString() + b.toString();
}
```

### Optional Chaining
Check if attributes are set with the Optional Chaining Operator `?`:
```typescript
const example = object.with?.uncertain?.properties;
```

