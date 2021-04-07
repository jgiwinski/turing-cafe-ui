import React, { Component } from 'react';
import './App.css';
import { getRes } from '../components/api_calls.js'; 

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
      .then(res => this.setState({ res }))
      .catch(err => this.setState({ error: 'Something went wrong!'}))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
