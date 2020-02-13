# typescript-training

## RECAP
* ! at the end of a value to assert non null
* as keyword for type casting
* In some cases the "unknown" type can be more specific than the "any" type
* To freely assign a variable with unknown type to any other type variable, you should do a Javascript
    type checking
* In some cases the "never" type can be more specific than the "any" type

#### How to run the Typescript compiler in watch mode?
tsc <filename> -w

#### How to initialize Typescript project?
tsc --init

#### How to exclude any file with a certain filename pattern in any folder?
in the exclude array of our tsconfig we add: "**/*<file.pattern>"

If we don't set the exclude array, by default typescript ignores the node_modules folder,
also interesting to note that once we set the include array in tsconfig, then any file or
file pattern which is not in this array, won't be compiled in our typescript project. In case
we don't set this array, then all files with the typescript extension will be compiled if they are
not in the exclude array. Exclude array has MORE priority than includes array.

### How to make sure a function receives a certain execution context?
We set an argument, which is a Typescript reserved word, as this: functionName(this: ContextType), this
argument does not have to be passed later and Typescript knows it is a context binding.

### How to avoid declaring a property in the constructor and then assigning it to the same name?
Just declare the access type in the constructor and it will be available for the class.
constructor(public/private propertyName) {}

