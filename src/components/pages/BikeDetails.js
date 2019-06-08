import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = props => {
  const { bike } = props;

  if (bike) {
    return (
      <div className="container center section row">
        <div className="card">
          <div className="card-content">
            <span className="card-title">
              <h3>
                {bike.bikeManufacturer} {bike.bikeModel}
              </h3>
            </span>

            <div>
              <h5>
                {bike.forkManufacturer} {bike.forkModel}:
              </h5>
              <div>Lower Leg Service Every {bike.lowerLegService} Hours</div>

              <div>Full Rebuild Every {bike.forkFullRebuild} Hours</div>
            </div>
            {bike.shockManufacturer && (
              <div>
                <h5>
                  {bike.shockManufacturer} {bike.shockModel}:
                </h5>
                <div>Air Can Service Every {bike.airCanService} Hours</div>

                <div>Full Rebuild Every {bike.shockFullRebuild} Hours</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading bike...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const bikes = state.firestore.data.bikes;
  const bike = bikes ? bikes[id] : null;
  return {
    bike: bike
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "bikes" }])
)(ProjectDetails);
