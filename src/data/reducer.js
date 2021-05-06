const StartWebsite = () => ({
  StartWebsite: true
});

const reducer = (state, action) => {
  switch (action.type) {
    case "StartWebsite": return StartWebsite(state, action)
    default:
      return state;

  }
};

export default reducer;