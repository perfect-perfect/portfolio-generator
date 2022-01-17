// process is a global object that represents everything going on. it is always present. if you console.log(process) you'll see that its a gigantic object holding data providing the context of where the app was executed.
// the argv property of process is an array that holds exactly what was typed into the command line upon execution so that we can capture that data and use it in the app.
// .slice() an array method that returns a brand-new array, here the brand new array is based on process.argv starting at the third index (index 2 in the 0 based array)-this skips over the node and the project file items in the array, the first two.
// why don't we write (2, process.argv.length -1);? Because .slice() returns everything from the first zero-based index we provide as the first argument up to but not including the zero-based index we provide as the second argument. so, to return through the last index in the array, we provide the length of the array as the second argument
// we don't actually manipulate process.argv, but rather create a new array based on the values from the third index and on.
// const keyword allows us to create variables that can't be reassigned a value
// const for strings and numbers cannot be altered, because the reference is to the content. For arrays and objects however the content can be altered because the reference is to the container, not the content
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


// arrow functions are a new and alternative way to create functions. These are more concise. They do not required the keyword function. If you only have one parameter you don't even need paranthesis aroud. Technically we don't need the paranthesis around profileDataArr. We can even remove {} if we only need to perform one action. This is an implicit return, we dont have to use a return statement if were performing once action.
// let is for variables that can change over time. makes code easier to understand.
// let and const are block-scoped.variables that are created within any block of code {} will not exist outside the block of code. They won't override a variable created outside of the braces either
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('===================');

    // forEach() is an array method that accepts a function as an argument and executes that function on each element of the array, using the value of the element at that iteration as its argument
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem)
    });

    console.log('====================');

    // using an arrow function, we can avoid using the function keyword, parenthesis around the function parameter, and the curly braces used to wrap a function, as we're only performing one action in the function. We can keep simpler tasks on one line of code.
    profileDataArr.forEach(profileItem => console.log(profileItem));

};





printProfileData(profileDataArgs);