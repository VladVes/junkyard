import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo, DeleteTodoAction } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: (id: number) => DeleteTodoAction;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  handleClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  handleOnTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this.handleOnTodoClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Fetch</button>
        {this.state.fetching ? <div>Loading...</div> : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProp = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos,
  };
};

export const App = connect(mapStateToProp, { fetchTodos, deleteTodo })(_App);
