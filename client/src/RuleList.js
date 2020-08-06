import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Rule from "./Rule";
import { loadRules } from "./actions/rules-actions";

const RuleList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadRules());
    // eslint-disable-next-line
  }, []);

  const rules = useSelector(state => state.rules)

  const newRules = rules.map(rule => (
    <Rule key={rule.id} rule={rule} />
  ));

  return <Fragment>{newRules}</Fragment>;
};

RuleList.defaultProps = {
  rules: []
};

RuleList.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default RuleList