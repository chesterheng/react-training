import rules from "../data.json";

export const RULES_LOADED = "RULES_LOADED";

export const loadRules = () => {
  return {
    type: RULES_LOADED,
    payload: rules
  };
};