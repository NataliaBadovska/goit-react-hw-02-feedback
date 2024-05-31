import { Component } from "react";
import css from './Notification_message.module.css';

class NotificationMessage extends Component {
    render() {
        return <p className={css.message}>There is no feedback</p>
    }
}
    

export default NotificationMessage;