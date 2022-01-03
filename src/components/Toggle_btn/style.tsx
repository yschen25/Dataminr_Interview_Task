import styled from "styled-components";

type ToggleProps = { enabled: boolean };

const ToggleContainer = styled.div<ToggleProps>`
  width: 60px;
  border-radius: 30px;
  background: ${(props) => (props.enabled ? "#729CF3" : "#ababab")};
  cursor: pointer;
  transition: all 0.3s ease-in;
  position: absolute;
  right: 30px;
`;

const ToggleKnob = styled.div<ToggleProps>`
  width: 30px;
  height: 30px;
  background: #fff;
  display: block;
  border-radius: 50%;
  line-height: 35px;
  float: ${(props) => (props.enabled ? "right" : "left")};
  transition: all 0.3s ease-in;
`;

export { ToggleContainer, ToggleKnob };
