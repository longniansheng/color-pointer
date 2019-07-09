import React from "react";
import styled from "styled-components";
import PointContainer from "./PointContainer";
import usePointsHoooks from "../hooks/usePointsHoooks";

const Layout = styled.div`
  width: 600px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -300px;
  margin-left: -300px;
  border: 1px solid;
  transition: all 1s;
`;

const App: React.FC = () => {
  const [points, handleClick] = usePointsHoooks();
  return (
    <Layout>
      {points.map((point, idx) => {
        return (
          <PointContainer
            key={idx}
            point={point}
            idx={idx}
            handleClick={handleClick}
          />
        );
      })}
    </Layout>
  );
};

export default App;
