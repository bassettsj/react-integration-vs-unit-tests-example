import React, { useState } from "react"
import CounterBtn from "./CounterBtn"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    const {
      increment,
      decrement,
      state: { count }
    } = this
    return (
      <>
        <p>Times clicked: {count}</p>
        <CounterBtn onClick={increment}>+</CounterBtn>
        <CounterBtn onClick={decrement}>-</CounterBtn>
      </>
    )
  }
}

export default Counter
