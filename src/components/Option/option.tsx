import React from "react";
import { GeneralSymbol } from "./style";

import ToggleBtn from "../Toggle_btn/toggle_btn";
import Dropdown from "../Dropdown/dropdown";

import { Options, ChildOptions } from "../../../schema/type";
import DeaultWrapper from "../DefaultWrapper/defaultWrapper";

const Option = (props: { item: ChildOptions }) => {
  return (
    <>
      <DeaultWrapper>
        <GeneralSymbol text={props.item.title.toUpperCase()} />
        <ToggleBtn enabled={props.item.enabled} />
        {props.item.num && <Dropdown num={props.item.num} />}
      </DeaultWrapper>
    </>
  );
};

const Options = (props: {
  wrapperComponent: React.ComponentType;
  item: Options;
}) => {
  const Wrapper = props.wrapperComponent;
  const item = props.item;

  return (
    <>
      {Object.values(item.options).map((option) => (
        <Wrapper>
          <GeneralSymbol text={option.title.toUpperCase()} />
          {option.num && <Dropdown num={option.num} />}
          <ToggleBtn enabled={option.enabled} />
          {option.options?.map((item) => (
            <Option item={item} />
          ))}
        </Wrapper>
      ))}
    </>
  );
};

export default Options;
