import React, { Component } from 'react';
import './App.css';
import { getRes } from '../api_calls.js'; 
import Reservations from '../Reservations/Reservations.js'; 

class App extends Component {
  constructor() {
    super(); 
      this.state = {
        reservations: [], 
        error: ''
      }; 
  }

  componentDidMount() {
    getRes() 
      .then(reservations => this.setState({ reservations }))
      .catch(err => this.setState({ error: 'Something went wrong!'}))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
