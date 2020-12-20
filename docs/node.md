# Node


### Run node with typescript in watch mode
You should have a `package.json` which looks as follows regarding dependencies and scripts:
```json
{
  "name": "typescript-training-server",
  "version": "1.0.0",
  "description": "typescript training server",
  "scripts": {
    "start": "./node_modules/.bin/ts-node src/server.ts",
    "watch": "./node_modules/.bin/nodemon -w . --ext \".ts\" --exec \"npm run start\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "thir13en",
  "license": "ISC",
  "dependencies": {
    "body-parser": "~1.19.0",
    "express": "~4.17.1",
    "human-readable-ids": "~1.0.4",
    "lodash": "~4.17.15",
    "pg": "~8.0.3",
    "pg-hstore": "~2.3.3",
    "sequelize": "~5.21.7"
  },
  "devDependencies": {
    "@types/bluebird": "^3.5.32",
    "@types/express": "~4.17.6",
    "@types/node": "~13.13.4",
    "@types/sequelize": "~4.28.8",
    "nodemon": "~2.0.3",
    "ts-node": "~8.9.1",
    "typescript": "~3.8.3"
  }
}
```