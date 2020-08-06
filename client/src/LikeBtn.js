import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from "prop-types";
import { doLike, doDislike } from "./actions/likes-actions";

const LikeBtn = ({ type, ruleID }) => {
  const dispatch = useDispatch()
  const isUp = () => type === "up";
  const increment = () => {
    if (isUp()) dispatch(doLike(ruleID));
    else dispatch(doDislike(ruleID));
  };
  const title = type === "up" ? "+1" : "-1";
  const rules = useSelector(state => state.rules)
  const rule = rules.find(rule => rule.id === ruleID);
  const counter = isUp() ? rule.likes : rule.dislikes;
  
  return (
    <button className="btn btn-default" title={title} onClick={increment}>
      {counter} <i className={`glyphicon glyphicon-thumbs-${type}`}></i>
    </button>
  );
};

LikeBtn.defaultProps = {
  counter: 0
};

LikeBtn.propTypes = {
  type: PropTypes.oneOf(["up", "down"]).isRequired,
  counter: PropTypes.number
};

export default LikeBtn;