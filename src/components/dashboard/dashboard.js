import React, { Component } from "react";
import BikeList from "../pages/BikeList";
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    const { bikes } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s6 offset-s3">
            <BikeList bikes={bikes} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bikes: state.firestore.ordered.bikes
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "bikes" }])
)(Dashboard);
