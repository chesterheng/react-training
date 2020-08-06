import React from "react";
import "@testing-library/jest-dom/extend-expect";
import rules from "../data.json";
import RuleList from "../RuleList";
import renderWithRedux from "../renderWithRedux";

describe("Rule List", () => {
  let getByText;

  beforeEach(() => {
    ({ getByText } = renderWithRedux(<RuleList rules={rules} />, {
      initialState: {
        rules: []
      }
    }));
  });
  
  test("should display rules titles", () => {
    rules.forEach(rule => {
      const titleElement = getByText(rule.title);
      expect(titleElement).toBeInTheDocument();
    });
  });

  test("should display rules descriptions", () => {
    rules
      .filter(rule => rule.description)
      .forEach(rule => {
        const descriptionElement = getByText(rule.description);
        expect(descriptionElement).toBeInTheDocument();
      });
  });

  test("should display rules tags", () => {
    const tags = rules.reduce((tags, rule) => [...tags, ...rule.tags], []);
    tags.forEach(tag => {
      const tagElement = getByText(tag);
      expect(tagElement).toBeInTheDocument();
    });
  });
});