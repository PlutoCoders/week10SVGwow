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
 // exporting the file so that we can use it in another file (so that everything isn't crammed into one file: improves readibility and accesibility
  module.exports = Shape;