import * as React from "react";
import { connect } from "react-redux";
import { updateRates } from "../../action/updateRates";

import { Title, Gcontainer, Scontainer, Acontainer, GridProps } from "./style";
import Options from "../Option/option";
import GeneralWrapper from "../GeneralWrapper/generalWrapper";
import AlertsWrapper from "../AlertsWrapper/alertsWrapper";
import SettingsWrapper from "../SettingsWrapper/settingsWrapper";

import { all_settings } from "../../../schema/";
import { Layout, LayoutType } from "../../../schema/type";

const Index = () => {
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
      {all_settings.map((item) => {
        const [Container, Wrapper] = getContainer(item.layout);

        return (
          <Container grid={item.layout.percent}>
            <Title>{item.title.toUpperCase()}</Title>
            <Options wrapperComponent={Wrapper} item={item} />
          </Container>
        );
      })}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateRatesStates: (rates) => {
    dispatch(updateRates(rates));
  },
});

const mapStateToProps = (state) => ({
  rates: state.currencyReducer.rates,
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
