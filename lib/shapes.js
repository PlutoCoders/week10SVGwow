// Setting up the classes
class Shape {
  constructor() {
    // the value is set to "" (for empty) beacuse we will adjust the value later when a new instance of the shape class is created
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

//  When setting up the size of the svg elements, refer to the examples on this website: https://www.w3schools.com/graphics/svg_circle.asp
// What the cx and cy attribute define? (What do these numbers mean, and what happens when you adjust them?)
class Circle extends Shape {
  render() {
    return '<circle cx="150" cy="110" r="80" fill="' + this.color + '" />';
  }
}

class Triangle extends Shape {
  render() {
    return '<polygon points="150, 18 244, 182 56, 182" fill="' + this.color + '" />';
  }
}

class Square extends Shape {
  render() {
    return '<rect x="85" y="40" width="140" height="140" fill="' + this.color + '" />';
  }
}

module.exports = { Circle, Triangle, Square };
 // exporting the file so that we can use it in another file (so that everything isn't crammed into one file: improves readibility and accesibility
  module.exports = Shape;