import React, { Component } from "react";
import css from "./AmountFeedback.module.css"

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

     render() {
        return (
          <div className={css.feedback}>
            <h2>Please leave feedback</h2>
            <button type="button" name="good" className={css.button}  onClick={this.incrementReviews}>Good</button>
            <button type="button" name="neutral"  className={css.button} onClick={this.incrementReviews} >Neutral</button>
            <button type="button" name="bad" className={css.button} onClick={this.incrementReviews}>Bad</button>
                <h2>Statistics</h2>
                <ul className={css.statistics}>
                    <li>Good: {this.state.good}</li>
                    <li>Neutral: {this.state.neutral}</li>
                    <li>Bad: {this.state.bad}</li>
                </ul>
          </div>
        );
}
};

export default AmountFeedback;