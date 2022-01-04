import React, { useState } from "react";
import { InnerWrapper, GeneralSymbol, Arrow } from "./style";

import ToggleBtn from "../Toggle_btn/toggle_btn";
import Dropdown from "../Dropdown/dropdown";
import Option from "../Option/option";

import { Options } from "../../../schema/type";

const Options = (props: {
  wrapperComponent: React.ComponentType;
  item: Options;
}) => {
  const Wrapper = props.wrapperComponent;
  const item = props.item;

  // Get the panel state which option has options
  const initialPanelState = item.options.map((opt) => {
    if (!opt.options) {
      return null;
    }

    return true;
  });

  // Toggle the panel
  const [isOpenPanel, updatePanel] =
    useState<(boolean | null)[]>(initialPanelState);
  const updatePanelOpen = (idx1: number, enabled: boolean) => {
    updatePanel(
      isOpenPanel.map((open, idx) => {
        if (idx === idx1) return enabled;
        return open;
      })
    );
  };

  const togglePanel = (idx1: number) => () => {
    updatePanelOpen(idx1, !(isOpenPanel[idx1] || false));
  };

  const [isOpenDropdown, updateDropdown] = useState(false);
  const toggleDropdown = () => {
    updateDropdown(!isOpenDropdown);
  };

  // Get the state of child options
  const initialState = item.options.map((opt) => ({
    enabled: true,
    options: opt.options == null ? null : opt.options.map((_) => true),
  }));

  const [state, updateState] = useState(initialState);

  // Toggle button
  const updateToggle =
    (idx1: number, idx2: number | null) => (enabled: boolean) => {
      if (idx2 === null) {
        const newState = state.slice();
        newState[idx1].enabled = enabled;
        const innerOptions = newState[idx1].options;
        if (innerOptions) {
          if (!enabled) {
            newState[idx1].options = innerOptions.map(() => false);
          }
          updatePanelOpen(idx1, enabled);
        }
        updateState(newState);
      } else {
        const newState = state.slice();
        const innerOptions = newState[idx1].options;
        if (innerOptions !== null) {
          newState[idx1].options = innerOptions.map((option, idx) => {
            if (idx !== idx2) return option;
            return enabled;
          });

          updateState(newState);
        }
      }
    };

  return (
    <>
      {Object.values(item.options).map((opt, idx1) => (
        <Wrapper key={`${idx1}-wrapper`}>
          <InnerWrapper key={`${idx1}-innerWrapper`}>
            <GeneralSymbol
              key={`${idx1}-symbol`}
              text={opt.title.toUpperCase()}
            />
            {opt.num && (
              <Dropdown
                key={`${idx1}-dropdown`}
                num={opt.num}
                isOpenDropdown={isOpenDropdown}
                toggleDropdown={toggleDropdown}
              />
            )}
            <ToggleBtn
              key={`${idx1}-togglebtn`}
              text={opt.title}
              enabled={state[idx1].enabled}
              onClick={updateToggle(idx1, null)}
            />
          </InnerWrapper>
          {opt.options?.map((item, idx2) => (
            <>
              <Option
                key={`${idx2}-option`}
                item={item}
                enabled={(state[idx1].options || [])[idx2]}
                isOpenPanel={isOpenPanel[idx1]}
                isOpenDropdown={isOpenDropdown}
                toggleDropdown={toggleDropdown}
                onClick={updateToggle(idx1, idx2)}
              />
              <Arrow
                key={`${idx2}-arrow`}
                isOpenPanel={isOpenPanel[idx1]}
                onClick={togglePanel(idx1)}
              />
            </>
          ))}
        </Wrapper>
      ))}
    </>
  );
};

export default Options;
