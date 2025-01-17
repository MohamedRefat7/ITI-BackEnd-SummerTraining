import { Shape } from "./shape.js";

export class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  getArea() {
    return this.side * this.side;
  }
  getParameter() {
    return this.side * 4;
  }
  toString() {
    return `Square area: ${this.getArea()}
        Square parameter: ${this.getParameter()}`;
  }
}
