import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0,
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' })
  }

  submitResy = event => {
    event.preventDefault();
    const newResy = {
      id: Date.now(),
      ...this.state
    }
    this.props.addResy(newResy);
    this.clearInputs();
  }

  render() {
    return (
        <form className="res-form">
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
          />
        <input
          type='text'
          placeholder='Date {mm/dd}'
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
          placeholder='Number of guests'
          name='number'
          value={this.state.guests}
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.submitResy(event)} className="resy-button">Make Reservation</button>
      </form>
    )
  }
}

export default Form;