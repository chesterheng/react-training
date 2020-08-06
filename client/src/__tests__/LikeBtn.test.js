import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LikeBtn from "../LikeBtn";

describe("LikeBtn", () => {
  let getByTitle;
  
  beforeEach(() => {
    ({ getByTitle } = render(<LikeBtn type={"up"} counter={0} />));
  });

  test("should increment counter", () => {
    const likeButtonElement = getByTitle("+1");

    expect(likeButtonElement).toHaveTextContent("0");
    fireEvent.click(likeButtonElement);
    expect(likeButtonElement).toHaveTextContent("1");
  });
});