import React from "react";
import PropTypes from "prop-types";

const RuleDescriptionField = ({ description }) => {
  return (
    <div className="form-group">
      <label className="control-label" htmlFor="rule-desc">
        Description
      </label>
      <textarea
        className="form-control"
        id="rule-desc"
        placeholder="Description"
        defaultValue={description}
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