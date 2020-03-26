### How to avoid declaring a property in the constructor and then assigning it to the same name?
Just declare the access type in the constructor and it will be available for the class.
constructor(public/private propertyName) {}

### How to make a property read only?
With the readonly modifier, which can be combined with the private modifier also: `private readonly propertyName`

### Can we extend multiple contracts in classes?
No, there is not such thing as multiple inheritance in Typescript, you can thou, create an Interface that
extends from multiple interfaces, giving us the possibility of create a contract that is the composition of multiple other
contracts.
