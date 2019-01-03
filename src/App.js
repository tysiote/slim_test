import React, { Component } from 'react';
import './App.css';
// import './Burger.css';
// import './Datetime.css';
// import Events from './components/Events';
import { Container} from "react-bootstrap";
// import { slide as Menu} from 'react-burger-menu';
// import DateTime from 'react-datetime';
import moment from "moment";
import Views from "./components/Views";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_datetime: null
        };
        this.handler = this.handler.bind(this);
    }

    handler() {
        let state = this.state;
        console.log("HANDLING");
        state.current_datetime = moment(moment.now());
        this.setState(state);
    }

  showSettings(event) {
      event.preventDefault();
  }

  handleDate(e) {
      this.setState({e});
      console.log(e);
      let state = this.state;
      state.current_datetime = e;
      this.setState(state);
  }

  render() {
    return (
        <div>
            <Views />
            {/*<Menu>*/}

                {/*/!*<a id="home" className="menu-item" href="/">Home</a>*!/*/}
                {/*/!*<a id="about" className="menu-item" href="/">About</a>*!/*/}
                {/*/!*<a id="contact" className="menu-item" href="/">Contact</a>*!/*/}
                {/*/!*<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>*!/*/}
            {/*</Menu>*/}
            {/*<DateTime input={false} locale="sk-SK" dateFormat="YYYY-MM-DD" timeFormat={false} onChange={data => this.handleDate(data)}/>*/}
            {/*<MainDateTime picker={null}/>*/}
            <Container>
                {/*<Events current_datetime={this.state.current_datetime} handler={this.handler}/>*/}
            </Container>
        </div>
    );
  }
}

export default App;
