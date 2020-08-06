import rules from "../../data.json";
import reducer from "../rules-reducer";
import { RULES_LOADED } from "../../actions/rules-actions";

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
});