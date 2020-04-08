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
