
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
// const generatePage = (nombre, github) => {
//     return `
//     <!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Portfolio Demo</title>
//     </head>

//     <body>
//         <h1>${nombre}</h1>
//         <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
// };

// // in order to use functions from one module inside another, we use the related statements module.exports and require.
// // in the source file that has the functions we want to make available to other files, we use module.exports. at the top of the destination file we put require
// module.exports = generatePage

// create the about section
// the function will accept the about variable as a parameter.
// we're going to call this in the template literal in between the <main> tags. good to note we can call functions in template literals
const generateAbout = aboutText => {
    // if the about varible doesn't, we'll simply return an empty string
    if (!aboutText) {
        return ``;
    }
    // ig aboutText exists we'll return the entire <section> element.
    return `
        <section class="my-3" id="about">
            <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
            <p>${aboutText}</p>
        </section>
    `;
};

// instead of filtering and mapping the HRML before placing it into the template, we did all from within!
// we also used implicit returns for arrow functions, as we see in the .filter() methods. Er alod used destructuring
const generateProjects = projectsArr => {
    return `
        <section class="my-3" id="portfolio">
            <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
            <div class="flex-row justify-space-between">
            ${projectsArr.map(({ name, description, languages, link }) => {
                    return `
                    <div class="col-12 mb-2 bg-dark text-light p-3">
                        <h3 class="porfolio-item-title text-light">${name}</h3>
                        <h5 class="portfolio-languages">
                            Built With:
                            ${languages.join(', ')}
                        </h5>
                        <p>${description}</p>
                        <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
                    </div>
                    `;
                })
                .join('')
            }

            ${projectsArr
                .filter(({ feature }) => !feature)
                .map(({ name, description, languages, link }) => {
                    return `
                    <div class="col-12 col-md-6 mb-6 mb-2 bg-dark text-light p-3 flex-column">
                        <h3 class="portfolio-item-title text-light">${name}</h3>
                        <h5 class="portfolio-languages">
                            Built With:
                            ${languages.join(', ')}
                        </h5>
                        <p>${description}</p>
                        <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
                    </div>
                    ;`
                })
                .join('')}
            </div>
        </section>    
    `;
};

// the projects array is the last piece of the portfolio, and arguably the most important.
// we have subarray data holding technology we used.
// we will call this function in the template literal
// const generateProjects = projectsArr => {
//     // get array of just featured projects
//     // using the .filter() array method, we created two new arrays of project data based on whether their feautre property was true or false.
//     // the .filter()method is another new JavaScript array method that allows us to execute a function on each element of the array to test whether oor not it should be in the new array we created from it.
//     const featuredProjects = projectsArr.filter(project => {
//         if (project.feature) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     });

//     //get array of all non-featured projects
//     const nonFeaturedProjects = projectsArr.filter(project => {
//         if (!project.feature) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     });

//     // onse we seperated the array data we created two sets of HTML data 
//     const featuredProjectHtmlArr = featuredProjects.map(({name, description, language, link}) => {
//         return `
//             <div class="col-12 mb-2 bg-dark text-light p-3 flex-column">
//                 <h3 class="portfolio-item-title text-light">${name}</h3>
//                 <h5 class="portfolio-languages">
//                     Built With:
//                     ${languages.join(', ')}
//                 </h5>
//                 <p>${description}</p>
//                 <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project of GitHub</a>
//             <.div>
//         `;
//     });

//     const nonFeaturedProjectHtmlArr = nonFeaturedProjects.map(
//         ({name, description, languages, link}) => {
//             return `
//                 <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//                     <h3 class="portfolio-item-title text-light">${name}</h3>
//                     <h5 class="portfolio-languages">
//                         Built With:
//                         ${languages.join(', ')}
//                     </h5>
//                     <p>${description}</p>
//                     <a href="${link}" class="btn mt-auto"<i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//                 </div>
//             `;
//         }
//     );

//     // we then place the HTMLs w ejust created here in this <section>
//     return `
//         <section class="my-3" id="portfolio">
//             <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//             <div class="flex-row justify-space-between">
//             ${featuredProjectHtmlArr.join('')}
//             ${nonFeaturedProjectHtmlArr('')}
//             </div>
//         </section>
//     `;

// };
   

//     // how will we turn the array project data into HTML elements, we cannot use forEach() because the method doesn't natively return data. we can use the array method .map()
//     // we take an array of project data and we create a new array from it, called projectHtmlArr.
//     // .map() method works alot like the .forEach() method: it takes in a function as a parameter to execute on each element in the array, which accepts eac element of the array as the function's parameter. 
//     // the .map() method takes array data and uses it to create a brand-new array. Thus NECESSITATING a return statement.
//     // for the projects, we use .map() to iterate through the projectArr, we destructure each project's data based on property name, and we return an entire set of HTML code with it!

//     const projectHtmlArr = projectsArr.map(({ name, description, languages, link}) => {
//         // first we take the array of project data and we create a new array from ii
//         // we then take the array we created with .map() and interpolate it into the return
//         // we use the .join() method to turn the projectHtmlArr into a c
//         // the stylesheet we'll use will work similarly to Bootstrap
//         // our project is going to have featured projects and unfeatured projects. But how will we determine which ones to feature and which ones not to feature?
//         return `
//             <div class="col=12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//                 <h3 class="portfolio-item-title text-light">${name}</h3>
//                 <h5 class="portfolio-languages">
//                     Built With:
//                     ${languages.join(',')}
//                 </h5>
//                 <p>${description}</p>
//                 <a herf="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//             </div>
//         `;
//     });
    
//     return `
//         <section class="my-3" id="portfolio">
//             <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//             <div class="flex-row justify-space-between">
//             ${projectHtmlArr.join('')}
//             </div>
//         </section>
//     `;
    
// };


// notice how we had to change the template literal data to use properties of templateData instead of the individual parameters
// the parameter has been renamed templateData to reflect that it now accepts the promise object returned by inquirer.
// the function definition has been changed to use the promise object's properties
module.exports = templateData => {
    // if use templateData.projects[0].name or templateData.projects[1].languages[0] well have a hard time because the template literal has deeply nested properties.
    // while we can work with that data structure, if we separate the portfolio's data into smaller chunks we can think about the data one section at a time. We can deconstruct the object. Earlier when we wanted to create seperate variables based on data in an array, we deconstructed that array. Lucikly, destructuring isn't limited to arrays, ans we can use it with objects as well.
    // if we were to break this down in terms of where the object property data should go. we could identify data goes into the Header section, data that goes into an about section. 
    // look at the data's jey names
    // lets destructure templateData and create variables to hold data for the about and project sections
    // destructure projects and about data from templateData based on their property key names
    // we can create new variables based on data stored in an object. with object destucturing we can grab any value we want to create a variable for. All we need to do is ensure that we're creating variable names that completey match the property name we're looking to destructure data from.
    // projects is the name of the variable the data about the projects is stored, and about is the name of the variable the abut info is stored. 
    // ...header, the rest operator, this takes the rest of the data and assignes it to the variable header. This is called
    // ... can also be the spread operator. it looks the same. it just depends on how you use it.
    // now if we want to make a new array or object  with the same contents as an existing array or object, we can use the spread operator
    // we create a new array using its square bracket notation. once JavaScript engine sees those brackets, it can infer that we're creating a brand-new set of data in memory
    // using the spread operator ..., we can instruct originalAnimalArr to spread its contents across this new array. This is an extremely useful tool for cloning data so that we don't affect an original set of it. it also works for objects
    // the rest operator ..., packages leftover data under a new array or object- depending on what the source of data is.
    // const originalAnimalArr = ['Dog', 'Cat', 'Horse'];
    // const workingAnimalArr = [...originalAnimalArr];
    // spread operator is on the right of the thing. spread operato spreads values across a new array or object, while the rest operator condenses leftover array or object callues into one new value.
    const { projects, about, ...header } = templateData;

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
                <nav class="flex-row">
                    <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
                        header.github
                    }">GitHub</a>
                </nav>
            </div>
        </header>
        <main class="container my-5">
            ${generateAbout(about)}
            ${generateProjects(projects)}
        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
        </footer>
    </body>
    </html>
    `;
};

// notice how we use header.name and header.github throughout the template literal as interpolated data.
// the code below gets the current year and puts it in the footer
// <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>