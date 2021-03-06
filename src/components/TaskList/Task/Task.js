/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Timer from './Timer/Timer';

/* export default class Task extends React.Component {
  state = { text: this.props.label };

  changeElement = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  onSubmits = (event) => {
    event.preventDefault();
    this.props.onChanges(this.props.id, this.state.text);
    this.props.onToggleHide();
  };

  render() {
    const { label } = this.props;
    const { done } = this.props;
    const { hide } = this.props;
    const { parametr } = this.props;
    const { onToggleDone } = this.props;
    const date = formatDistanceToNow(new Date(), new Date(), { includeSeconds: true });
    let change = 'new-todo ';
    let classNamesLabel = 'description ';
    let classNamesElement;

    if (parametr === 'ALL') {
      classNamesElement += 'view ';
    } else if (parametr === 'Completed' && !done) {
      classNamesElement = 'view hide';
    } else if (parametr === 'Active' && done) {
      classNamesElement = 'view hide';
    }

    if (done) {
      classNamesLabel += 'completed';
    }
    if (hide) {
      change += ' hide';
    } else { classNamesLabel += ' hide'; }
    return (
      <div className={`${classNamesElement} elem-border`}>
        <input
          className="toggle"
          type="checkbox"
          onClick={onToggleDone}
        />
        <label>
          <span className={classNamesLabel}>
            {label}
            <Timer />
          </span>
          <form
            className="form"
            onSubmit={this.onSubmits}
          >

            <input
              type="text"
              className={change}
              onChange={this.changeElement}
              placeholder="What needs to change?"
              value={this.state.text}

            />
          </form>
          <span className="created">{date}</span>

        </label>

        <button
          type="button"
          className="icon icon-edit"
          onClick={this.onSubmits}
        />

        <button
          type="button"
          className="icon icon-destroy"
          onClick={this.props.delited}
        />

      </div>
    );
  }
} */

export default function Task({
  label, done, hide, parametr, onToggleDone, onChanges, onToggleHide, id, delited,
}) {
  let [text, setText] = useState(label);

  const changeElement = (event) => {
    setText(event.target.value);
  };

  const onSubmits = (event) => {
    event.preventDefault();
    onChanges(id, text);
    onToggleHide();
  };

  const date = formatDistanceToNow(new Date(), new Date(), { includeSeconds: true });
  let change = 'new-todo ';
  let classNamesLabel = 'description ';
  let classNamesElement;

  if (parametr === 'ALL') {
    classNamesElement += 'view ';
  } else if (parametr === 'Completed' && !done) {
    classNamesElement = 'view hide';
  } else if (parametr === 'Active' && done) {
    classNamesElement = 'view hide';
  }

  if (done) {
    classNamesLabel += 'completed';
  }
  if (hide) {
    change += ' hide';
  } else { classNamesLabel += ' hide'; }
  return (
    <div className={`${classNamesElement} elem-border`}>
      <input
        className="toggle"
        type="checkbox"
        onClick={onToggleDone}
      />
      <label>
        <span className={classNamesLabel}>
          {label}
          <Timer />
        </span>
        <form
          className="form"
          onSubmit={onSubmits}
        >

          <input
            type="text"
            className={change}
            onChange={changeElement}
            placeholder="What needs to change?"
            value={text}
          />
        </form>
        <span className="created">{date}</span>

      </label>

      <button
        type="button"
        className="icon icon-edit"
        onClick={onSubmits}
      />

      <button
        type="button"
        className="icon icon-destroy"
        onClick={delited}
      />

    </div>
  );
}
