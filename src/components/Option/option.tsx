import React from "react";
import { GeneralSymbol } from "./style";

import ToggleBtn from "../Toggle_btn/toggle_btn";
import Dropdown from "../Dropdown/dropdown";

import { ChildOptions } from "../../../schema/type";
import SettingsChildWrapper from "../SettingsChildWrapper/settingsChildWrapper";

const Option = (props: {
  item: ChildOptions;
  enabled: boolean;
  isOpenPanel: boolean | null;
  isOpenDropdown: boolean;
  toggleDropdown: () => void;
  onClick: (enabled: boolean) => void;
}) => {
  return (
    <>
      <SettingsChildWrapper
        key={`${props.item.title}-scWrapper`}
        isOpenPanel={props.isOpenPanel}
      >
        <GeneralSymbol
          key={`${props.item.title}-symbol`}
          text={props.item.title.toUpperCase()}
        />
        <ToggleBtn
          key={`${props.item.title}-togglebtn`}
          text={props.item.title}
          enabled={props.enabled}
          onClick={props.onClick}
        />
        {props.item.num && (
          <Dropdown
            key={`${props.item.num}-dropbtn`}
            num={props.item.num}
            isOpenDropdown={props.isOpenDropdown}
            toggleDropdown={props.toggleDropdown}
          />
        )}
      </SettingsChildWrapper>
    </>
  );
};

export default Option;
