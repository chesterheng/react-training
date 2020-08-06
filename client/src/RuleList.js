import React, { Fragment } from "react";

const RuleList = ({ rules }) => {
  const newRules = (rules || []).map(rule => {
    const { title, description, likes, dislikes, tags } = rule;
    const newTags = (tags || []).map(tag => (
      <span key={tag} className="badge">
        {tag}
      </span>
    ));
    return (
      <div className="panel panel-primary">
        <div className="panel-heading" role="presentation">
          {title}
          <i className="pull-right glyphicon glyphicon-chevron-down"></i>
        </div>
        <div className="panel-body">
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
  });

  return <Fragment>{newRules}</Fragment>;
};

export default RuleList;