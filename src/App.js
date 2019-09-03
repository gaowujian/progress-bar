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
      index:0,
      
        buttons: [],
        bars: [],
        limit: null
      
    }
  }
  
  render() {
    console.log(this.state)
     let progressBars = null;
     progressBars = this.state.bars.map((bar,index)=>{
      return <ProgressBar key={index} style={{width: bar[index]}}></ProgressBar>
    })
    
    let options = null
    options = this.state.buttons.map((button,index)=>{
      return <Option key={index}>#progress{index+1}</Option>
    })
    let buttons = null
    buttons = this.state.buttons.map((button,index)=><Button key={index}>{button}</Button>)
  
    return (
      <div className="App">
        <Title/>
        {progressBars}
        <select>{options}</select>
        {buttons}
      </div>
    )
  }

  async componentDidMount(){
    const response = await axios.get("http://pb-api.herokuapp.com/bars")
    const data = response.data
    this.setState(data)
    console.log(this.state,"dd")
  }
}

export default App
