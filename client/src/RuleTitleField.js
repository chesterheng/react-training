import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

const RuleTitleField = ({ field, form }) => {
  const { name } = field;
  const { touched, errors } = form;
  return (
    <div className={`form-group ${touched[name] && errors[name] ? "has-error" : ""}`}>
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
      <ErrorMessage component="span" className="help-block" name="title" />
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