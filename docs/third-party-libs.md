# Third Party Libs


### The multiple scenarios for Typescript Type Definitions?

In `typescript`, when using a third party library there are now essentially **4 scenarios** in what concerns type definitions:

1. No type definitions of any kind are available
1. Type definitions are available and shipped together with the compiler itself
1. A library does not ship with type definitions, but they can be installed separately
1. A library ships with its own type definitions built-in

### How are types in typescript managed?
When there are packages for type definitions, such as in the case of `node`. they are contained within the `@types` **scoped package**. The **Typescript compiler** will implicitly take any type definitions installed inside the `node_modules/@types` folder and **include it during compilation transparently**. Before looking for external type definition for any library:
1. Check if the package you are using already has types built-in, and if so prefer those
1. Check if type definitions are already shipped with the compiler, more on this later

