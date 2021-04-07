import React, { Component } from 'react';
import './App.css';
import { getRes, postRes, deleteRes } from '../api_calls.js'; 
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

  removeRes = (id) => {
    deleteRes(id) 
      .then(response => {
        if(response.ok) {
          const filteredRes = this.state.reservations.filter(res => res.id != id)
          this.setState({ reservations: filteredRes, error: '' })
        } else {
          this.setState({ error: `Oh no, looks like there was a problem!`})
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
          <Reservations reservations={this.state.reservations} removeRes={this.removeRes}/>
        </div>
      </div>
    )
  }
}

export default App;
