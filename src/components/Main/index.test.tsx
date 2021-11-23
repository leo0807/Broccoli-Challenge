import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Content from './index';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

afterEach(cleanup);

test("<Content />", () => {
  const { getByTestId, getByText } = render(<Content />);
  // fireEvent.click(getByText("Request an invite"));
  expect(getByText("Request an invite")).toBeInTheDocument();
});