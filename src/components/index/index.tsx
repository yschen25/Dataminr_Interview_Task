import React from "react";

import { Title, Gcontainer, Scontainer, Acontainer, GridProps } from "./style";
import Options from "../Options/options";
import GeneralWrapper from "../GeneralWrapper/generalWrapper";
import AlertsWrapper from "../AlertsWrapper/alertsWrapper";
import SettingsWrapper from "../SettingsWrapper/settingsWrapper";

import { all_settings } from "../../../schema/";
import { Layout, LayoutType } from "../../../schema/type";

const Index = () => {

  // Define the specific container and wrapper for each group
  const getContainer = (
    layout: Layout
  ): [React.ComponentType<GridProps>, React.ComponentType] => {
    switch (layout.type) {
      case LayoutType.GeneralLayout:
        return [Gcontainer, GeneralWrapper];
      case LayoutType.SettingsLayout:
        return [Scontainer, SettingsWrapper];
      case LayoutType.AlertsLayout:
        return [Acontainer, AlertsWrapper];
      default:
        return [Gcontainer, GeneralWrapper];
    }
  };

  return (
    <>
      {all_settings.map((item, idx) => {
        const [Container, Wrapper] = getContainer(item.layout);

        return (
          <Container
            key={`${idx}-conatiner`}
            data-testid="index"
            grid={item.layout.percent}
          >
            <Title key={`${idx}-title`}>{item.title.toUpperCase()}</Title>
            <Options
              key={`${idx}-options`}
              wrapperComponent={Wrapper}
              item={item}
            />
          </Container>
        );
      })}
    </>
  );
};

export default Index;
