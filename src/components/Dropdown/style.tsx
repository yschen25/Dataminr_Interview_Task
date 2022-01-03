import styled from "styled-components";

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

  &:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(-45deg);
    right: 15px;
    top: 20px;
    transition: 0.5s;
    z-index: 2;
  }
`;

const DropdownMenu = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  background: #000;
  text-align: center;
  margin-top: 10px;
  width: 100%;
  margin-left: 0;
  padding: 0;
  position: absolute;
  left: 0;
  top: 15px;
  z-index: 1;
`;

const DropdownList = styled.li`
  border-top: 2px solid #444444;
`;

export { DropdownWrapper, DropdownMenu, DropdownList };
