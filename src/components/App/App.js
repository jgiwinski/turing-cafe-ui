import React, { Component } from 'react';
import './App.css';
import { getRes, postRes } from '../api_calls.js'; 
import Reservations from '../Reservations/Reservations.js'; 
import Form from '../Form/Form.js'; 

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

  addRes = (newRes) => {
    postRes(newRes)
      .then(result => {
        if(result.id) {
          this.setState({ reservations: [...this.state.reservations, result], error: ''})
        } else {
          this.setState({ error: 'Please full out all the fields to make a reservation!'})
        }
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRes={this.addRes}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
