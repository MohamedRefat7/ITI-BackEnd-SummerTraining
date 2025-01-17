import { Shape } from "./shape.js";

export class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getParameter() {
    return (this.width + this.height) * 2;
  }
  toString() {
    return `Rectangle area: ${this.getArea()}
        Rectangle parameter: ${this.getParameter()}`;
  }
}
