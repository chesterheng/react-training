import axios from "axios";

export const RULES_LOADED = "RULES_LOADED";
export const loadRules = () => async dispatch => {
  try {
    const { data: rules } = await axios.get("/rest/rules");
    dispatch({
      type: RULES_LOADED,
      payload: rules
    })
  } catch (error) {
    console.log(error);
  }
};

export const RULES_ADDED = "RULES_ADDED";
export const addRule = (rule, history) => async dispatch => {
  try {
    const { data } = await axios.post("/rest/rules", rule);
    dispatch({
      type: RULES_ADDED,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
  history.push("/");
};

export const RULES_UPDATED = "RULES_UPDATED";
export const updateRule = (rule, history) => async dispatch => {
  try {
    const response = await axios.put(`/rest/rules/${rule.id}`, rule);
    dispatch({
      type: RULES_UPDATED,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
  history.push("/");
};