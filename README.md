# fullstack-project-one

# Day 1 - Install dependencies

- git
- node
- github desktop app
- clone repo

# Day 2 - experiment with node and express

- Initialise directory and install express
  - `mkdir express-example`
  - `cd express-example`
  - `npm init -y`
  - `npm install express@4.17.1`

- Write sample server
  - open `server.js`
  - write the following code
```
const express = require('express');

const app = express();
```

- modify
```
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});
```

- modify
```
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
```

- run server
```
node server.js
```

- Use middleware
```
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.get('/exam', (req, res) => {
  res.send('Successful response.'); // read and write
});

app.get('/results, (req, res) => {
  res.send('Successful response.'); // read permission for students, write permission for lecturers
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
```

- modify
```
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.use('/results', (req, res, next) => {
# check if the person is authenticated 
  # check if the person has permission for this resource
  console.log('Request type: ', req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
```

- install utility package
```
npm install serve-index@1.9.1
```

- modify code to use the utility package
```
const express = require('express');
const serveIndex = require('serve-index');

const app = express();

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.use('/request-type', (req, res, next) => {
  console.log('Request type: ', req.method);
  next();
});

app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
```

# Day 3 - Building a fullstack sample application

- Verify dependencies
  - `node -v`
  - `npm -v`
  - `git --version`

- Initialialize the npm directory
  - `mkdir my-example-project`
  - `cd my-example-project`
  - `npm init -y`

- Install typescript
  - `npm install typescript`

- Check if typescript is working
  - `npx tsc -v`

- Run NPM scripts
  - `npm run test`
  - `npm test`

- Remove node_modules folder and try reinstalling packages with
  - `rm -rf node_modules`  Note: this command works only on Git Bash / Linux / MacOS. For windows, you need to delete this folder from the project explorer
  - `npm install`

- Install development dependencies
  - `npm i --save-dev eslint prettier`
        or
  - `npm i -D eslint prettier`

- Create a src folder
  - `mkdir src`

- Create a distribution (dist) directory
  - `mkdir dist`

- Create a server directory
  - `mkdir src/server`

- Create file `src/server/server.ts`
- Add the following lines to the `server.ts` file
```
import express from "express";
console.log(express);
```
- Execute the typescript file with tsc
  - `npx tsc src/server/server.ts`

- Install express as a project dependency
  - `npm i express`

- Compile again using the same command
  - `npx tsc src/server/server.ts`

- Run the compiled version
  - `node src/server/server.js`

- Modify the `server.ts` file to this code
```
import * as express from "express";
console.log(express);
```

- Recompile and execute
  - `npx tsc src/server/server.ts`
  - `node src/server/server.js`

- Install dev dependency
  - `npm i -D ts-node-dev`

- Reconfigure typescript and change the `src/server.ts` back to this
```
import express from "express";
console.log(express);
```

- Copy `tsconfig.json` from `references` folder to main folder

- Run dev server
  - `npx tsnd src/server/server.ts`

- Add script to the `package.json` with a convenience command as follows
```
"scripts": {
    "dev:server": "tsnd src/server/server.ts"
}
```

- Run the dev server with the new method
  - `npm run dev:server`

- Change the `server.ts` code as follows
```
import express from "express"

const server = express()

server.listen("8080", "0.0.0.0", () => {
    console.info("Express server listening at http://0.0.0.0:8080");
});
```

- Run the server
  - `npm run dev:server`

- Copy files from `references/dist` folder into `dist` folder in the main directory
  - `cp dist/favicon.ico dist/`
  - `cp dist/style.css dist/`

- Add the middleware to serve static files into the express code
```
server.use(express.static("dist));
```

- Navigate to `http://localhost:8080/style.css` in the browser after restarting the server

- Add `/` route to express
```
server.use("/", (req, res) => {
    res.send("Hello World!!");
});
```

- Copy `prettier.config.js` into the main directory
  - `cp references/prettier.config.js .`

- Install `ejs` as production dependency
  - `npm i ejs`

- Set `view engine` property to ejs on express
```
server.set("view engine", "ejs");
```

- Change the response to `render` instead of `send`
```
server.use("/", (req, res) => {
    res.render("index");
});
```

- Create folder `views` in the main directory
  - `mkdir views`

- Create a new file under views as `views/index.ejs`

- Put some sample html under `views/index.ejs`

- Add css link to the html
```
<link rel="stylesheet" href="style.css">
```

- Embed some javascript
```
<%= Math.random() -%>
```

- Pass arguments to the ejs from express
```
server.use("/", (req, res) => {
    res.render("index", {
        content: "this is from express",
    });
});
```

- Use the passed object in EJS
```
<%= content -%>
```

- Pass html in the content
```
server.use("/", (req, res) => {
    res.render("index", {
        content: "this is from <em>express</em>",
    });
});
```

- Render content as html
```
<%- content -%>
```

# Day 4 -

- create a file called `config.ts` inside `src` folder with content
```
console.log("Config...");
```

- import `config.ts` inside `server.ts`
```
import "./config";
```

- export something from the config module
```
export default {
    test: true,
}
```

- import exported variables from config module like follows
```
import config from "./config";
console.log({ config });
```

- export named constants
```
export const PORT = "8080";
```

- import named constants
```
import config, { PORT } from "./config";
console.log({PORT});
```

- export a function from config
```
export default () => ({
    test: true,
});
```

- call the exported function
```
import config from "./config";
console.log(config());
```

- read config from process environment
```
const env = process.env;
export const PORT = env.PORT ?? "8080";
export const HOST = env.HOST ?? "0.0.0.0";
export const SERVER_URL = `http://${HOST}:${PORT}/`;
export default {
    PORT,
    HOST,
    SERVER_URL,
}
```

- use the config from config module
```
import os from "node:os";
import config from "./config";
...
...
server.listen(config.PORT, config.HOST, () => {
    console.info(`Express server listening at: ${config.SERVER_URL}`, `Free Memory: ${os.freemem()}`);
})
```

- Run the server with overriden env variables
  - `PORT=3000 npm run dev:server`



