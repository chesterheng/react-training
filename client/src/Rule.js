import React, { useState } from "react";
import PropTypes from "prop-types";
import LikeBtn from "./LikeBtn";
import "./Rule.css";

const Rule = ({ rule: { id, title, description, tags } }) => {
  const newTags = tags.map(tag => (
    <span key={tag} className="badge">
      {tag}
    </span>
  ));
  const [folded, setFolded] = useState(!description);
  const toggleFolded = () => setFolded(!folded);
  const cssFolded = folded ? "up" : "down";
  return (
    <div className="panel panel-primary">
      <div className="panel-heading" role="presentation"  onClick={toggleFolded}>
        {title}
        <i className={`pull-right glyphicon glyphicon-chevron-${cssFolded}`}></i>
      </div>
      <div className={`panel-body ${folded ? "hidden" : ""}`}>
        <p>{description}</p>
      </div>
      <div className="panel-footer">
        <div className="btn-toolbar">
          {newTags}
          <div className="btn-group btn-group-xs pull-right">
            <button className="btn btn-primary" title="Update">
              <i className="glyphicon glyphicon-pencil"></i>
            </button>
          </div>
          <div className="btn-group btn-group-xs pull-right">
            <LikeBtn type="up" ruleID={id} />
            <LikeBtn type="down" ruleID={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

Rule.defaultProps = {
  rule: {
    title: "",
    description: "",
    tags: []
  }
};

Rule.propTypes = {
  rule: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default Rule;