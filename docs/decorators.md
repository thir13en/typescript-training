# Decorators
They aim at writing code that is easier to use for other developers. They blackboox and
act as a helper to make sure your code becomes used in a certain way.

## How they work?
Decorators run on class definition, NOT in instance definition.

## How to pass parameters to a decorator?
With the magic of decorator factories

## You can add more than one decorator
The order of execution is bottom up, the ones that are closer to the function
get executed first.

### Which decorators can use the returned value of the decorator?
Class decorators, method decorators and accessors decorators

### Parameters associated with a Method Decorator
target, propertyKey, descriptor 


### What flag is necessary for decorators to work in Angular?
The `emitDecoratorMetadata` flag, which uses the "Reflect" library,
which is a polyfill to allow for JS to have Reflect features. Reflect registers
the decorator and makes it available for any program that wants to use it
to do so.
