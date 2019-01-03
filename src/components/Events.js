import React from 'react';
import Event from './Event';

const API = 'http://calendarium/api/login';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            raw_data : []
        };
    }

    render() {
        const {isLoading} = this.state;
        if (isLoading) {
            return <p>Loading ... </p>
        }
        return (
            <div>
                {this.state.raw_data.events.map((e, i) => {
                    return <Event data={e} current_datetime={this.props.current_datetime} key={i} />
                })}
            </div>
        );
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                this.setState({raw_data: data, isLoading: false});
                this.props.handler();
            })
        //
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // console.log(nextProps, nextContext);
    }
}

export default Events;