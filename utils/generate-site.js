const fs = require('fs');

// we'll create two functions that return a Promise, one for writing a file and another for copying a file.
// that means we'll execute an asynchronous function that enables us to use .then() and .catch() methods to handle its response
// let's take fs.writeFile() function and contextualizing it to be Promise based. We'll start by creating the promise, and then we'll work in the actual fs functionality we are looking to achieve

// this creates our first JavaScript promise
// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {});
// }

// like fetch() we ask for data, what happens next is out of our hands. This is where Promises come in.
// To create a Promise, we need to create a new Promise object using the JavaScript keyword new. 
// The Promise object acts like a container that allows us to run code that at some point will be in a status of pending, which means that the code has started to run but it is waiting for a response. This could be for HTTP requests like fetch() or evem timed events like setTimeout()
// inside the parentheses for the new Promises, we provide it with a function that accepts two functions as parameters: resolve and reject. 
// from there we can write whatever asynchronous functionality we need to execute, and run the resolve() function when the code executes succesfully or reject() when it fails to execute succesfully.
// same as the fs.writeFile() we have in app.js. this time however, we're constextualizing it to a Promise and accepting the HTML files content as a parameter

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's '.catch() method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidently execute the resolve function as well
                return;
            }

            // if everything went well, resolve the Promise and send the succesful data to the .then() method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css' , err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });

    });
};



// fs.copyFile('./src/style.css', './dist/style.css', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Style sheet copied succesfully!');
// });

// We now have the two functions for handling the project's output. All we need to do is export it from generate-site.js and import it into app.js, to include them in the promise chain at the bottom of app.js
// earlier in page-template we used module.exports to export only one function. Now we need to export two functions,.
// module.exports supports exporting data any way we need it to be exported
// we're actually exporting an object with the two functions as methods. It seems redundant to use the name of the function as both the methd=od name and valie of the method
// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// };

// we can simplify as follows
// this is known as using shorthand property names. So if we have a property key name with the name as the value we're associating with it, we can simply just put wrteFile, and it will understand we're using writeFile for both the property name and its value.
module.exports = { writeFile, copyFile };