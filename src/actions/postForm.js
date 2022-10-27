import axios from "axios";

export const postForm = (postData) => {
  return async (dispatch) => {
    dispatch({ type: "PATCH_FORM", payload: { requested: true } });
    try {
      const response = await axios.post("https://reqres.in/api/users", postData);
      const data = response.data;
      dispatch({ type: "POST_FORM", payload: data });
    } catch (error) {
      dispatch({ type: "PATCH_FORM", payload: { error: error.toString() } });
    }
  };
};
