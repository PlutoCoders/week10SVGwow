class SVG {
  constructor() {
    this.svgContent = ''; // SVG content string
  }

  // Render the SVG based on the stored content
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.svgContent}</svg>`;
  }

  setText(message, color) {
    if (message.length > 3) {
      throw new Error("No more than 3 letters!");
    }

    // Using template literals to construct the text element
    const textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;

    // Appending the text element to the SVG content
    this.svgContent += textElement;
  }

  setShape(shape) {
    // Generating the shape element using the 'render' method from the provided shape class
    const shapeElement = shape.render();

    // Appending the shape element to the SVG content
    this.svgContent += shapeElement;
  }
}

module.exports = SVG;