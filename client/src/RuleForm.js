import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RuleTitleField from "./RuleTitleField";
import RuleDescriptionField from "./RuleDescriptionField";
import { loadRules } from "./actions/rules-actions";

const RuleForm = ({ match }) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadRules());
    // eslint-disable-next-line
  }, []);

  const rules = useSelector(state => state.rules);
  const id = Number(match.params.id);
  const rule = rules.find(rule => rule.id === id);
  const { title = "", description = "" } = rule || {};
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">{id ? "Edit rule" : "New rule"}</h3>
      </div>
      <div className="panel-body">
        <form>
          <RuleTitleField title={title} />
          <RuleDescriptionField description={description} />
          <button type="submit" className="btn btn-primary pull-right">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RuleForm;