type Action = {
  type: string;
  data?: any;
};

export const deletedtasks = (
  state = { deletedTasksData: null },
  action: Action
) => {
  switch (action.type) {
    case "GET_DELETED_TASKS":
      return (state = { deletedTasksData: action?.data });
    default:
      return state;
  }
};
