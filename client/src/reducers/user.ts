type Action = {
  type: string;
  data?: any;
};

export const user = (state = { authData: null }, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return localStorage.setItem("token", JSON.stringify(action?.data));
    case "GET_USER":
      return (state = { authData: action?.data });
    default:
      return state;
  }
};
