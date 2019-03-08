import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getSmurfs } from '../actions'

import Smurf from './Smurf'
import SmurfForm from './SmurfForm'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <br></br>
        <SmurfForm />
        <p>{this.props.smurfs.map(smurf => {
          return <Smurf smurf={smurf} key={smurf.id} id={smurf.id} />
        })}</p>
      </div>
    );
  }
}

function mstp(state) {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  }
}

export default connect(mstp, { getSmurfs })(App)