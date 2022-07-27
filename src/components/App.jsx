import { Component } from "react"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";


export class App extends Component  {
state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
  handleBtnClick =() => this.setState((prevState) => {
      return { good: prevState.good + 1 }
    })
  
  render(){
  return (
    <div 
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column'
      }}
    >
      <FeedbackOptions state={this.state} handleBtnClick={this.handleBtnClick} />
      <Statistics state={this.state} />
    </div>
  );}
};
