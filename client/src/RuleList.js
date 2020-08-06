import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Rule from "./Rule";

const RuleList = ({ rules }) => {
  const newRules = rules.map(rule => (
    <Rule key={rule.id} rule={rule} />
  ));

  return <Fragment>{newRules}</Fragment>;
};

Rule.defaultProps = {
  rules: []
};

RuleList.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default RuleList;