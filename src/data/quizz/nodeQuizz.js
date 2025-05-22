const nodeQuiz = [
    {
      question: "What is Node.js?",
      options: [
        "A front-end JavaScript framework",
        "A JavaScript runtime built on Chrome's V8 engine",
        "A database management system",
        "A CSS preprocessor"
      ],
      answer: "A JavaScript runtime built on Chrome's V8 engine"
    },
    {
      question: "Which module is used to create a web server in Node.js?",
      options: ["http", "fs", "url", "path"],
      answer: "http"
    },
    {
      question: "Which command is used to initialize a new Node.js project?",
      options: [
        "node init",
        "npm init",
        "npm start",
        "node create"
      ],
      answer: "npm init"
    },
    {
      question: "Which package manager is used by default in Node.js?",
      options: ["Yarn", "Bower", "NPM", "Webpack"],
      answer: "NPM"
    },
    {
      question: "What is the purpose of the package.json file?",
      options: [
        "To store environment variables",
        "To define the project's dependencies and scripts",
        "To compile JavaScript code",
        "To handle database connections"
      ],
      answer: "To define the project's dependencies and scripts"
    },
    {
      question: "Which of the following is a built-in module in Node.js?",
      options: ["express", "mongoose", "http", "lodash"],
      answer: "http"
    },
    {
      question: "How do you export a function from one module in Node.js?",
      options: [
        "export function myFunction() {}",
        "module.exports = myFunction;",
        "exports: myFunction",
        "module.export myFunction;"
      ],
      answer: "module.exports = myFunction;"
    },
    {
      question: "Which of the following is true about Node.js?",
      options: [
        "It is single-threaded and asynchronous",
        "It is multi-threaded and synchronous",
        "It runs in the browser",
        "It only supports ES5 JavaScript"
      ],
      answer: "It is single-threaded and asynchronous"
    },
    {
      question: "Which global object is used to work with file paths in Node.js?",
      options: ["fs", "path", "url", "os"],
      answer: "path"
    },
    {
      question: "What does the 'fs' module do in Node.js?",
      options: [
        "Handles file system operations",
        "Manages HTTP requests",
        "Parses JSON data",
        "Manages real-time communication"
      ],
      answer: "Handles file system operations"
    },
    {
      question: "How do you install a package globally in Node.js?",
      options: [
        "npm install package-name",
        "npm install -g package-name",
        "npm global package-name",
        "npm get package-name"
      ],
      answer: "npm install -g package-name"
    },
    {
      question: "Which of the following is NOT an event-driven function in Node.js?",
      options: ["setTimeout()", "setImmediate()", "setInterval()", "console.log()"],
      answer: "console.log()"
    },
    {
      question: "What is the purpose of the 'process' global object in Node.js?",
      options: [
        "To handle child processes",
        "To interact with the operating system",
        "To provide information about the current Node.js process",
        "To create HTTP requests"
      ],
      answer: "To provide information about the current Node.js process"
    },
    {
      question: "Which middleware is commonly used in Express.js to parse JSON request bodies?",
      options: ["body-parser", "cookie-parser", "express-json", "json-parser"],
      answer: "body-parser"
    },
    {
      question: "Which statement is true about Node.js streams?",
      options: [
        "Streams are used to read or write data continuously",
        "Streams are only used for working with databases",
        "Streams block the execution of code",
        "Streams are only available in synchronous mode"
      ],
      answer: "Streams are used to read or write data continuously"
    },
    {
      question: "Which method is used to create a readable stream in Node.js?",
      options: ["fs.createReadStream()", "fs.readFile()", "fs.open()", "fs.readStream()"],
      answer: "fs.createReadStream()"
    },
    {
      question: "Which module is used to work with child processes in Node.js?",
      options: ["os", "child_process", "process", "worker_threads"],
      answer: "child_process"
    },
    {
      question: "What is the purpose of the 'next()' function in Express.js middleware?",
      options: [
        "To terminate the server",
        "To handle HTTP requests",
        "To pass control to the next middleware function",
        "To send a response to the client"
      ],
      answer: "To pass control to the next middleware function"
    },
    {
      question: "Which HTTP method is used to retrieve data from a server?",
      options: ["POST", "PUT", "GET", "DELETE"],
      answer: "GET"
    },
    {
      question: "How do you start a Node.js application?",
      options: [
        "node start app.js",
        "npm run app.js",
        "node app.js",
        "npm start app.js"
      ],
      answer: "node app.js"
    },
    {
      question: "What is the default scope of a variable declared with 'var' in Node.js?",
      options: [
        "Global scope",
        "Block scope",
        "Function scope",
        "Module scope"
      ],
      answer: "Function scope"
    },
    {
      question: "Which method is used to handle promises in Node.js?",
      options: ["then()", "catch()", "finally()", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which object in Node.js is used to handle asynchronous operations?",
      options: ["Promise", "EventEmitter", "AsyncHandler", "Process"],
      answer: "Promise"
    },
    {
      question: "What does 'npm' stand for?",
      options: [
        "Node Package Manager",
        "Network Programming Module",
        "New Project Manager",
        "Node Processing Machine"
      ],
      answer: "Node Package Manager"
    },
    {
      question: "How do you import an ES module in Node.js?",
      options: [
        "const module = require('module');",
        "import module from 'module';",
        "include('module');",
        "load module from 'module';"
      ],
      answer: "import module from 'module';"
    },
    {
      question: "Which of the following is used to handle exceptions in Node.js?",
      options: ["try-catch", "throw", "process.on('uncaughtException')", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is a major advantage of using Node.js?",
      options: [
        "It is single-threaded and non-blocking",
        "It is synchronous and multi-threaded",
        "It is only used for front-end development",
        "It does not support real-time applications"
      ],
      answer: "It is single-threaded and non-blocking"
    },
    {
      question: "Which of the following is a correct way to create an HTTP server in Node.js?",
      options: [
        "http.createServer(req, res)",
        "http.createServer(function(req, res) { ... })",
        "new HttpServer(req, res)",
        "server.start()"
      ],
      answer: "http.createServer(function(req, res) { ... })"
    }
  ];
  
  export default nodeQuiz;
  