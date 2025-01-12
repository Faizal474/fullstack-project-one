# fullstack-project-one

# Section 1 - Install dependencies

- git
- node
- github desktop app
- clone repo

# Section 2 - experiment with node and express

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

# Section 3 - Building a fullstack sample application

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

# Section 4 -

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

- Install Docker Desktop
  - [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/)

- Run mongodb container using Docker desktop

- Install mongodb compass for GUI access to mongodb
  - [MongoDB Compass](https://www.mongodb.com/try/download/compass)

- add mongodb URI and db name to the config
```
export const MONGODB_URI = env.MONGODB_URI ?? "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";
export default {
    ...
    MONGODB_URI,
}
```

- Install mongodb driver package for nodejs
  - `npm i mongodb`

- create a file `src/db.ts` with the following code
```
import { MongoClient } from "mongodb";
import { MONGODB_URI, DATABASE_NAME } from "./config";

let connectedClient = null;

export const connectClient = async () => {
    if (connectedClient) {
        return connectedClient.db(DATABASE_NAME);
    }
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    await client.db(DATABASE_NAME).command({ping: 1});
    console.info("Connected to MongoDB");

    connectedClient = client;
    return connectedClient.db(DATABASE_NAME);
};

export const stopClient = async () => {
    await connectedClient?.close();
};

```

- populate the sample db content from reference data
  - copy files from `src/dev` into main folder with cmd: `cp -r src/dev src/` Note: this works only on linux. For windows, we need to copy the folder with the explorer or VSCode Project Explorer
  - run the db sample data generation script with
    - `npx tsnd src/dev/load-test-data.ts`

- verify data in `local` db with mongodb compass GUI


# Section 5 - Using React for building frontend

- create a file called `index.tsx` under `src`directory with the following content
```
const App = () => {
    return (
        <div>Hello from React</div>
    );
};
```

- install `react` and `react-dom`as production dependencies
  - `npm install react react-dom`

- modify the `index.tsx` with the following
```
import { createRoot } from "react-dom/client";
....
const container = document.getElementById("app");

const root = createRoot(container);
root.render(<App />);
```

- modify index.ejs with the following code snippet
```
<div id="app"> <%- content -%> </div>
```

- Install bundler `webpack` for bundling multiple javascript files and for efficiency
  - `npm i webpack webpack-cli`
  - also install `ts-loader` with `npm i ts-loader`

- move the config file `webpack.config.js` from reference folder into the main folder
  - `mv references/webpack.config.js .`

- add one more convenience script in `package.json`
```
"dev:bundler": "webpack -w --mode=development"
```

- run the server
  - `npm run dev:server`

- run webpack bundler
  - `npm run dev:bundler`

- include the generated `main.js` inside the `index.ejs` file
```
<body>
...
    <script src="main.js"></script>
</body>
```

- reload the page

- copy `.gitignore`, `.eslintignore`, `.eslintrc.js` files from reference folder to main folder

- configure eslint by copying the eslintrc file and installing the dependent packages
  - `npm i @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks`
  - convert the above dependencies as development dependencies with
    - `npm i -D @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks`

# Section 6 - 

- include dynamic content in JSX `index.tsx`
```
<div>
    <h1>Hello From React </h1>
    <h2>With JSX </h2>
    Math.random()
</div>
```

- add conditional rendering
```
{Math.random() > 0.5 && <h2> this is a conditional render </h2>}
```

- render an array in a for loop
```
const TODOs = ["my task 1", "my task 2", "my task 3"];
{
    TODOs.map((element) => {
        return <li>element</li>
    });
}
```

- using `<></>` empty tags to render multiple items
```
<>
    <li>My task 1</li>
    <li>My task 2</li>
</>
```

- adding style to an element
```
<div style={{color: "green"}}></div>
```

- assigning a class to an html element
```
<div className="hello"></div>
```

- using components for reusability
```
...
<div className="container">
    <div className="header">
        Certification Programmes
    </div>
</div>
```

- create a component
```
const Header = () => {
    return (
        <div className="header">
            Certification Programmes
        </div>
    );
};

...
<div className="container">
    <Header />
</div>
```

- pass the content as attribute to the component
```
<div className="container">
    <Header message="Certification Programmes"/>
</div>
```

- modify the component to accept the props as argument
```
const Header = (props) => {
    return (
        <div className="header">
            {props.message}
        </div>
    );
};
```

- destructure the props argument
```
const Header = ({message}) => {
    return (
        <div className="header">
            {message}
        </div>
    );
};
```

- move the reusable components into their own files

- create a folder named `components` under `src` folder
  - `mkdir src/components`

- create files named `src/components/app.tsx` and `src/components/header.tsx`

- move the header component into `header.tsx`
```
const Header = (props) => {
    return (
        <div className="header">
            {props.message}
        </div>
    );
};

export default Header;
```

- move the app component into `app.tsx`
```
import Header from "./components/header";

const App = () => {
    return (
        <div className="container">
            <Header message="Certification Programmes" />
        </div>
    );
};

export default App;
```

- modify `index.tsx` as follows
```
import {createRoot} from "react-dom/client";

import App from "./components/app";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
```

- install browser extension "React Developer Tools" in chrome browser

# Section 7 - State Management in React

- React hooks - `useState`, `useEffect` ... `use*`
- using `useState`
```
import {useState} from "react";

const [counter,setCounter] = useState(0);
...
<button onClick={()=> {
  console.log("Clicked");
  setCounter(counter + 1);
}}>{counter}</button>
```

- side effects with `useEffect`
```
useEffect(() => {
  console.log("App component rendered");

  const intervalId = setInterval(() => {
    setCounter(counter + 1);
  }, 1000);

  return () => {
    clearInterval(intervalId);
  }
});

useEffect(() => {
  console.log("log only once");
}, [])


useEffect(() => {
  console.log("log everytime the counter value changes");
}, [counter])
```

- integrating with backend `GET`, `POST`, `PUT`, `DELETE`
```
server.get("/", (req, res) => {
    res.render("index", {
        content: "this is from express",
    });
});
```
- creat a file name `api-router.ts` inside the `server` folder
```
import express from "express";

const router = express.Router();

router.get("/certifications", (req, res) => {
  // get the data from MongoDB
  res.send([]);
});

export default router;
```

- import the api router inside server.ts
```
import apiRouter from "./api-router";
...
...
server.use("/api", apiRouter);
...
```
- export the test data from mongodb into a json file
- import test data into api-router.ts
```
import testData from "../test-data.json";
...

router.get("/certifications", (req, res) => {
  res.send(testData);
});
```


- configure the API server URL in
- create a file under `src` with name `public-config.ts` with the following content
```
export const PORT = process.env.PORT;
export const HOST = process.env.HOST;
export const API_SERVER_URL = ""http://${HOST}:${PORT}/api";
```

- configure webpack to pick the process env
- open `webpack.config.js` and add
```
const webpack = require("webpack");
...
plugins: [
  new webpack.EnvironmentPlugin({
    HOST: "0.0.0.0",
    PORT: "8080"
  })
]
```

- use `fetch` or `axios` to fetch data from the API server in `index.tsx`
```
import axios from "axios";
````
- install `axios` as a production dependency
  - `npm i axios`

- use `axios` to fetch data
```
import {API_SERVER_URL} from "./public-config";
....
axios.get(`${API_SERVER_URL}/certifications`)
  .then((resp) => {
    console.log(resp);
  })
```

- install and use cors middleware for express
  - `npm i cors`
- modify `api-router.ts`
```
import cors from "cors";
....
router.use(cors())
```

# Section 8 - Using the API data in react UI

- move the render call inside callback function of axios
```
axios.get(`${API_SERVER_URL}/certifications`)
  .then((resp) => {
    console.log(resp);
    root.render(<App initialData={{ certifications: resp.data.certifications }} />);
  })
```

- modify `api-router.ts`
```
res.send({certifications: testData});
```

- modify App component to accept `initialData` as a prop
```
const App = (({initialData}) => {
  console.log({initialData});
  return ....
});
```

- implement dynamic rendering
```
const App = (({initialData}) => {
  return (
    <div className="container">
      <Header message="My Certifications" />
      <div className="certifications-list">
        {initialData.certifications}
      </div>
    </div>
  );
});
```

- iterate through the data and display each certification separately
```
{initialData.certifications.map((certification) => {
  return (
    <div className="certification-preview">
      <div className="category">
        {certification.categoryName}
      </div>
      <div className="certification">
        {certification.certificationName}
      </div>
    </div>);
})}
```

- move the code into a separate component and make it reusable
```
<CertificationList />
```

- create a file called `certification-list.tsx` inside `components` directory with the following content
```
const CertificationList = ({certifications}) => {
  return (
    <div className="certifications-list">
      {certifications.map((certification) => {
          return(
            <div className="certification-preview">
              <div className="category">
                {certification.categoryName}
              </div>
              <div className="certification">
                {certification.certificationName}
              </div>
            </div>);
        })}
    </div>
  );
};

export default CertificationList;
```

- remove old code from `app.tsx` and replace it with
```
import CertificationList from "./components/certification-list";
<CertificationList certifications={initialData.certifications}/>
```
- extract certification preview also into it's own component `certification-preview.tsx`
```
const CertificationPreview = ({certification}) => {
  return (
    <div className="certification-preview">
      <div className="category">
        {certification.categoryName}
      </div>
      <div className="certification">
        {certification.certificationName}
      </div>
    </div>
  );
};
export default CertificationPreview;
```

- modify the certification-list component as follows
```
import CertificationPreview from "./certification-preview";
....
<CertificationPreview certification={certification}/>
```

- add the key to each list item for efficiency
```
<CertificationPreview key={certification.id} certification={certification}/>

```
- declare the type for the CertificationPreview component
```
import * as React from "react";
...
const CertificationPreview: React.FC<{ certification: object }> = ({certification}) => {
....
}
```

- or use `any` type to liberally use any type

# Section 9 - Loading data while react is rendering without waiting for the data

- move the axios call inside CertificationsList component
```
import axios from "axios";
import {useEffect, useState} from "react";
....

const [certifications, setCertifications] = useState([]);

useEffect(() => {
  debugger;
  axios.get(`${API_SERVER_URL}/certifications`)
    .then((resp) => {
      setCertifications(resp.data.certifications);
    })
}, []);
```

- move out the api requests to a separate file named `src/api-client.ts`
```
export const fetchCertifications = async () => {
  const resp = await axios.get(`${API_SERVER_URL}/certifications`);
  return resp.data;
};
```

- change the `certifications-list.ts`
```
import {fetchCertifications} from "../api-client";
...
fetchCertifications().then((data) {
  setCertifications(data.certifications);
});
```

- research about `react suspense` in react. this is an experimental utility

# Section 10 - Server side rendering

- create a file called `render.tsx` under `src/server` directory
```
import fetchCertifications from "./api-client";
import App from "../app";
import ReactDOMServer from "react-dom/server";

const serverRender = async () => {
  const certifications = await fetchCertificatins();
  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={{certifications: certifications}} />
  );
  return {initialMarkup};
};

export default serverRender;
```

- change the `server.ts` to use the returned string
```
import serverRender from "./render";
...
server.get("/", async (req, res) => {
  const {initialMarkup} = await serverRender();
  res.render("index", {initialContent: initialMarkup});
});
```