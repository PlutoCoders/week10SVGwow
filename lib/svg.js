class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  };

  // here we are going to set up the container and adjust the attributes
  render() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("version", "1.1");
    svg.setAttribute("width", "300");
    svg.setAttribute("height", "200");

    // Here we are trying to append the shape element to the SVG
    if (this.shapeElement) {
      svg.appendChild(this.shapeElement);
    }

    // And here, to append the text element to the SVG
    if (this.textElement) {
      svg.appendChild(this.textElement);
    }

    return svg.outerHTML;
  }

  setText(message, color) {
    // making sure users can't mess up the code/SVG logo by adding more than 3 characters
    if (message.length > 3) {
      throw new Error("No more than 3 letters!");
    }

    // notice how repetitive this code is: how can we make it DRY?
    this.textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    this.textElement.setAttribute("x", "150");
    this.textElement.setAttribute("y", "125");
    this.textElement.setAttribute("font-size", "60");
    this.textElement.setAttribute("text-anchor", "middle");
    this.textElement.setAttribute("fill", color);
    this.textElement.textContent = message;
  }

  // Here we are rendering the result that the user will adjust based on the variable that is inserted as the paramameter (in this case, shape)
  setShape(shape) {
    this.shapeElement = shape.render();
  }
}

module.exports = SVG;