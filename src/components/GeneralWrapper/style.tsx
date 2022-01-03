import styled from "styled-components";

const Gwrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height:  80px;
  padding: 10px;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
  }
  position: relative;
  background: #3a3a3a;
  color: #fff;
  border-radius: 5px;
  margin : 10px;
`;

export { Gwrapper };
