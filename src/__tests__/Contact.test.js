import { render, screen } from "@testing-library/react";
import Contact from "../Components/Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("should load button inside contact us component", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  //Assertion
  expect(button).toBeInTheDocument();
});

test("should load 2 input boxes inside contact us component", () => {
  render(<Contact />);

  //Querying
  //Whenever there are Multiple Items we use --> all
  const inputBoxes = screen.getAllByRole("textbox");

  //Assertion
  expect(inputBoxes.length).toBe(2);
});
