import { useState, useCallback } from "react";
import { genDefaultPoints, randomByRange } from "../utils/utils";
import ColorPoint from "../models/ColorPoint";

export default function usePointsHoooks(): [
  ColorPoint[],
  (idx: number) => void
] {
  const [points, setPoints] = useState<ColorPoint[]>(() => genDefaultPoints());

  const handleClick = useCallback(
    (idx: number) => {
      const color = Math.floor(randomByRange(0xffffff, 0)).toString(16);
      const radius = randomByRange(20, 10);
      const x = randomByRange(600 - radius, radius);
      const y = randomByRange(600 - radius, radius);
      const point = points[idx]
        .move(x, y)
        .changeColor(`#${color}`)
        .changeRadius(radius);
      const newPoints = [
        ...points.slice(0, idx),
        point,
        ...points.slice(idx + 1)
      ];
      setPoints(newPoints);
    },
    [points]
  );
  return [points, handleClick];
}
