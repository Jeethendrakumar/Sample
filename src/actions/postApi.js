import axios from "axios";

export const postApi = () => {
  return async (dispatch) => {
    dispatch({ type: "PATCH_API", payload: { requested: true } });
    try {
      const response = await axios.get("https://reqres.in/api/users");
      const data = response.data;
      dispatch({ type: "POST_API", payload: data });
    } catch (error) {
      dispatch({ type: "PATCH_API", payload: { error: error.toString() } });
    }
  };
};
