# Glossary

### Decorator
### Type
### Interface
### Class
### Type definition
Type definition is a special kind of file, normally finishing in `.d.ts`, that holds the type definitions of a specific library, i.e. how does the public API look like and what types will be available for the user once the library is imported and ready to use.

### Structural Subtyping
Refers the way `Typescript` handles types, which is by structure rather than by reference, so in both the following case the compiler won't complain, because the structure of the types matches, and from a compiler perspective, `Atom` and `Particle` are the same type.
```typescript
type Atom {
	microscopic: boolean;
	material: boolean;
}
type Particle {
	microscopic: boolean;
	material: boolean;
}
const atom: Atom = {
	microscopic: true,
	material: true,
}
let particle: Particle = {
	microscopic: true,
	material: true,
}
particle = atom;	// tsc is ok with this
```