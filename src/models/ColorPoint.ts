export default class ColorPoint {
  public readonly x: number;
  public readonly y: number;
  public readonly radius: number;
  public readonly color: string;
  constructor(x: number, y: number, radius: number, color: string) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  public move(x: number, y: number) {
    return new ColorPoint(x, y, this.radius, this.color);
  }

  public changeColor(color: string) {
    return new ColorPoint(this.x, this.y, this.radius, color);
  }

  public changeRadius(radius: number) {
    return new ColorPoint(this.x, this.y, radius, this.color);
  }
}
