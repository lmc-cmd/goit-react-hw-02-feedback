import { Component } from "react"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";


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
    
  }
// handleCountDecrement = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count - 10 };
//     });
  countTotalFeedback = () => {
    this.setState((prevState) => { this.total= this.prevState.bad + this.prevState.good + this.prevState.neutral})
    // this.setState({ total: this.state.bad + this.state.good + this.state.neutral})
    this.total = this.state.good + this.state.bad + this.state.neutral
  }

  countPositiveFeedbackPercentage = () =>{
  this.positivPercent = this.state.total / this.state.bad}

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
      <FeedbackOptions state={this.state} handleBtnClick={this.handleBtnClick}   />
      <Statistics state={this.state} total={this.total} countTotalFeedback={this.countTotalFeedback} />
    </div>
  );}
};
