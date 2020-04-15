# OPERATORS

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

### Nullish Coalescing
Check if a symbol name points to null or undefined and apply fallback value in that
case:
```typescript
const another;
const symbol = another ?? 'Fallback-value';
```
