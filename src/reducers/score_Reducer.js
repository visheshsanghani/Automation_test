export default (state = 0, action) =>{
    switch (action.type) {
      case "SCORE_FINAL":
        return action.payload;
      default:
        return state;
    }
  };
  