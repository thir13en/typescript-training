# tsconfig.json config


### What are the default libs that typescript ships if we don't set up the lib array?
```json
"lib": [
  "dom",
  "dom.iterable",
  "es6",
  "scripthost"
],
```

### What property would you use to avoid compiling if there is an error?
noEmitOnError

### On moduleResolution option
`moduleResolution: 'node'` ensure that the import paths will work exactly the same way in the browser as in a node runtime.
