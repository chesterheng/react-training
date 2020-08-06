import React from "react";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Rule from "../Rule";
import rules from "../data.json";
import renderWithRedux from "../renderWithRedux";

describe("Rule", () => {
  let rule;
  let getByText;
  let getByTitle;

  beforeEach(() => {
    rule = rules[0];
    ({ getByText, getByTitle } = renderWithRedux(<Rule rule={rule} />, {
      initialState: {
        rules
      }
    }));
  });

  test("should render rule title", () => {
    const titleElement = getByText(rule.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("should render rule description", () => {
    const descriptionElement = getByText(rule.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  test("should render rule tags", () => {
    rule.tags.forEach(tag => {
      const tagElement = getByText(tag);
      expect(tagElement).toBeInTheDocument();
    });
  });

  test("should render rule likes", () => {
    const likesElement = getByTitle("+1");
    expect(likesElement).toHaveTextContent(rule.likes);
  });

  test("should render rule dislikes", () => {
    const dislikesElement = getByTitle("-1");
    expect(dislikesElement).toHaveTextContent(rule.dislikes);
  });

  test("should hide description when clicking on title", () => {
    const titleElement = getByText(rule.title);
    fireEvent.click(titleElement);

    const descriptionElement = getByText(rule.description);
    expect(descriptionElement.parentNode).toHaveClass("hidden");
  });

  test("should show description back when clicking on title", () => {
    const title = getByText(rule.title);
    fireEvent.click(title);
    fireEvent.click(title);

    const description = getByText(rule.description);
    expect(description.parentNode).not.toHaveClass("hidden");
  });
});