type Action = {
  type: string;
  data?: any;
};

export const todaytask = (state = { todayTaskData: null }, action: Action) => {
  switch (action.type) {
    case "GET_TODAY_TASKS":
      return (state = { todayTaskData: action?.data });
    case "ADD_TODAY_TASK":
      return (state = { todayTaskData: action?.data });
    case "DELETE_TODAY_TASK":
      return (state = { todayTaskData: action?.data });
    case "UPDATE_TODAY_TASK":
      return (state = { todayTaskData: action?.data });
    case "COMPLETE_TODAY_TASK":
      return (state = { todayTaskData: action?.data });
    default:
      return state;
  }
};
