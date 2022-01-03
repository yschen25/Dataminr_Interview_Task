import React from "react";
import { DropdownWrapper, DropdownMenu, DropdownList } from "./style";

const Dropdown = (props) => {

  return (
    <DropdownWrapper>
      {props.num && (
        <DropdownMenu>
          {[...Array(props.num)].map((e, i) => (
            <DropdownList key={i + 1}>{i + 1}</DropdownList>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
