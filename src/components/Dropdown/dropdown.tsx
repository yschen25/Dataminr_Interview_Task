import React from "react";
import { DropdownWrapper, DropdownMenu, DropdownList, Num, Arrow } from "./style";

const Dropdown = (props: {
  num: number;
  isOpenDropdown: boolean;
  toggleDropdown: () => void;
}) => {
  return (
    <DropdownWrapper key={`${props.num}-dropbtn`}>
      <Num key={`${props.num}-num`}>{props.num}</Num>
      {props.num && (
        <>
          <DropdownMenu isOpenDropdown={props.isOpenDropdown}>
            {[...Array(props.num)].map((e, i) => (
              <DropdownList key={i + 1}>{i + 1}</DropdownList>
            ))}
          </DropdownMenu>
          <Arrow
            key={`${props.num}-arrow`}
            isOpenDropdown={props.isOpenDropdown}
            onClick={props.toggleDropdown}
          />
        </>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
