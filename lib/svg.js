class SVG {
  constructor() {
    this.svgContent = '';
    this.textElement = '';
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              ${this.svgContent}
              ${this.textElement}
            </svg>`;
  }

  setText(message, color) {
    if (message.length > 3) {
      throw new Error("No more than 3 letters!");
    }

    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
  }

  setShape(shape) {
    const shapeElement = shape.render();
    this.svgContent = shapeElement; // Update the shape content
  }
}

module.exports = SVG;