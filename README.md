# fullstack-project-one

## Building a fullstack sample application

### Verify dependencies

$ node -v

$ npm -v

$ git --version

### Step by step instructions to build the project

1. Initialialize the npm directory
    $ mkdir my-example-project
    $ cd my-example-project
    $ npm init -y

2. Install typescript
    $ npm install typescript

3. Check if typescript is working
    $ npx tsc -v

4. Run NPM scripts
    $ npm run test
    $ npm test

5. Remove node_modules folder and try reinstalling packages with
    $ rm -rf node_modules # this command works only on Git Bash / Linux / MacOS. For windows, you need to delete this folder from the project explorer
    $ npm install

6. Install development dependencies
    $ npm i --save-dev eslint prettier
        or
    $ npm i -D eslint prettier

7. Create a src folder
    $ mkdir src

8. Create a distribution (dist) directory
    $ mkdir dist

9. Create a server directory
    $ mkdir src/server

10. Create file src/server/server.ts
11. Add the following lines to the server.ts file
```
import express from "express";
console.log(express);
```
12. Execute the typescript file with tsc
    $ npx tsc src/server/server.ts
13. Install express as a project dependency
    $ npm i express
14. Compile again using the same command
    $ npx tsc src/server/server.ts
15. Run the compiled version
    $ node src/server/server.js
16. Modify the server.ts file to this code
```
import * as express from "express";
console.log(express);
```
17. Recompile and execute
    $ npx tsc src/server/server.ts
    $ node src/server/server.js
18. Install dev dependency
    $ npm i -D ts-node-dev
19. Reconfigure typescript and change the src/server.ts back to this
```
import express from "express";
console.log(express);
```
20. Copy tsconfig.json from references folder to main folder
21. Run dev server
    $ npx tsnd src/server/server.ts
22. Add script to the package.json with a convenience command as follows
```
"scripts": {
    "dev:server": "tsnd src/server/server.ts"
}
```
23. Run the dev server with the new method
    $ npm run dev:server
24. Change the server.ts code as follows
```
import express from "express"

const server = express()

server.listen("8080", "0.0.0.0", () => {
    console.info("Express server listening at http://0.0.0.0:8080");
});
```
25. Run the server
    $ npm run dev:server
26. Copy files from references/dist folder into dist folder in the main directory
    $ cp dist/favicon.ico dist/
    $ cp dist/style.css dist/
27. Add the middleware to serve static files into the express code
```
server.use(express.static("dist));
```
28. Navigate to http://localhost:8080/style.css in the browser after restarting the server
29. Add / route to express
```
server.use("/", (req, res) => {
    res.send("Hello World!!");
});
```
30. Copy prettier.config.js into the main directory
    $ cp references/prettier.config.js .
31. Install ejs as production dependency
    $ npm i ejs
32. Set view engine property to ejs on express
```
server.set("view engine", "ejs");
```
33. Change the response to render instead of send
```
server.use("/", (req, res) => {
    res.render("index");
});
```
34. Create folder views in the main directory
    $ mkdir views
35. Create a new file under views as views/index.ejs
36. Put some sample html under views/index.ejs
37. Add css link to the html
```
<link rel="stylesheet" href="style.css">
```
38. Embed some javascript
```
<%= Math.random() -%>
```
39. Pass arguments to the ejs from express
```
server.use("/", (req, res) => {
    res.render("index", {
        content: "this is from express",
    });
});
```
40. Use the passed object in EJS
```
<%= content -%>
```
41. Pass html in the content
```
server.use("/", (req, res) => {
    res.render("index", {
        content: "this is from <em>express</em>",
    });
});
```
42. Render content as html
```
<%- content -%>
```
