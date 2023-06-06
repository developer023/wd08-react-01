import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Test for Button", () => {
  test("should render button", () => {
    render(<Button>Test Button</Button>);
    const element = screen.getByText("Test Button");

    expect(element).toBeInTheDocument();
  });
});
