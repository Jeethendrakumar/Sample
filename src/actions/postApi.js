import axios from "axios";

export const postApi = (postData) => {
  return async (dispatch) => {
    dispatch({ type: "PATCH_API", payload: { requested: true } });
    try {
      const response = await axios.post("https://reqres.in/api/users", postData);
      const data = response.data;
      dispatch({ type: "POST_API", payload: data });
    } catch (error) {
      dispatch({ type: "PATCH_API", payload: { error: error.toString() } });
    }
  };
};
