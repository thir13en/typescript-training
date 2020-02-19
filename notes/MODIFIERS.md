### How to avoid declaring a property in the constructor and then assigning it to the same name?
Just declare the access type in the constructor and it will be available for the class.
constructor(public/private propertyName) {}

### How to make a property read only?
With the readonly modifier, which can be combined with the private modifier also: `private readonly propertyName`

### How to force child classes to force to re-implement a method if the inherited class?
On the base class:
```
    abstract class BaseClass {
        abstract methodName(...params): returnType
    }
``` 
