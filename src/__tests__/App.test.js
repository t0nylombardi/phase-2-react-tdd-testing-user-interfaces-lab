import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange

  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "http://placebeard.it/1024");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/meticulous & motivated/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
    "href",
    "https://github.com/t0nylombardi"
  );
  expect(screen.getByRole("link", { name: /linkedIn/i })).toHaveAttribute(
    "href",
    "https://linkedin.com/in/t0nylombardi"
  );
});
