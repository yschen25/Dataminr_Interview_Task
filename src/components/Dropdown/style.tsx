import styled from "styled-components";

type OpenDropdownProps = { isOpenDropdown: boolean };

const DropdownWrapper = styled.div`
  width: 20%;
  height: 40px;
  padding: 5px;
  background: #000;
  color: #fff;
  box-shadow: none;
  border: none;
  position: absolute;
  right: 100px;
  cursor: pointer;
`;

const DropdownMenu = styled.ul<OpenDropdownProps>`
  display: ${(props) => (props.isOpenDropdown ? "flex" : "none")}
  flex-direction: column;
  background: #000;
  text-align: center;
  margin-top: 10px;
  width: 100%;
  margin-left: 0;
  padding: 0;
  position: absolute;
  left: 0;
  top: 30px;
  z-index: 1;
  transition: 0.3s;
`;

const DropdownList = styled.li`
  border-top: 1px solid #444;
  line-height: 30px;
`;

const Num = styled.span`
  text-align: center;
  width: 100%;
  display: inline-block;
  line-height: 30px;
`;

const Arrow = styled.div<OpenDropdownProps>`
  position: absolute;
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: ${(props) =>
    props.isOpenDropdown ? "rotate(135deg)" : " rotate(-45deg)"};
  right: 10px;
  top: 45%;
  cursor: pointer;
  transition: 0.3s;
  z-index: 2;
`;

export { DropdownWrapper, DropdownMenu, DropdownList, Num, Arrow };
