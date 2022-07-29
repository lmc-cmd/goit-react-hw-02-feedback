import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import s from './App.module.css';

export class App extends Component {
  total = 0;
  positivePercentage = 0;
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleBtnClick = event => {
     const targetBtn = event.target.attributes.datatype.nodeValue
     this.setState({ [targetBtn]: this.state[targetBtn] + 1 });
  };
  countTotalFeedback = () => {
    this.total = this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good !== 0)
    this.positivePercentage = ((this.state.good / this.total) * 100).toFixed(2);
  };

  render() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    return (
      <div className={s["main-container"]}
 
      >
        {/* <Section /> */}
        <FeedbackOptions
          state={this.state}
          handleBtnClick={this.handleBtnClick}
        />
        <Statistics
          state={this.state}
          total={this.total}
          positivePercentage={this.positivePercentage}
        />
      </div>
    );
  }
}
