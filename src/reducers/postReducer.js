const initialState = {
  requested: false,
  error: false,
  fetched: false,
  current_page: 1,
  current_id: "new",
  limit: 100,
  page: 1,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "PATCH_FORM":
      return { ...state, ...payload, requested: true };
    case "POST_FORM":
      return { ...state, result: payload, fetched: true, requested: false };
    default:
      return state;
  }
};
