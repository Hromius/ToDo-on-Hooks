/* eslint-disable semi */
/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/footer/Footer';

/* export default class App extends React.Component {
  maxID = 50;

  state = {
    taskLists: [],
    parametr: [],
  };

  filters = (param) => {
    this.setState((state) => {
      if (param === 'ALL') {
        state.parametr = param;
      } else if (param === 'Active') {
        state.parametr = param;
      } else if (param === 'Completed') {
        state.parametr = param;
      }
      return { parametr: state.parametr };
    });
  };

  clearCompleted = () => {
    this.setState((state) => {
      const newArr = state.taskLists.filter((el) => !el.done);
      return {
        taskLists: newArr,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState((state) => {
      const index = state.taskLists.findIndex((el) => el.id === id);

      const oldItem = state.taskLists[index];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArr = [
        ...state.taskLists.slice(0, index),
        newItem,
        ...state.taskLists.slice(index + 1)];

      return {
        taskLists: newArr,

      };
    });
  };

  onToggleHide = (id) => {
    this.setState((state) => {
      const index = state.taskLists.findIndex((el) => el.id === id);

      const oldItem = state.taskLists[index];
      const newItem = { ...oldItem, hide: !oldItem.hide };
      const newArr = [
        ...state.taskLists.slice(0, index),
        newItem,
        ...state.taskLists.slice(index + 1)];

      return {
        taskLists: newArr,

      };
    });
  };

  deliteItem = (id) => {
    this.setState((state) => {
      const index = state.taskLists.findIndex((el) => el.id === id);

      const newArr = [
        ...state.taskLists.slice(0, index),
        ...state.taskLists.slice(index + 1)];

      return { taskLists: newArr };
    });
  };

  changeElement = (id, text) => {
    this.setState((state) => {
      const index = state.taskLists.findIndex((el) => el.id === id);

      const oldItem = state.taskLists[index];

      const newIndex = { ...oldItem, label: text };

      const newArr = [
        ...state.taskLists.slice(0, index),
        newIndex,
        ...state.taskLists.slice(index + 1),
      ];
      return { taskLists: newArr };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState((state) => {
      const newArr = [
        ...state.taskLists.slice(), newItem,
      ];
      return { taskLists: newArr };
    });
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      hide: true,
      id: this.maxID++,
    };
  }

  render() {
    const { taskLists, parametr } = this.state;
    const itemsLeft = taskLists.filter((element) => !element.done).length;

    return (
      <section className="todoapp">
        <NewTaskForm onItemAdded={this.addItem} />
        <section className="main">
          <TaskList
            tasks={taskLists}
            parametr={parametr}
            delited={this.deliteItem}
            onToggleDone={this.onToggleDone}
            onToggleHide={this.onToggleHide}
            changeElement={this.changeElement}
          />
        </section>
        <Footer
          left={itemsLeft}
          parametr={parametr}
          clearCompleted={this.clearCompleted}
          filters={this.filters}

        />

      </section>
    );
  }
} */

export default function App() {
  let [taskLists, setTaskLists] = useState([]);
  let [parametr, setParametr] = useState([]);
  let [ID, setID] = useState(50);
  let maxID = () => {
    setID(() => ID + 1);
    return ID;
  };
  const filters = (param) => setParametr(param);

  const clearCompleted = () => {
    setTaskLists(() => {
      const newArr = taskLists.filter((el) => !el.done);
      return newArr;
    });
  };

  const onToggleDone = (id) => {
    const index = taskLists.findIndex((el) => el.id === id);
    const oldItem = taskLists[index];
    const newItem = { ...oldItem, done: !oldItem.done };
    const newArr = [...taskLists.slice(0, index), newItem, ...taskLists.slice(index + 1)];
    setTaskLists(newArr);
  };

  const onToggleHide = (id) => {
    const index = taskLists.findIndex((el) => el.id === id);
    const oldItem = taskLists[index];
    const newItem = { ...oldItem, hide: !oldItem.hide };
    const newArr = [...taskLists.slice(0, index), newItem, ...taskLists.slice(index + 1)];

    setTaskLists(newArr);
  };

  const deliteItem = (id) => {
    const index = taskLists.findIndex((el) => el.id === id);
    const newArr = [...taskLists.slice(0, index), ...taskLists.slice(index + 1)];

    setTaskLists(newArr);
  };

  const changeElement = (id, text) => {
    const index = taskLists.findIndex((el) => el.id === id);

    const oldItem = taskLists[index];

    const newIndex = { ...oldItem, label: text };

    const newArr = [...taskLists.slice(0, index), newIndex, ...taskLists.slice(index + 1)];
    setTaskLists(taskLists = newArr)
  };

  function createTodoItem(label) {
    return {
      label,
      done: false,
      hide: true,
      id: maxID(),
    };
  }

  const addItem = (text) => {
    let newItem = createTodoItem(text);
    const newArr = [...taskLists.slice(), newItem];
    setTaskLists(newArr);
  };

  const itemsLeft = taskLists.filter((element) => !element.done).length;

  return (
    <section className="todoapp">
      <NewTaskForm onItemAdded={addItem} />
      <section className="main">
        <TaskList
          tasks={taskLists}
          parametr={parametr}
          delited={deliteItem}
          onToggleDone={onToggleDone}
          onToggleHide={onToggleHide}
          changeElement={changeElement}
        />
      </section>
      <Footer left={itemsLeft} parametr={parametr} clearCompleted={clearCompleted} filters={filters} />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
