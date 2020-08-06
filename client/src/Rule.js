import React, { useState } from "react";
import "./Rule.css";

const Rule = ({ rule: { title, description, likes, dislikes, tags } }) => {
  const newTags = (tags || []).map(tag => (
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
            <button className="btn btn-default" title="+1">
              {likes} <i className="glyphicon glyphicon-thumbs-up"></i>
            </button>
            <button className="btn btn-default" title="-1">
              {dislikes} <i className="glyphicon glyphicon-thumbs-down"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rule;