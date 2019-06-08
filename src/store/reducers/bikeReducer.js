const initState = {
    bikes: [
    ]
}

const bikeReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_BIKE":
          return state;
        case "ADD_BIKE_ERROR":
          return state;
        default:
          return state;
      }
}

export default bikeReducer