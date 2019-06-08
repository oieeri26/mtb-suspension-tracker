import React, { Component } from "react";
import { connect } from "react-redux";
import { addBike } from "../../store/actions/projectActions";

class AddBike extends Component {
  state = {
    bikeManufacturer: "",
    bikeModel: "",
    forkManufacturer: "",
    forkModel: "",
    lowerLegService: "",
    forkFullRebuild: "",
    shockManufacturer: "",
    shockModel: "",
    airCanService: "",
    shockFullRebuild: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBike(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container row">
        <form onSubmit={this.handleSubmit}>
          <div className="col s12 c">
            <h4 className="black-text">Bike Details</h4>
            <div className="input-field">
              <label htmlFor="bikeManufacturer">Manufacturer</label>
              <input
                type="text"
                id="bikeManufacturer"
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="bikeModel">Model</label>
              <input type="text" id="bikeModel" onChange={this.handleChange} />
            </div>
          </div>

          <div className="col s6">
            <h4 className="black-text">Fork Details</h4>

            <div className="input-field">
              <label htmlFor="forkManufacturer">Manufacturer</label>
              <input
                type="text"
                id="forkManufacturer"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="forkModel">Model</label>
              <input type="text" id="forkModel" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor="lowerLegService">
                Hours to Lower Leg Service
              </label>
              <input
                type="number"
                id="lowerLegService"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="forkFullRebuild">Hours to Full Rebuild</label>
              <input
                type="number"
                id="forkFullRebuild"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="col s6">
            <h4 className="black-text">Shock Details</h4>

            <div className="input-field">
              <label htmlFor="shockManufacturer">Manufacturer</label>
              <input
                type="text"
                id="shockManufacturer"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="shockModel">Model</label>
              <input type="text" id="shockModel" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor="airCanService">Hours to Air Can Service</label>
              <input
                type="number"
                id="airCanService"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="shockFullRebuild">Hours to Full Rebuild</label>
              <input
                type="number"
                id="shockFullRebuild"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div>
            <button className="btn center">Add Bike</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    addBike: bike => dispatch(addBike(bike))
  };
};

export default connect(
  null,
  mapDispatchtoProps
)(AddBike);
