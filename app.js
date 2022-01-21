const inquirer = require('inquirer');

// this is required to run the fs module. it allows the app.js file to access the fs module's functions through the fs assignment
// when ever we use a module we need to have a require. We can create and use local modules as well. 
const fs = require('fs');

// with this statemen, the object in the module.exports assignment will be reassigned to the generatePage variable in the app.js file. We use a relative path to get to file.
const generatePage = require('./src/page-template.js');

const pageHTML = generatePage(nombre, github);



// process is a global object that represents everything going on. it is always present. if you console.log(process) you'll see that its a gigantic object holding data providing the context of where the app was executed.
// the argv property of process is an array that holds exactly what was typed into the command line upon execution so that we can capture that data and use it in the app.
// .slice() an array method that returns a brand-new array, here the brand new array is based on process.argv starting at the third index (index 2 in the 0 based array)-this skips over the node and the project file items in the array, the first two.
// why don't we write (2, process.argv.length -1);? Because .slice() returns everything from the first zero-based index we provide as the first argument up to but not including the zero-based index we provide as the second argument. so, to return through the last index in the array, we provide the length of the array as the second argument
// we don't actually manipulate process.argv, but rather create a new array based on the values from the third index and on.
// const keyword allows us to create variables that can't be reassigned a value
// const for strings and numbers cannot be altered, because the reference is to the content. For arrays and objects however the content can be altered because the reference is to the container, not the content
// const profileDataArgs = process.argv.slice(2);
// this variable assignment is called assignment deconstruction. It assigns elements of an array to variable names in a single expression. it does so sequentially/ So the first thing will be given variable name nombre, and the secpnd thing will be given the variable name github.
// const [nombre, github] = profileDataArgs;



// in the fs module, all functions have synchronous and asynchronous versions, including fs.writeFile and fs.writeFileSync()
// in a fs.writefile() there are three arguents. The first argument is the file name. The second argument is the data that's being written: the HTML string template. The third argument is the callback function that will handle any errors as well as the success message.
// notice the arrow function, no parantheses enclose the argument. When there is only one argument the () are optional.
fs.writeFile('./index.html', pageHTML, err => {
    // in the call back function, a conditional statement checks for the err being returned. if err exist, an error message is displayed. This creates an exception and stops the execution of the code.
    // if there is an err the resulting error in the terminal --> This message concatenates two text properties of the Error object that is returned, name and message. In this case, name is "TypeError", and message is "Callback must be a function. Received undefined." It's important to know this, for you may wish to retrieve properties of the Error object while you're developing your applications, and these two are central to identifying problems.
    // example of error message in TERM: TypeError [ERROR_INVALID_CALLBACK]: Callback must be a function. Received undefined
    // example of another type of error message ReferenceError: fs is not defined
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!')
});

// notes about inquirer
// package.json file serves as a manifest for the project. Contains metadata of the project and which npm packages are being used, called dependencies
// it is created when you input in the terminal npm init. this then causes prompts in the terminal. they then create the package.json file based on your responses.
// to install inquirer: npm install inquirer
// this creats a  a folder called nodes_module and a file called package-lock.json
// package-lock.json contains a listing of the dependecies of your project. what is here depends on the version of inquirer we are currently on.
// any additonal depencieces that inquire might have are downloaded too and shown in node_modules. whe an npm has dependencies these are called nested dependecies. these other npms needed are why package-lock.json is so large.
// first step is npm init, and then the second step is to download the npm we will be using.


// notes about .gitignore
// make sure to add node_modules/ to the gitignore file.
// if we need to a git tracking file from the folder use the following command to remove  the tracking git rm -r --cached