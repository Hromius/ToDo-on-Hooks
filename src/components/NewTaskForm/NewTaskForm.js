/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

/* export default class NewTaskForm extends React.Component {
  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { label } = this.state;
    event.preventDefault();
    this.props.onItemAdded(label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-todo"
            onChange={this.onLabelChange}
            placeholder="What needs to be done?"
            value={this.state.label}
          />
          <button className="form_button">ADD</button>
        </form>
      </header>
    );
  }
} */

export default function NewTaskForm({ onItemAdded }) {
  let [localLabel, setLocalLabel] = useState('');
  const onLabelChange = (event) => {
    setLocalLabel(event.target.value);
  };

  let onSubmit = (event) => {
    event.preventDefault();
    onItemAdded(localLabel);
    setLocalLabel('');
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          className="new-todo"
          onChange={onLabelChange}
          placeholder="What needs to be done?"
          value={localLabel}
        />
        <button className="form_button">ADD</button>
      </form>
    </header>
  );
}
