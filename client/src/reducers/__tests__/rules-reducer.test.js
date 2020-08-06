import rules from "../../data.json";
import reducer from "../rules-reducer";
import { RULES_LOADED } from "../../actions/rules-actions";
import { DO_LIKE, DO_DISLIKE } from "../../actions/likes-actions";

describe("Rules reducer", () => {
  test("should return the initial state", () => {
    const action = {};
    const previousState = undefined;
    const expectedNewState = [];
    const newState = reducer(previousState, action);

    expect(newState).toEqual(expectedNewState);
  });

  test("should load rules", () => {
    const action = {
      type: RULES_LOADED,
      payload: rules
    };
    const previousState = [];
    const expectedNewState = rules;
    const newState = reducer(previousState, action);
    
    expect(newState).toEqual(expectedNewState);
  });

  test("should increment likes", () => {
    const action = {
      type: DO_LIKE,
      payload: 1
    };
    const previousState = rules;
    const newState = reducer(previousState, action);

    expect(newState[0].likes).toBe(1);
  });

  test("should increment dislikes", () => {
    const action = {
      type: DO_DISLIKE,
      payload: 1
    };
    const previousState = rules;
    const newState = reducer(previousState, action);

    expect(newState[0].dislikes).toBe(1);
  });

});