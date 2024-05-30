import React, { Component } from "react";
import css from "./Statistics.module.css"

class Statistics extends Component{
    render() {
        return (
            <div>
                <h2>Statistics</h2>
               <ul className={css.statistics}>
                    <li>Good: {this.state.good}</li>
                    <li>Neutral: {this.state.neutral}</li>
                    <li>Bad: {this.state.bad}</li>
                    <li>Total: </li>
                    <li>Positive feedback: </li>
                </ul>
            </div>
            
        )
    }    
}

export default Statistics;