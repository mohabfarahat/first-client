import React, { Component } from "react";
import "./todo.css";

class TodoList extends Component {
  state = {
    todos: [
      { text: "Do laundry", completed: false },
      { text: "Buy groceries", completed: true },
      { text: "Walk the dog", completed: false },
    ],
    newTodoText: "",
  };
  handleInputChange = (event) => {
    this.setState({ newTodoText: event.target.value });
  };

  handleAddTodo = () => {
    const newTodo = { text: this.state.newTodoText, completed: false };
    this.setState({
      todos: [...this.state.todos, newTodo],
      newTodoText: "",
    });
  };

  handleToggleCompleted = (todoIndex) => {
    const newTodos = this.state.todos.slice();
    const todo = newTodos[todoIndex];
    todo.completed = !todo.completed;
    this.setState({ todos: newTodos });
  };

  handleDelete = (todoIndex) => {
    const newTodos = this.state.todos.slice();
    newTodos.splice(todoIndex, 1);
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos, newTodoText } = this.state;
    const incompleteTodos = todos.filter((todo) => !todo.completed);

    return (
      <>
        <ul>
          <div>
            <input
              type="text"
              value={newTodoText}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleAddTodo}>Add Todo</button>
          </div>
          {incompleteTodos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.handleToggleCompleted(index)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
