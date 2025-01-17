import { Shape } from "./shape.js";

export class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getParameter() {
    return 2 * Math.PI * this.radius;
  }
  toString() {
    return `Circle area: ${this.getArea()}
        Circle parameter: ${this.getParameter()}`;
  }
}
