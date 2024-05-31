import React, { Component } from "react";
import css from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component{
    
    incrementReviews = (evt) => {
        this.props.onLeaveFeedback(evt.target.name);
    }
    
    render() {
        
        return (
            <>
            <button type="button" name="good" className={css.button}  onClick={this.incrementReviews}>Good</button>
            <button type="button" name="neutral"  className={css.button} onClick={this.incrementReviews} >Neutral</button>
            <button type="button" name="bad" className={css.button} onClick={this.incrementReviews}>Bad</button> 
            </>
        
    )
}
}

export default FeedbackOptions;