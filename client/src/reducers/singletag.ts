type Action = {
  type: string;
  data?: any;
};

export const singletag = (state = null, action: Action) => {
  switch (action.type) {
    case "GET_TAG":
      return state = action?.data
    default:
      return state;
  }
};
