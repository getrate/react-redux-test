import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.renderTodos = this.renderTodos.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }

  componentWillMount() {
    // slurp the initial state of the store and set counter to this
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  submitMessage() {
    if (this.state.input !== '') {
      this.props.submitNewMessage(this.state.input, window.id++)
      this.setState({
        input: ''
      })
    }
  }

  handleComplete(id) {
    this.props.toggleComplete(id)
  }

  handleRemove(id) {
    console.log(id)
    this.props.toggleRemove(id)
  }

  changeFilter(filter) {
    console.log(filter)
    this.props.filter(filter)
  }

  renderTodos() {
    return this.props.messages.map((item, i) => {
      let comp = item.isCompleted ? {
        textDecoration: 'line-through'
      } : null
      let visib = !item.isVisible ? {
        opacity: .2
      } : null
      return (
        <li
          key={i}
          style={visib}
        >
          <span
            style={comp}
            onClick={() => { this.handleComplete(item.id) }}
          >
            {item.text}
          </span>
          <button
            className='btn-close material-icons'
            onClick={() => { this.handleRemove(item.id) }}
          >
            close
        </button>
        </li>)
    });
  }

  render() {
    const {
      renderTodos,
      state,
      submitMessage,
      handleChange
    } = this;

    return (
      <div className='wrapper'>
        <input
          onChange={handleChange}
          value={state.input}
        />
        <button
          className='submit-button'
          onClick={submitMessage.bind(this)}
        >
          Submit
        </button>
        <ul>{renderTodos()}</ul>
        <div className='filters'>
          <button className='' onClick={() => { this.changeFilter('SHOW_ACTIVE') }}>Active</button>
          <button className='' onClick={() => { this.changeFilter('SHOW_COMPLETED') }}>Done</button>
          <button className='' onClick={() => { this.changeFilter('SHOW_ALL') }}>All</button>
        </div>
      </div>
    )
  }
}

export default App
