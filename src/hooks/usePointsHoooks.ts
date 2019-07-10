import { useState, useCallback, useReducer, useMemo } from 'react';
import { genDefaultPoints, randomByRange } from '../utils/utils';
import ColorPoint from '../models/ColorPoint';
import reducer from './reducer';

export default function usePointsHoooks(): [
  ColorPoint[],
  (idx: number) => void
] {
  const defaultPoints = useMemo(() => genDefaultPoints(), []);
  const [points, dispatch] = useReducer(reducer, defaultPoints);

  const handleClick = useCallback((idx: number) => {
    const color = Math.floor(randomByRange(0xffffff, 0)).toString(16);
    const radius = randomByRange(10, 2);
    const x = randomByRange(600 - radius, 0);
    const y = randomByRange(600 - radius, 0);
    const point = points[idx]
      .move(x, y)
      .changeColor(`#${color}`)
      .changeRadius(radius);

    dispatch({ type: 'MOVE', payload: { idx: idx, point: point } });
  }, []);

  return [points, handleClick];
}
