import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";

class App extends Component{ 
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  countTotalFeedback = () => { 
    const values = Object.values(this.state);
    const total = values.reduce((acc, value) => acc + value,0)
    return total;
  }
  
  countPositiveFeedbackPercentage = (total) => {
    let positiveFeedback = 0;

    return (total === 0 ? positiveFeedback : positiveFeedback = Math.round(this.state.good / total * 100));
  }

  onLeaveFeedback = (name) => {
    this.setState(prevState => ({ [name]: prevState[name]  + 1}))
  }

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(totalFeedback);
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions  onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
         
        <Section title="Statistics">
          <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
        </Section>
        
      </>
    )
  }
  
}
export default App;


