const saveData = (state = [], action) => {
  switch (action.type) {
    case "Login":
      if (action.data !== undefined) {
        return action.data;
      } else {
      }
    default:
      return state;
  }
};

export default saveData;
