import styled from "styled-components";

type GridProps = { grid: number };

const Title = styled.p`
  font-size: 18px;
  color: #fff;
  width: 100%;
  padding: 30px 0 20px 0;
  text-align: center;
`;

const Gcontainer = styled.div<GridProps>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  width: ${(props) => props.grid + "%"};
  @media (max-width: 768px) {
    width: 100%;
  }
  margin: auto;
`;

const Scontainer = styled.div<GridProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  width: ${(props) => props.grid + "%"};
  @media (max-width: 768px) {
    width: 100%;
  }
  margin: auto;
`;

const Acontainer = styled.div<GridProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  width: ${(props) => props.grid + "%"};
  @media (max-width: 768px) {
    width: 100%;
  }
  margin: auto;
`;

export { Title, Gcontainer, Scontainer, Acontainer, GridProps };
