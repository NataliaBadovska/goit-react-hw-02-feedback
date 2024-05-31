import { Component } from "react";
import css from './Section.module.css'

class Section extends Component{
    render() {
        
        const { children, title } = this.props;

        return (
            <div className={css.section}>
                <h1 className={css.section__title}>{title}</h1>
                {children}
            </div>
            )
}
}

export default Section;