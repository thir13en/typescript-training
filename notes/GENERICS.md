# Generics

### An example generic function
```typescript
// We name generic types with Capital letters of the alphabet,
// starting with T and then following alphabetical order
function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign(objA, objB);
}
// Typescript will be able to infer the return type in this case
const merged = merge({name: 'Homer'}, {hobbies: ['doughnuts']});

// now this compiles without errors
console.log(merged.name);

// We can also be specific on which types these Generics will have
const specificMerge = merge<string, number>('Homer', 55);
```
