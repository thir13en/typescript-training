### Typing

In Typescript, types are defined by a collection of it's properties. This is known as [Structural 
Subtyping](glossary.md).

### In the old times, there where Namespaces
Namespaces are type definition structures still supported but **no longer recommended**. Instead
we should use the built in `ES6 Import/Export` features to do so. This is kind of a 
**legacy feature**.

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
Done using the as `keyword`.
```typescript
expression as TypeCast
```

### Index Properties
Useful when we don't know how many properties an interface will have,
but we know the type. The syntax is as follows:
```typescript
    interface Name {
        // allows to receive many properties whose name can be evaluated
        // as a string, and ALL of them will be of type string.
        [prop: string]: string
    }
```

### Type Predicates
 Type predicates are a special return type that signals to the Typescript compiler what type a particular value is. Type predicates are always attached to a function that takes a single argument and returns a boolean.
```typescript
interface Cat {
  numberOfLives: number;
}
interface Dog {
  isAGoodBoy: boolean;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return typeof animal.numberOfLives === 'number';
}

```
Since this function returns a boolean and includes the type predicate animal is `Cat`, the Typescript compiler will correctly cast the animal as `Cat`

### The never type
Can be assigned to any kind of variable but tolerates no assignments.

### Using declare as a last resort
If you know you will have some variables available but have no typing for them, you can declare them
in order for the typescript compiler not to complain.
```typescript
declare var GLOBAL: string;
```