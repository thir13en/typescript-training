# Tricks and Hacks


### Simulate immutability
```typescript
const author = {
  name: 'Walter Isaacson',
  email: 'walter.isaacson@mail.com',
  books: [
    {
      title: 'Leonardo Da Vinci',
      price: 50.00,
    }
  ]
} as const;								// notice this castng as const value!

author.books.push({
  title: 'Steve Jobs',
  price: 10.00
});
// OUTPUT
// Property 'push' does not exist on type
// 'readonly [{ readonly title: "Leonardo Da Vinci"; readonly price: 50; }]'
```
