export const addBike = bike => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("bikes")
      .add({
        ...bike,
        // hoursLowerLegService: bike.lowerLegService,
        // hoursForkFullRebuild: bike.forkFullRebuild,
        // hoursAirCanService: bike.airCanService,
        // hoursShockFullRebuild: bike.shockFullRebuild
      })
      .then(() => {
        dispatch({ type: "ADD_BIKE", bike });
      })
      .catch(err => {
        dispatch({ type: "ADD_BIKE_ERROR", err });
      });
  };
};
