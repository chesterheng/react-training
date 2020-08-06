import axios from "axios";
import { DO_LIKE, DO_DISLIKE, doLike, doDislike } from "../likes-actions";

jest.mock('axios');

describe("Likes Actions", () => {
  test("should post like", async () => {
    const id = 5;
    const expectedAction = {
      type: DO_LIKE,
      payload: id
    };
    const dispatch = jest.fn();
    await doLike(id)(dispatch);
    expect(dispatch).toBeCalledWith(expectedAction);
  });

  test("should post dislike", async () => {
    const id = 15;
    const expectedAction = {
      type: DO_DISLIKE,
      payload: id
    };
    const dispatch = jest.fn();
    await doDislike(id)(dispatch);
    expect(dispatch).toBeCalledWith(expectedAction);
  });
});