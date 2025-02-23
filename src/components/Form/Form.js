import React, { Component } from 'react'
import './form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            time: '',
            number: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
        console.log(this.state)
    }

    clearForm = () => {
        this.setState({
            name: '',
            date: '',
            time: '',
            number: '' 
        })
    }

    submitRes = event => {
        event.preventDefault(); 
        const newRes = {
            id: Date.now(), 
            ...this.state
        }
        this.props.addRes(newRes)
        this.clearForm(); 
    }

    render () {
        return (
            <form>
                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                />
                <input 
                    type='text'
                    placeholder='Date'
                    name='date'
                    value={this.state.date}
                    onChange={event => this.handleChange(event)}
                />
                <input 
                    type='text'
                    placeholder='Time'
                    name='time'
                    value={this.state.time}
                    onChange={event => this.handleChange(event)}
                />
                <input 
                    type='number'
                    placeholder='Number of Guests'
                    name='number'
                    value={this.state.number}
                    onChange={event => this.handleChange(event)}
                />
                <button className='submit-button' onClick={event => this.submitRes(event)}>MAKE RESERVATION</button>
            </form>
        )
    }
}

export default Form; 