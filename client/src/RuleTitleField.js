import React from "react";
import PropTypes from "prop-types";

const RuleTitleField = ({ field }) => {
  return (
    <div className="form-group">
      <label className="control-label" htmlFor="rule-title">
        Title
      </label>
      <input
        {...field}
        type="text"
        className="form-control"
        id="rule-title"
        placeholder="Title"
      />
    </div>
  );
};

RuleTitleField.defaultProps = {
  title: ""
};

RuleTitleField.propTypes = {
  title: PropTypes.string
};

export default RuleTitleField;