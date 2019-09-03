import React, { Component } from "react"
import "./App.scss"
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

  selectHandler = event => {
    const value = event.target.value
    // get the current index
    const selectedIndex = value.substr(value.length - 1)
    this.setState({ index: selectedIndex - 1 })
  }
  clickHandler = button => {
    const value = this.state.payload.bars[this.state.index] + button
    const payload = { ...this.state.payload }
    payload.bars[this.state.index] = value >= 0 ? (value <= 230 ? value : 230) : 0

    const progressBar = document.querySelector(`.progress-bar-${this.state.index}`)
    if (value > 100) progressBar.classList.add("red")
    else progressBar.classList.remove("red")
    this.setState({ payload })
  }

  render() {
    console.log(this.state.payload.limit)
    let progressBars = null
    let options = null
    let buttons = null
    if (this.state.payload) {
      progressBars = this.state.payload.bars.map((bar, index) => {
        return <ProgressBar className={`progress-bar-${index}`} key={index} width={bar} limit={this.state.payload.limit} />
      })
      options = this.state.payload.bars.map((bar, index) => {
        return <Option key={index} index={index} />
      })
      buttons = this.state.payload.buttons.map((button, index) => (
        <Button key={index} value={button} changed={event => this.clickHandler(button)} />
      ))
    }

    return (
      <div className="App">
        <Title />
        {progressBars}
        <select onChange={this.selectHandler}>{options}</select>
        {buttons}
      </div>
    )
  }

  async componentDidMount() {
    const response = await axios.get("https://pb-api.herokuapp.com/bars")
    const data = response.data
    this.setState({ payload: data })
  }
}

export default App
