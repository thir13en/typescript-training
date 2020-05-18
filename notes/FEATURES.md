# Features

### The Rest Operator
Always at the end, specifies an unknown number of parameters of unknown type:
```typescript
function foo(...params: any): void {
    // your logic
}
```

### Typescript reverse mapping of an enum (Finally!!!!)
You can reverse map the value of an enum following this pattern:
```typescript
enum Games {
    Tetris,
    Mario,
    Sonic
}

// To get the first value you do:
console.log(Games[Games.Tetris]);
// Tetris
```
