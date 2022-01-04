import styled from "styled-components";

const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

type TextProps = { text: string };

const GeneralSymbol = styled.div<TextProps>`
  width: 30px;
  height: 30px;
  background: #707070;
  border-radius: 5px;
  margin-left: 15px;

  &:before {
    content: "${(props) => props.text}";
    color: #fff;
    display: inline-block;
    position: absolute;
    left: 70px;
    line-height: 30px;
    letter-spacing: 0.1em;
  }
`;

type OpenPanelProps = { isOpenPanel: boolean | null };

const Arrow = styled.div<OpenPanelProps>`
  position: absolute;
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: ${(props) =>
    props.isOpenPanel ? "rotate(135deg)" : " rotate(-45deg)"};
  right: 10px;
  top: 45%;
  cursor: pointer;
  transition: 0.3s;
`;

export { InnerWrapper, GeneralSymbol, Arrow };
