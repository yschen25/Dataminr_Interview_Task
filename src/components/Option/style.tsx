import styled from "styled-components";

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

export { GeneralSymbol };
