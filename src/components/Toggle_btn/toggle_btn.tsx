import React from "react";
import { ToggleContainer, ToggleKnob } from "./style";

const ToggleBtn = (props: {
  enabled: boolean;
  text: string;
  onClick: (enabled: boolean) => void;
}) => {
  return (
    <ToggleContainer
      key={`${props.text}-toggleContainer`}
      enabled={props.enabled}
      onClick={() => props.onClick(!props.enabled)}
    >
      <ToggleKnob
        key={`${props.text}-toggleKnob`}
        enabled={props.enabled}
      />
    </ToggleContainer>
  );
};

export default ToggleBtn;
