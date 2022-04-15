type Action = {
  type: string;
  data?: any;
};

export const completedtasks = (state = { completedTaskData: null }, action: Action) => {
  switch (action.type) {
    case "GET_COMPLETED_TASKS":
      return (state = { completedTaskData: action?.data });
    default:
      return state;
  }
};
