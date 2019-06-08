import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar'
import Dashbaord from './components/dashboard/dashboard'
import AddBike from './components/pages/AddBike'
import BikeDetails from './components/pages/BikeDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashbaord} />
            <Route path='/addbike' component={AddBike} />
            <Route path='/bike/:id' component={BikeDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
