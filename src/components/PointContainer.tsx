import React from "react";
import ColorPoint from "../models/ColorPoint";
import Container from "./PointContainerLayout";

interface Props {
  point: ColorPoint;
  handleClick: (idx: number) => void;
  idx: number;
}
function PointContainer(props: Props) {
  return (
    <Container
      x={props.point.x}
      y={props.point.y}
      color={props.point.color}
      radius={props.point.radius}
      onClick={() => props.handleClick(props.idx)}
    />
  );
}

export default React.memo(PointContainer);
