import { Options, LayoutType } from "../type";

export const settings: Options = {
  title: "Settings",
  layout: {
    type: LayoutType.SettingsLayout,
    percent: 30,
  },
  options: [
    {
      title: "Audit log",
      enabled: true,
      num: null,
    },
    {
      title: "Users",
      enabled: true,
      num: null,
      options: [
        {
          title: "Users add",
          enabled: true,
          num: null,
        },
        {
          title: "Users delete",
          enabled: false,
          num: null,
        },
        {
          title: "Users edit",
          enabled: true,
          num: null,
        },
        {
          title: "Max users",
          enabled: true,
          num: 10,
        },
      ],
    },
  ],
};
