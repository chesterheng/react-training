import React from "react";
import RuleTitleField from "./RuleTitleField";
import RuleDescriptionField from "./RuleDescriptionField";

const RuleForm = () => {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">New rule</h3>
      </div>
      <div className="panel-body">
        <form>
          <RuleTitleField />
          <RuleDescriptionField />
          <button type="submit" className="btn btn-primary pull-right">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RuleForm;