const inquirer = require('inquirer');

// this is required to run the fs module. it allows the app.js file to access the fs module's functions through the fs assignment
// when ever we use a module we need to have a require. We can create and use local modules as well. 

// const fs = require('fs');

// with this statemen, the object in the module.exports assignment will be reassigned to the generatePage variable in the app.js file. We use a relative path to get to file.

// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(nombre, github);



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

// fs.writeFile('./index.html', pageHTML, err => {

//     // in the call back function, a conditional statement checks for the err being returned. if err exist, an error message is displayed. This creates an exception and stops the execution of the code.
//     // if there is an err the resulting error in the terminal --> This message concatenates two text properties of the Error object that is returned, name and message. In this case, name is "TypeError", and message is "Callback must be a function. Received undefined." It's important to know this, for you may wish to retrieve properties of the Error object while you're developing your applications, and these two are central to identifying problems.
//     // example of error message in TERM: TypeError [ERROR_INVALID_CALLBACK]: Callback must be a function. Received undefined
//     // example of another type of error message ReferenceError: fs is not defined

//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!')
// });

// notes about inquirer
// package.json file serves as a manifest for the project. Contains metadata of the project and which npm packages are being used, called dependencies
// it is created when you input in the terminal npm init. this then causes prompts in the terminal. they then create the package.json file based on your responses.
// to install inquirer: npm install inquirer
// this creats a  a folder called nodes_module and a file called package-lock.json
// package-lock.json contains a listing of the dependecies of your project. what is here depends on the version of inquirer we are currently on.
// any additonal depencieces that inquire might have are downloaded too and shown in node_modules. whe an npm has dependencies these are called nested dependecies. these other npms needed are why package-lock.json is so large.
// first step is npm init, and then the second step is to download the npm we will be using. 
// if a prospective employer wanted to download and test the portfolio generator, they'd first clone the repo, then run the command npm install to download the applications dependecies into node_modules folder. For this reason we never upload node_modules folder into GitHub.


// notes about .gitignore
// make sure to add node_modules/ to the gitignore file.
// if we need to remove a git tracking file from the folder use the following command to remove  the tracking git rm -r --cached

// notes about question objects
// inquirer can receive a question object with a number of different properties, like the type, that determines the type of question, the message property that displays the question, and the name property that identifies each question uniquelu.
// notice that inquirer's prompt method can receive an array of objects in its argument, known as the question object.
// the properties of the question object can identify the type, name, and question messafe of this particular question. "input" was chosen as the type of question because the answer will be a text reply.
// the answer object is returned as a promise. this is a new tool for dealing with asynchronous functions that will return the answer object in the then function. 
// notice that the inquirer's prompt method can receive an array of objects IN ITS ARGUMENT.  This is knwon as the question object.
const promptUser = () => {
    // placing inquirer.prompt() in a function so that it can be invoked on demand within the flow of the application
    // this will return a promise and like fetch(), the promise will resolve with a .then() method
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            // notice that the validate method recieves an argument, nameInput. this argument is the user's input
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }

        },
        // let's ask the user if they'd like to add an about section
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        // after that we'll prompt the user for information, but only after they confirm yes
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            // its intresting that when is called at the end, but it must be recognized before it prompts you with the message.
            // next we'll use the when() property to look for the information. This is like the validate method we used previously, but instead of passing the value entered for that specific question in as a parameter, it passes an object of ALL the answers given so far as an object
            // the curly braces here give you a bit of an idea that what confirmAbout is an object
            // when the when() function gets this object, it looks something like this:
            // {
            //     "name": "gilberto",
            //     "github": "perfect-perfect",
            //     "confirmAbout": true
            // }
            // the confirm question type automatically turns "Y" into true, and "N" into false/
            // we've deconstructed this object to see how the user answered confirmAbout response. Because the value is Boolean, we can simply return it
            when: ({confirmAbout}) => {
                if(confirmAbout) {
                    // Y is turned into true
                    return true;
                }
                else {
                    // N is turned into false
                    return false;
                }
            }
        }
    ]);
};

const promptProject = portfolioData => {
    // if there is no 'projects' array property, create one
    if (!portfolioData.projects) {
        // we added the projects array to the portfolioData object and initialized it as an empty array
        portfolioData.projects = [];
    }
    console.log(`
        ===================
        Add a New Project
        ===================
        
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projectName => {
                if(projectName) {
                    return true;
                }
                else {
                    console.log('Please enter project name!');
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDesc => {
                if (projectDesc) {
                    return true;
                }
                else {
                    console.log('Please enter project description');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: gitLink => {
                if(gitLink) {
                    return true;
                }
                else {
                    console.log('Please enter GitHub link!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            // confirm type question is a Boolean that can receive a yes or no (true or false)
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            // we set the default anwer in case the question gets skipped
            default: false
        }

    ])
    .then(projectData => {
        // we use the array method push() to place the projectData from inquirer into the new projects array we just created.
        portfolioData.projects.push(projectData);
        // we are evaluating the user response to whether they want to add more projects
        // the response was captured in the answer object, projectData, in the property confirmAddProject. 
        // if the user wishes to add more projects then this condition will evaluate to true and call the promptProject(portfolioData) in order to ge started on adding the next project
        if (projectData.confirmAddProject) {
            // if you forget to put portfolioData here a new projects array will be initialized, the existing project data will be lost.
            return promptProject(portfolioData);
        }
        // if false we have to return the portfolioData explicitly so that the object is returned. we need this for HTML building
        else {
            return portfolioData;
        }
    });
};

// the answer object is returned as a promise. a promise is a new tool that helps us with asynchronous functions.
// .then(answers => console.log(answers));
// this returns { name: 'gilberto' }. this is the answer object
// name property value is the key and the user input is the value
// here we're calling a function that returns the result of inquire.prompt, which is a promise. We therefore append to .then() mothod to the function call.  the then() makes it so now we work with the information.
// using promises we can chain the functions together using then() method
// by chaining the function call to the then() method, we can control the sequence of the applications control flow. we only want to prompt users with the project questions after the profile questions
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });





// in javascript we can store an object inside another object or array.