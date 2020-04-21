# Generics

### An example generic function
```typescript
// We name generic types with Capital letters of the alphabet,
// starting with T and then following alphabetical order
function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign(objA, objB);
}
// Typescript will be able to infer the return type in this case
```
