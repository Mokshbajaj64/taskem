type Action = {
  type: string;
  data?: any;
};

export const singleproject = (state = null, action: Action) => {
  switch (action.type) {
    case "GET_PROJECT":
      return state = action?.data
    default:
      return state;
  }
};
