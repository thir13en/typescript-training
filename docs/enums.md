# Enums


# Example
```typescript
enum Level {
    BEGINNER,
    ADVANCED
}

// autocompletion
Level.ADVANCED;
Level.BEGINNER;

// reverse mapping
// 0
Level[Level.ADVANCED];
// 1
Level[Level.BEGINNER];
```
