import ColorPoint from "../models/ColorPoint";

export function genDefaultPoints(): ColorPoint[] {
  const points = [];
  for (let i = 0; i < 100; i++) {
    // 需要考虑位移加半径可能会超出区域
    const x = randomByRange(590, 0);
    const y = randomByRange(590, 0);
    const color = Math.floor(randomByRange(0xffffff, 0)).toString(16);
    const point = new ColorPoint(x, y, 10, `#${color}`);
    points.push(point);
  }
  return points;
}

export function randomByRange(max: number, min: number): number {
  const small = Math.min(max, min);
  const large = Math.max(max, min);
  return Math.random() * (large - small) + small;
}
