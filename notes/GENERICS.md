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
### Type Constraints for Generics
```typescript
// sometimes we want to enforce generics to belong to a certain subset of types
function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign(objA, objB);
}
// Now we make sure that regardless of the structure, both are objects
const merged = merge({name: 'Homer'}, {hobbies: ['doughnuts']});

console.log(merged.name);

// this now will fail
const specificMerge = merge<string, number>('Homer', 55);
```
