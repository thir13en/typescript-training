# Features

### The Rest Operator
Always at the end, specifies an unknown number of parameters of unknown type:
```typescript
function foo(...params: any[]): void {
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

### String Literal types
```tyescript
type World = "world";

type Greeting = `hello ${World}`;
//   ^ = type Greeting = "hello world"
```
Situation where this might shine:
```tyescript
type Color = "red" | "blue";
type Quantity = "one" | "two";

type SeussFish = `${Quantity | Color} fish`;
//   ^ = type SeussFish = "one fish" | "two fish" | "red fish" | "blue fish
```
Or... :O
```typescript
type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

// Takes
//   | "top-left"    | "top-center"    | "top-right"
//   | "middle-left" | "middle-center" | "middle-right"
//   | "bottom-left" | "bottom-center" | "bottom-right"

declare function setAlignment(value: `${VerticalAlignment}-${HorizontalAlignment}`): void;

setAlignment("top-left");   // works!
setAlignment("top-middel"); // error!
Argument of type '"top-middel"' is not assignable to parameter of type '"top-left" | "top-center" | "top-right" | "middle-left" | "middle-center" | "middle-right" | "bottom-left" | "bottom-center" | "bottom-right"'.

setAlignment("top-pot");    // error! but good doughnuts if you're ever in Seattle
Argument of type '"top-pot"' is not assignable to parameter of type '"top-left" | "top-center" | "top-right" | "middle-left" | "middle-center" | "middle-right" | "bottom-left" | "bottom-center" | "bottom-right"'.
```