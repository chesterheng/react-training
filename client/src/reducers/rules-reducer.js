import { RULES_LOADED } from "../actions/rules-actions";

const rulesReducer = (state = [], action) => {
  switch (action.type) {
    case RULES_LOADED: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default rulesReducer;