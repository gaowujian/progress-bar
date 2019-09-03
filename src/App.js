import React, { Component } from "react"
import "./App.css"
import ProgressBar from "./components/ProgressBar"
import Option from "./components/Option"
import Button from "./components/Button"
import Title from "./components/Title"
import axios from "axios"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      payload: {
        buttons: [],
        bars: [],
        limit: null
      }
    }
  }

  render() {
    console.log(this.state)
    let progressBars = null
    let options = null
    let buttons = null
    if (this.state.payload) {
      progressBars = this.state.payload.bars.map((bar, index) => {
        return <ProgressBar key={index} style={{ width: bar[index] }}></ProgressBar>
      })
      options = this.state.payload.buttons.map((button, index) => {
        return <Option key={index}>#progress{index + 1}</Option>
      })
      buttons = this.state.payload.buttons.map((button, index) => <Button key={index}>{button}</Button>)
    }

    return (
      <div className="App">
        <Title />
        {progressBars}
        <select>{options}</select>
        {buttons}
      </div>
    )
  }

  async componentDidMount() {
    const response = await axios.get("http://pb-api.herokuapp.com/bars")
    const data = response.data
    this.setState({payload:data})
    console.log(this.state)
  }
}

export default App
