import React from "react";
import PropTypes from "prop-types";

const RuleTitleField = ({ title }) => {
  return (
    <div className="form-group">
      <label className="control-label" htmlFor="rule-title">
        Title
      </label>
      <input
        type="text"
        className="form-control"
        id="rule-title"
        placeholder="Title"
        defaultValue={title}
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