
// arrow functions are a new and alternative way to create functions. These are more concise. They do not required the keyword function. If you only have one parameter you don't even need paranthesis aroud. Technically we don't need the paranthesis around profileDataArr. We can even remove {} if we only need to perform one action. This is an implicit return, we dont have to use a return statement if were performing once action.
// let is for variables that can change over time. makes code easier to understand.
// let and const are block-scoped.variables that are created within any block of code {} will not exist outside the block of code. They won't override a variable created outside of the braces either
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('===================');

//     // forEach() is an array method that accepts a function as an argument and executes that function on each element of the array, using the value of the element at that iteration as its argument
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem)
//     });

//     console.log('====================');

//     // using an arrow function, we can avoid using the function keyword, parenthesis around the function parameter, and the curly braces used to wrap a function, as we're only performing one action in the function. We can keep simpler tasks on one line of code.
//     profileDataArr.forEach(profileItem => console.log(profileItem));

// };

// this function returns a string
// since there is no parameter here we have to put parantheses. When there is only one parameter we do not have to put parantheses.
// notice no return. When a function has only a single statement, the curly braces are unnecessary and the return statement is implied.

// printProfileData(profileDataArgs);

// template literals are enclosed in ` back ticks. these allow use to insert variables by using the ${variable} syntax
// interpolation is the substitution of text for a variable we build into the string
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// by using enter in between the `s, like you would in a word processor you can create mutli line strings.
const generatePage = (nombre, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${nombre}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

// in order to use functions from one module inside another, we use the related statements module.exports and require.
// in the source file that has the functions we want to make available to other files, we use module.exports. at the top of the destination file we put require
module.exports = generatePage;