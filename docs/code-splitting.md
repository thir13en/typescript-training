# Code Splitting

We have 3 options:
* Split js code and import it in HTML. This is NOT the way.
* Namespaces & file bundling -> TypeScript feature that group code and allow to import it
into another file. At compile time, TypeScript ends up bundling all files into a single one
in order to have less chaos to manage. This is kinda DEPRECATED.
* ES6 import/export statements. Per file compilation and single import. The main drawback is that this
approach results in more network load since you need to download files independently, and this it is better
to bundle files together and for this we need a third party tool such as `Webpack` or `Parcel`.

### Namespaces
First, you need to create a file with a namespace holding all your exported stuff
```typescript
namespace NamespaceName {
    export interface Whatever {
      
    }
    export class AnotherStuff {
      
    }
    export function canAlsoConsiderFunctions() {
      
    }
}
```
And in the file you want to import them to...
```typescript
// notice the triple forward slash
/// <reference path="./path/to/file" />

namespace NamespaceName {
    // your code inside with all the namespace types available
}
```
You can create more than one file with the `NamespaceName` namespace and import many of them in the
TypeScript shown syntax.  
To make code in the namespaces available, you should enable the `outFile` flag,
which will make the TypeScript compiler to include the code of the namespaces in the final bundle. Remember to 
give a name to the file.
```json
{
  "module": "amd",
  "outFile": "./dist/bundle.js"
}
```
It is needed to change the moduling type to `amd`.
