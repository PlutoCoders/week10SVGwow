const inquirer = require("inquirer");
const { writeFile } = require('fs').promises;
const SVG = require("./lib/svg");
const {Circle, Triangle, Square} = require("./lib/shapes");
const path = require('path');

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
    ])
    .then(({ text, textColor, shapeType, shapeColor }) => {
      let ShapeClass = Circle;

      if (shapeType.toLowerCase() === 'triangle') {
        ShapeClass = Triangle;
      } else if (shapeType.toLowerCase() === 'square') {
        ShapeClass = Square;
      }
      const shape = new ShapeClass();
      shape.setColor(shapeColor);
      const svg = new SVG();
      svg.setText(text, textColor);
      svg.setShape(shape);

      const outputPath = path.join(__dirname, 'examples', 'logo.svg');
      return writeFile(outputPath, svg.render());
    })
    .then(() => {
      console.log("Generated logo.svg in the 'examples' folder");
    })
    .catch((error) => {
      console.log(error);
      console.log("Oops! Something went wrong.");
    });
  };
  
  promptUser();