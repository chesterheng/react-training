import {
  RULES_LOADED,
  RULES_ADDED,
  RULES_UPDATED
} from "../actions/rules-actions";
import { DO_LIKE, DO_DISLIKE } from "../actions/likes-actions";

const rulesReducer = (state = [], action) => {
  switch (action.type) {
    case RULES_LOADED: {
      return action.payload;
    }

    case RULES_ADDED: {
      return [...state, action.payload];
    }

    case RULES_UPDATED: {
      const index = state.find(rule => rule.id === action.payload.id);
      const newRules = [...state];
      newRules[index] = action.payload;
      return newRules;
    }
    
    case DO_LIKE: {
      const index = state.findIndex(rule => rule.id === action.payload);
      const newRule = {
        ...state[index]
      };
      newRule.likes += 1;
      const newRules = [...state];
      newRules[index] = newRule;
      return newRules;
    }

    case DO_DISLIKE: {
      const index = state.findIndex(rule => rule.id === action.payload);
      const newRule = {
        ...state[index]
      };
      newRule.dislikes += 1;
      const newRules = [...state];
      newRules[index] = newRule;
      return newRules;
    }

    default:
      return state;
  }
};

export default rulesReducer;