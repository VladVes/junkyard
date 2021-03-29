import React from "react";
import ReactDom from "react-dom";

interface AppProps {
  color?: string;
}

// const App = (props: AppProps): JSX.Element => {
//   return <div>Hi there! {props.color}</div>;
// };

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  onIncrement = (): void => this.setState({ counter: this.state.counter + 1 });

  onDecrement = (): void => this.setState({ counter: this.state.counter - 1 });

  render() {
    return (
      <div>
        <div>Hi there! {this.props.color}</div>
        <div>
          <button onClick={this.onIncrement}>Increment</button>
          <button onClick={this.onDecrement}>Decrement</button>
          {this.state.counter}
        </div>
      </div>
    );
  }
}

ReactDom.render(<App color="red" />, document.querySelector("#root"));
