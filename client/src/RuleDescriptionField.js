import React from "react";
import PropTypes from "prop-types";

const RuleDescriptionField = ({ field }) => {
  return (
    <div className="form-group">
      <label className="control-label" htmlFor="rule-desc">
        Description
      </label>
      <textarea
        {...field}
        className="form-control"
        id="rule-desc"
        placeholder="Description"
      />
    </div>
  );
};

RuleDescriptionField.defaultProps = {
  description: ""
};

RuleDescriptionField.propTypes = {
  description: PropTypes.string
};

export default RuleDescriptionField;