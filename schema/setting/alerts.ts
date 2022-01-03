import { Options, LayoutType } from "../type";

export const alerts: Options = {
  title: "Alert",
  layout: {
    type: LayoutType.AlertsLayout,
    percent: 30,
  },
  options: [
    {
      title: "Alert manage",
      enabled: true,
      num: null,
      options: [],
    },
    {
      title: "Alert rules",
      enabled: true,
      num: 10,
      options: [],
    },
  ],
};
