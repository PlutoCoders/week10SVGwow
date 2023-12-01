const inquirer = require("inquirer");
// in command line, npm i (bring in inquierer)
// may have to bring in jest for testing and efficiency
// Open the in-editor Terminal in VS Code (ctrl-`) and type yarn jest-w (or npm run jest-w )

const fs = require('fs');
// we will need to require inquirer 
// we will need to rquire fs (already built in)
// const fs = require('fs');

// we should setup other js files for class constructors of shapes, then require those
import { ClassName } from './lib/shapes';

// we will prompt user with inquirer to answer questions based on how they want their logo (color, shape, text,)
// and if we have time maybe text properties, like font family, weight, color, etc
// make sure the user doesn't enter too many characters for the text, as it could cause issues with the logo (if statement)
function promptUser() {
    inquirer
    .prompt([
      // first prompt
      {
        type: "input",
        message:
          "Enter <= 3 characters for your logo text.",
        name: "text",
      },
    ])
};
// after this, we will chain .then (what will we do with our response, or what potential issues we need to check for before writing)


// write files
// at the end of the index.js, we can call the function to prompt the questions


// Why are we going to use constructors? (xpert learning assistance AI on constructors and classes)
// Imagine you have a blueprint for creating cars. 
// This blueprint is like a class, and each car you create from this blueprint is an object.
// Now, when you create a new car, you want to set its initial properties, such as the make, model, and color. 
// This is where the constructor comes in.
// The constructor is like a special function that runs automatically when you create a new car object. 
// It is responsible for initializing the object with the desired values.

// tldr
// We will use classes to define what a logo can be, constructors to create new logos with specific details, 
// and objects to represent the actual logos we create. 
// It helps us organize and manage our logos in a structured and organized way.