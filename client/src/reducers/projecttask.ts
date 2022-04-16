type Action = {
  type: string;
  data?: any;
};

export const projecttask = (
  state = { projectTaskData: null },
  action: Action
) => {
  switch (action.type) {
    case "GET_PROJECT_TASKS":
      return (state = { projectTaskData: action?.data });
    case "CREATE_PROJECT_TASKS":
      return (state = { projectTaskData: action?.data });
    case "DELETE_PROJECT_TASKS":
      return (state = { projectTaskData: action?.data });
    case "UPDATE_PROJECT_TASKS":
      return (state = { projectTaskData: action?.data });
    case "COMPLETE_PROJECT_TASKS":
      return (state = { projectTaskData: action?.data });
    case "SEARCH_PROJECT_TASKS":
      return (state = { projectTaskData: action?.data });
    case "FILTER_PROJECT_TASKS_TIME":
      return (state = { projectTaskData: action?.data });
    case "FILTER_PROJECT_TASKS_TITLE":
      return (state = { projectTaskData: action?.data });
    default:
      return state;
  }
};
