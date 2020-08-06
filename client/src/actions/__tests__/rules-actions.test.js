import rules from "../../data.json";
import { RULES_LOADED, loadRules } from "../rules-actions";

describe("Rules Actions", () => {
  test("should load rules", () => {
    const expectedAction = {
      type: RULES_LOADED,
      payload: rules
    };
    const action = loadRules();

    expect(action).toEqual(expectedAction);
  });
});