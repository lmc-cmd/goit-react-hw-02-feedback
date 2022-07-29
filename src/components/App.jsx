import { Component } from "react"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
// import Section from "./Section/Section"


export class App extends Component  {
  total = 0
  positivPercent = 0
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  handleBtnClick =() =>{
    this.setState({ good: this.state.good +1}) 
    // this.total += 1
  }

  countTotalFeedback = () => {
    // this.setState((prevState) => { this.total= this.prevState.bad + this.prevState.good + this.prevState.neutral})
    // this.setState({ total: this.state.bad + this.state.good + this.state.neutral})
    this.total = this.state.good + this.state.bad + this.state.neutral
  }

  countPositiveFeedbackPercentage = () =>{
  this.positivPercent = this.total / this.state.bad}

//   handleChange = e => {
//     this.countTotalFeedback()
//     this.countPositiveFeedbackPercentage()
// }


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
      {/* <Section /> */}
      <FeedbackOptions state={this.state} handleBtnClick={this.handleBtnClick} countTotalFeedback={this.countTotalFeedback}   />
      <Statistics state={this.state} total={this.total} countTotalFeedback={this.countTotalFeedback} />
    </div>
  );}
};
