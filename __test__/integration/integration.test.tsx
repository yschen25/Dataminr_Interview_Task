import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import GlobalStyle from "../../src/styles/global-style";
import { store } from "../../src/store";
import App from "../../src/components/app";

describe("<Index />", () => {
  test("Render without crash", async () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    );
    expect(getAllByTestId("index")[0]).toBeInTheDocument();
  });
});
