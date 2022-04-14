type Action = {
  type: string;
  data?: any;
};

export const weeklytask = (state = { weeklyTaskData: null }, action: Action) => {
  switch (action.type) {
    case "GET_WEEKLY_TASKS":
      return (state = { weeklyTaskData: action?.data });
    case "ADD_WEEKLY_TASK":
      return (state = { weeklyTaskData: action?.data });
    case "DELETE_WEEKLY_TASK":
      return (state = { weeklyTaskData: action?.data });
    case "UPDATE_WEEKLY_TASK":
      return (state = { weeklyTaskData: action?.data });
    case "COMPLETE_WEEKLY_TASK":
      return (state = { weeklyTaskData: action?.data });
    default:
      return state;
  }
};
