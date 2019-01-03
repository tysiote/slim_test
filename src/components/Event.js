import React from 'react';
import moment from "moment";

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    render() {
        // console.log(this.props);
        if (!this.state.isVisible) {
            return null;
        }
        return (
            <div>
                {this.props.data.title} - {this.props.data.start_time}
            </div>
        );
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let state = this.state;
        if (
            moment(nextProps.current_datetime) <= moment(this.props.data.start_time, "YYYY-MM-DD HH:mm:ss") &&
            moment(nextProps.current_datetime).add(1, 'days') > moment(this.props.data.start_time, "YYYY-MM-DD HH:mm:ss")
        ) {
            state.isVisible = true;
        } else {
            state.isVisible = false;
        }
        this.setState(state);
    }
}

export default Event;