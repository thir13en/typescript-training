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

### The keyof constraint
A constraint to guarantee that a certain key is a property
of an object.
```typescript
function extractAndConvert<T extends object, U keyof T>(obj: T, key: U): string {
    return 'value ' + obj[key];
}
```

### An example of a generic class and why is it useful
```typescript
class DataStorage<T extends string | number> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			this.data.splice(this.data.indexOf(item), 1);
		}
	}

	getItems() {
	 return { ...this.data };
	}

}

const textStorage = new DataStorage<string>();
``` 

### The Partial type: a special and handy king of generic.
It receives a generic type and turn all it's properties into optional.
```typescript
interface Typed {
    one: string,
    two: boolean,
}

// throws compilation error cause two is missing
const rocco: Typed = {};
rocco.one = 'something';

// no compile time errors, all properties are optional!
const rocco2: Partial<Typed> = {};
rocco2.one = 'dubaiiii';

```

### The Readonly type, another really helpful generic
It makes a certain object or reference of readonly type.
```typescript
const names = ['Me', 'Natalia'];
names.push('Laura');
// works even thou is a const

const lockedNames: Readonly<string[]> = ['Me', 'Natalia'];
lockedNames.push('Laura');
// will fail since lockedNames is Readonly. 
```

### The `ReadonlyArray` type, bringing immutability powers to Arrays
```typescript
type Author = Readonly<{
  name: string;
  email: string;
  // notice that it already knows that this is a Book Array
  books: ReadonlyArray<Book>;
}>;

```

### More info on utility types:
[Follow this link](https://www.typescriptlang.org/docs/handbook/utility-types.html)

### Interesting Resources
[Advanced Typescript Type Tricks](https://casualdeveloper.net/post/2020-12-21-advanced-typescript-type-tricks/)
