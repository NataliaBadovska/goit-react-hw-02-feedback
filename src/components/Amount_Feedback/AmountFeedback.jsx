import React, { Component } from "react";
import css from "./AmountFeedback.module.css"
// import Statistics from "./Statistics";

class AmountFeedback extends Component{
     state = {
        good: 0,
        neutral: 0,
        bad: 0,
  }
    
    incrementReviews = (evt) => {
      const {name} = evt.target
      this.setState(prevState => ({ [name]: prevState[name]  + 1}))
  }
  
  countTotalFeedback = () => { 
    const values = Object.values(this.state);
    let total = 0;

    for (const value of values) {
       total += value;
    }
    
    return total;
  }
  
  countPositiveFeedbackPercentage = (total) => {
    let positiveFeedback = 0;

    return (total === 0 ? positiveFeedback : positiveFeedback = Math.round(this.state.good / total * 100));
  }
  

  render() {
    const { good, neutral, bad } = this.state;
       
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(totalFeedback);

        return (
          <div className={css.feedback}>
            <h2>Please leave feedback</h2>
            <button type="button" name="good" className={css.button}  onClick={this.incrementReviews}>Good</button>
            <button type="button" name="neutral"  className={css.button} onClick={this.incrementReviews} >Neutral</button>
            <button type="button" name="bad" className={css.button} onClick={this.incrementReviews}>Bad</button>
                {/* <Statistics/> */}
            <h2>Statistics</h2> 
                 <ul className={css.statistics}>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {totalFeedback}</li>
                    <li>Positive feedback: {positiveFeedback}%</li>
                </ul>
          </div>
        );
}
};

export default AmountFeedback;