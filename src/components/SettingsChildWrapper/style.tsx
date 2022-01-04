import styled from "styled-components";

type OpenPanelProps = { isOpenPanel: boolean | null };

const SCwrapper = styled.div<OpenPanelProps>`
  display: ${(props) => (props.isOpenPanel ? "flex" : "none")}
  flex-wrap: wrap;
  align-items: center;
  height: 80px;
  padding: 10px;
  width: 100%;
  position: relative;
  background: #3a3a3a;
  color: #fff;
  margin: 0;
  position: relative;
  top: 10px;
  transition: 0.3s;
`;

export { SCwrapper };
