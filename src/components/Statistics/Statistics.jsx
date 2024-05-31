import React, { Component } from "react";
import css from "./Statistics.module.css"
import NotificationMessage from "components/Notification_message/Notification_message";

class Statistics extends Component{
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;

        if ( total  !== 0) {
            return (
        <>                    
            <ul className={css.statistics}>
                <li className={css.statistics__item}>Good: {good}</li>
                <li className={css.statistics__item}>Neutral: {neutral}</li>
                <li className={css.statistics__item}>Bad: {bad}</li>
                <li className={css.statistics__item}>Total: {total}</li>
                <li className={css.statistics__item}>Positive feedback: {positivePercentage}% </li>
            </ul>
        </>
            )
        }
        return <NotificationMessage/>
    }  
    
}

export default Statistics;