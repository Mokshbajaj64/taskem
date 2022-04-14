type Action = {
  type: string;
  data?: any;
};

export const tag = (state = { tagData: null }, action: Action) => {
  switch (action.type) {
    case "GET_TAGS":
      return (state = { tagData: action?.data });
    case "CREATE_TAG":
      return (state = { tagData: action?.data });
    case "DELETE_TAG":
      return (state = { tagData: action?.data });
    case "UPDATE_TAG":
      return (state = { tagData: action?.data });
    default:
      return state;
  }
};
