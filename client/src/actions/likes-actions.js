export const DO_LIKE = "DO_LIKE";
export const doLike = id => {
  return {
    type: DO_LIKE,
    payload: id
  };
};

export const DO_DISLIKE = "DO_DISLIKE";
export const doDislike = id => {
  return {
    type: DO_DISLIKE,
    payload: id
  };
};