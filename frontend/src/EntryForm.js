import React, { Component } from 'react';
import axios from 'axios';

class EntryForm extends Component {
  constructor() {
    super()
    this.state = {
      entry: '',
      withdraw: [],
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { entry } = this.state

    axios.get('http://localhost:3002/withdraw?entry=' + entry)
      .then((result) => {
        this.setState({ withdraw: result.data.result })
      })
  }

  render() {
    const { entry, withdraw } = this.state;

    return (
      <p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="entry"
            value={entry}
            onChange={this.onChange}
          />

          <button type="submit">Submit</button>
        </form>
        <p id="name">{ withdraw.join(', ') }</p>
      </p>
    );
  }
}

export default EntryForm
