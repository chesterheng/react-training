import { DO_LIKE, DO_DISLIKE, doLike, doDislike } from "../likes-actions";

describe("Likes Actions", () => {
  test("should post like", () => {
    const expectedAction = {
      type: DO_LIKE,
      payload: 5
    };
    const action = doLike(5);

    expect(action).toEqual(expectedAction);
  });

  test("should post dislike", () => {
    const expectedAction = {
      type: DO_DISLIKE,
      payload: 15
    };
    const action = doDislike(15);

    expect(action).toEqual(expectedAction);
  });
});