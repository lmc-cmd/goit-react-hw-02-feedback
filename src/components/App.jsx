import { Component } from "react"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";


export class App extends Component  {
total = 0
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  handleBtnClick =() =>{
    this.setState({ good: this.state.good +1})
  }

  countTotalFeedback = () => {
    // this.setState(() => ({ total: this.state.bad + this.state.good + this.state.neutral}))
    // this.setState({ total: this.state.bad + this.state.good + this.state.neutral})
    this.total = this.state.good + this.state.bad + this.state.neutral
  }

  countPositiveFeedbackPercentage = () =>{
  this.setState((prevState) => ({positivPercent: prevState.this.state.bad / prevState.this.state.good}))
}
  handleChange = e => {
    this.countTotalFeedback()
    // this.countPositiveFeedbackPercentage()
}


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
      <FeedbackOptions state={this.state} handleBtnClick={this.handleBtnClick} handleChange={this.handleChange}   />
      <Statistics state={this.state} total={this.total} />
    </div>
  );}
};
