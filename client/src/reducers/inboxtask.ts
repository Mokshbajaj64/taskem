type Action = {
  type: string;
  data?: any;
};

export const inboxtask = (state = { inboxTaskData: null }, action: Action) => {
  switch (action.type) {
    case "GET_INBOX_TASKS":
      return (state = { inboxTaskData: action?.data });
    case "ADD_INBOX_TASK":
      return (state = { inboxTaskData: action?.data });
    case "DELETE_INBOX_TASK":
      return (state = { inboxTaskData: action?.data });
    case "UPDATE_INBOX_TASK":
      return (state = { inboxTaskData: action?.data });
    case "COMPLETE_INBOX_TASK":
      return (state = { inboxTaskData: action?.data });
    case "SEARCH_INBOX_TASK":
      return (state = { inboxTaskData: action?.data });
    default:
      return state;
  }
};
