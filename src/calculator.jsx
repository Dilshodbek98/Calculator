import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: "",
      result: ''
    };
  }
  whenOperantPressed = (e) => {
    if (this.state.expression.charAt(this.state.expression.length - 1) != e.target.innerHTML)
      if ('+-/*'.includes(this.state.expression.charAt(this.state.expression.length - 1)))
        this.setState({
          expression: this.state.expression.slice(0, this.state.expression.length - 1) + e.target.innerHTML,
        });
      else {
        this.setState({expression: this.state.expression + e.target.innerHTML})
      }
  }
  render() {
    return (
      <div className='calculator-grid'>
        {this.state.result ? (
          <div className='output'>{this.state.result}</div>
        ) : (
          <div className='output'>{this.state.expression}</div>
        )}
        <button
          className='span-two'
          onClick={() => this.setState({ expression: "", result: '' })}>
          AC
        </button>
        <button
          onClick={() =>
            this.setState({
              expression: this.state.expression.slice(
                0,
                this.state.expression.length - 1
              ),
            })
          }>
          DEL
        </button>
        <button onClick={(e) => this.whenOperantPressed(e)}>/</button>
        <button
          onClick={() =>
            this.setState({ expression: this.state.expression + 1, result: "" })
          }>
          1
        </button>
        <button
          onClick={() =>
            this.setState({ expression: this.state.expression + 2, result: "" })
          }>
          2
        </button>
        <button
          onClick={() =>
            this.setState({ expression: this.state.expression + 3, result: "" })
          }>
          3
        </button>
        <button onClick={(e) => this.whenOperantPressed(e)}>*</button>
        <button
          onClick={() =>
            this.setState({ expression: this.state.expression + 4, result: "" })
          }>
          4
        </button>
        <button
          onClick={() =>
            this.setState({ expression: this.state.expression + 5, result: "" })
          }>
          5
        </button>
        <button
          onClick={() =>
            this.setState({ expression: this.state.expression + 6, result: "" })
          }>
          6
        </button>
        <button onClick={(e) => this.whenOperantPressed(e)}>+</button>
        <button
          onClick={() =>
            this.setState({ expression: this.state.expression + 7, result: "" })
          }>
          7
        </button>
        <button
          onClick={() =>
            this.setState({ expression: this.state.expression + 8, result: "" })
          }>
          8
        </button>
        <button
          onClick={() =>
            this.setState({ expression: this.state.expression + 9, result: "" })
          }>
          9
        </button>
        <button onClick={(e) => this.whenOperantPressed(e)}>-</button>
        <button
          onClick={() =>
            this.state.expression.length !== 0 ?
              this.setState({ expression: this.state.expression + "." })
              : ''
          }>
          .
        </button>
        <button
          onClick={() =>
            this.state.expression.length !== 0
              ? this.setState({ expression: this.state.expression + 0, result:'' })
              : ""
          }>
          0
        </button>
        <button
          className='span-two'
          onClick={() =>
            this.state.expression.length !== 0
              ? this.setState({
                  result: eval(this.state.expression),
                  expression: "",
                })
              : ""
          }>
          =
        </button>
      </div>
    );
  }
}

export default Calculator