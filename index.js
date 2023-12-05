const inquirer = require("inquirer");
// in command line, npm i (bring in inquierer)
// may have to bring in jest for testing and efficiency
// Open the in-editor Terminal in VS Code (ctrl-`) and type yarn jest-w (or npm run jest-w )
// Note: when importing fs like this, you bring in the entire node.js fs module, which allows you to use all of its methods.
// Since we are only using the fs write method, how can we import only the write method
// The benefits of only bringing in exactly what you need: Keeps codebase clean, reduces overhead (additional/extra work for a program to perform), and makes it clear what actual functionality your code is utilizing.
const fs = require('fs');

// Bring in the different modular js files
const SVG = require("./lib/svg");

// requiring the classes created for the different shapes
const {Circle, Triangle, Square} = require("./lib/shapes");

// we will prompt user with inquirer to answer questions based on how they want their logo (color, shape, text,)
// and if we have time maybe text properties, like font family, weight, color, etc
// make sure the user doesn't enter too many characters for the text, as it could cause issues with the logo (if statement)

// We need to bring in f

// Note: we are declaring a function here, but this function will have to later be called, otherwise the user won't get prompted
function promptUser() {
    inquirer
    .prompt([
      // first prompt
      {
        name: "text",
        type: "input",
        message:
          "Choose up to 3 letters for your Logo)",
        validate: (text) =>
          text.length <= 3 ||
          "No more than 3 letters!",
      },
      {
        name: "textColor",
        type: "input",
        message: "Choose your Text Color!",
      },
      {
        name: "shapeType",
        type: "list",
        message: "Choose your shape!",
        choices: ["circle", "triangle", "square"],
      },
      {
        name: "shapeColor",
        type: "input",
        message: "Choose your shape color",
      },
      // With this user input, we need to destructure the answers so that we can use them and manipulate them into new instances of svg class designs
      // then we will set the attributes (color, type, etc)
      // then we will generate these logos using svg.render()
      // next we will have to write the file writefile() and choose where it is written to (like a specific folder such as examples)
    ])
    // Here we begin the chaining
    .then(({ text, textColor, shapeType, shapeColor }) => {
      let ShapeClass = Circle;
      // The reason we are using the .toLowerCase() string method is so that the user input will return true even if the have capitals in the text that they input in the earlier prompt.
      // Having this improves user experience, and contributes to error handling, as it prevents potential errors
      if (shapeType.toLowerCase() === 'triangle') {
        ShapeClass = Triangle;
        // Here we are continuing to handle the different choices that the user can choose. In the future, how can you improve this by using something like a switch statement?
      } else if (shapeType.toLowerCase() === 'square') {
        ShapeClass = Square;
      }
      // Setting the shape color to the one chosen by the user
      const shape = new ShapeClass();
      shape.setColor(shapeColor);
      // creates a new SVG object, and then we set the text content and the text color, finally we set the shape, all based on what the user chose in the prompts
      const svg = new SVG();
      svg.setText(text, textColor);
      svg.setShape(shape);
});
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