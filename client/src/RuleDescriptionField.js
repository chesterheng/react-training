import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

const RuleDescriptionField = ({ field, form }) => {
  const { name } = field;
  const { touched, errors } = form;
  return (
    <div className={`form-group ${touched[name] && errors[name] ? "has-error" : ""}`}>
      <label className="control-label" htmlFor="rule-desc">
        Description
      </label>
      <textarea
        {...field}
        className="form-control"
        id="rule-desc"
        placeholder="Description"
      />
      <ErrorMessage
        component="span"
        className="help-block"
        name={name}
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