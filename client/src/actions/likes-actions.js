import axios from "axios";

export const DO_LIKE = "DO_LIKE";
export const doLike = id => async dispatch => {
  try {
    await axios.post(`/rest/rules/${id}/likes`);
    dispatch({
      type: DO_LIKE,
      payload: id
    })
  } catch (error) {
    console.log(error);
  }
};

export const DO_DISLIKE = "DO_DISLIKE";
export const doDislike = id => async dispatch => {
  try {
    await axios.post(`/rest/rules/${id}/dislikes`);
    dispatch({
      type: DO_DISLIKE,
      payload: id
    })
  } catch (error) {
    console.log(error);
  }
};