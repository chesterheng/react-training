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