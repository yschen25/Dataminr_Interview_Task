type Options = {
  title: string;
  layout: Layout;
  options: Option[];
};

type Layout = {
  type: LayoutType;
  percent: number;
};

enum LayoutType {
  GeneralLayout,
  SettingsLayout,
  AlertsLayout,
}

type Option = {
  title: string;
  enabled: boolean;
  num: number | null;
  options?: ChildOptions[];
};

type ChildOptions = {
  title: string;
  enabled: boolean;
  num: number | null;
};

export {
  Options,
  Layout,
  LayoutType,
  Option,
  ChildOptions,
};
