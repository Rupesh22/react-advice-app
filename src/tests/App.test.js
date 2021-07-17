import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

import App from "../App";

afterEach(cleanup);

it("testing advice button", () => {
  act(() => {
    render(<App />);
  });
  const element = screen.getByTestId("app-title");
  expect(element).toHaveTextContent("Advice app");
});
