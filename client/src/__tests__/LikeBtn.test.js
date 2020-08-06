import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LikeBtn from "../LikeBtn";
import renderWithRedux from "../renderWithRedux";
import rules from "../data.json";

describe("LikeBtn", () => {
  test("should increment counter up", () => {
    const { getByTitle } = renderWithRedux(<LikeBtn type={"up"} ruleID={1} />, {
      initialState: {
        rules
      }
    });
    const likeButtonElement = getByTitle("+1");

    expect(likeButtonElement).toHaveTextContent("0");
    fireEvent.click(likeButtonElement);
    expect(likeButtonElement).toHaveTextContent("1");
  });

  test("should increment counter down", () => {
    const { getByTitle } = renderWithRedux(<LikeBtn type={"down"} ruleID={1} />, {
      initialState: {
        rules
      }
    });
    const likeButtonElement = getByTitle("-1");

    expect(likeButtonElement).toHaveTextContent("0");
    fireEvent.click(likeButtonElement);
    expect(likeButtonElement).toHaveTextContent("1");
  });

});