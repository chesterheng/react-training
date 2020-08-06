import React from "react";
import axios from "axios";
import { wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import rules from "../data.json";
import RuleList from "../RuleList";
import renderWithRedux from "../renderWithRedux";

jest.mock('axios');

describe("Rule List", () => {
  let getByText;

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: rules });
    ({ getByText } = renderWithRedux(<RuleList />, {
      initialState: {
        rules: []
      }
    }));
  });
  
  test("should display rules titles", () => {
    rules.forEach(async rule => {
      await wait (() => {
        const titleElement = getByText(rule.title);
        expect(titleElement).toBeInTheDocument();
      });
    });
  });

  test("should display rules descriptions", () => {
    rules
      .filter(rule => rule.description)
      .forEach(async rule => {
        await wait(() => {
          const descriptionElement = getByText(rule.description);
          expect(descriptionElement).toBeInTheDocument();
        })
      });
  });

  test("should display rules tags", () => {
    const tags = rules.reduce((tags, rule) => [...tags, ...rule.tags], []);
    tags.forEach(async tag => {
      await wait(() => {
        const tagElement = getByText(tag);
        expect(tagElement).toBeInTheDocument();
      })
    });
  });
});