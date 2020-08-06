import React, { useState } from "react";

const LikeBtn = ({ type, counter: initialCount }) => {
  const [counter, setCounter] = useState(initialCount);
  const increment = () => {
    setCounter(prev => prev + 1);
  };
  const title = type === "up" ? "+1" : "-1";
  return (
    <button className="btn btn-default" title={title} onClick={increment}>
      {counter} <i className={`glyphicon glyphicon-thumbs-${type}`}></i>
    </button>
  );
};

export default LikeBtn;