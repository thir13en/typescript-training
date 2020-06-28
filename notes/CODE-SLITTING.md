# Code Splitting

We have 3 options:
* Split js code and import it in HTML. This is NOT the way.
* Namespaces & file bundling -> TypeScript feature that group code and allow to import it
into another file. At compile time, TypeScript ends up bundling all files into a single one
in order to have less chaos to manage. This is kinda DEPRECATED.
* ES6 import/export statements. Per file compilation and single import. The main drawback is that this
approach results in more network load since you need to download files independently, and this it is better
to bundle files together and for this we need a third party tool such as `Webpack` or `Parcel`.
