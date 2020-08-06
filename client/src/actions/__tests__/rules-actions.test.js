import axios from "axios";
import rules from "../../data.json";
import { RULES_LOADED, loadRules } from "../rules-actions";

jest.mock('axios');

describe("Rules Actions", () => {
  test("should load rules", async () => {
    const expectedAction = {
      type: RULES_LOADED,
      payload: rules
    };

    axios.get.mockResolvedValue({ data: rules });
    const dispatch = jest.fn();
    await loadRules()(dispatch);
    expect(dispatch).toBeCalledWith(expectedAction);
  });
});