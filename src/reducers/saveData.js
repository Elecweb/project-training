const saveData = (state = [], action) => {
  switch (action.type) {
    case "Login":
      return action.data;
    default:
      return state;
  }
};

export default saveData;
