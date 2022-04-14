type Action = {
  type: string;
  data?: any;
};

export const project = (state = { projectData: null }, action: Action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return (state = { projectData: action?.data });
    case "CREATE_PROJECT":
      return (state = { projectData: action?.data });
    case "DELETE_PROJECT":
      return (state = { projectData: action?.data });
    case "UPDATE_PROJECT":
      return (state = { projectData: action?.data });
    default:
      return state;
  }
};
