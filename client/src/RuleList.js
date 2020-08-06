import React, { Fragment } from "react";
import Rule from "./Rule";

const RuleList = ({ rules }) => {
  const newRules = (rules || []).map(rule => (
    <Rule key={rule.id} rule={rule} />
  ));

  return <Fragment>{newRules}</Fragment>;
};

export default RuleList;