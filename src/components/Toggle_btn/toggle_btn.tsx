import React, { useState } from "react";
import { ToggleContainer, ToggleKnob } from "./style";

const ToggleBtn = (props: { enabled: boolean }) => {
  const [toggleBgProps, updateToggleBgProps] = useState(props.enabled);

  const enableOrDisableOption = () => {
    updateToggleBgProps(!toggleBgProps);
  };

  return (
    <ToggleContainer enabled={toggleBgProps} onClick={enableOrDisableOption}>
      <ToggleKnob enabled={toggleBgProps} />
    </ToggleContainer>
  );
};

export default ToggleBtn;
