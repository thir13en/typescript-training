# ES6 Imports

### Import types
* Named Imports
```javascript
import { name } from './path/to/file.js'
```
* Aliased Named Imports
```javascript
import { name as alias } from './path/to/file.js'
```
* Grouped Imports
```javascript
import * as grouped from './path/to/file.js'
```
* Default Imports
```javascript
import defaultExport from './path/to/file.js'
```

### When an import is shared across multiple files...
It only runs or is evaluated once in the first import, then all other imports
work with the same instance

### Cross Browser Support
To avoid multiple http request and ensure support in older browsers,
it is generally a good idea to rely on module bundlers such as `Webpack`.
