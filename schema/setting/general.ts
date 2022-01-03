import { Options, LayoutType } from "../type";

export const general: Options = {
  title: "General",
  layout: {
    type: LayoutType.GeneralLayout,
    percent: 100,
  },
  options: [
    {
      title: "Case managment",
      enabled: true,
      num: null,
      options: [],
    },
    {
      title: "Notification",
      enabled: true,
      num: null,
      options: [],
    },
    {
      title: "Map timeline",
      enabled: true,
      num: null,
      options: [],
    },
    {
      title: "Mass communcations",
      enabled: true,
      num: null,
      options: [],
    },
    {
      title: "Views & briefings",
      enabled: true,
      num: null,
      options: [],
    },
    {
      title: "Traffic games",
      enabled: true,
      num: null,
      options: [],
    },
  ],
};
