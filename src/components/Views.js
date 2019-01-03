import React from 'react';
import {Button, Modal} from "react-bootstrap";
import Example from './Example';

class Views extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.state = {
            show: false
        };
    }

    render() {
        return (<Example/>);
        return (
            <div>
                <Button className="menu-item" onClick={this.handleShow}>Views</Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Views</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        SOME TEXT
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    handleClose() {
        let state = this.state;
        state.show = false;
        this.setState(state);
    }

    handleShow() {
        let state = this.state;
        state.show = true;
        this.setState(state);
    }
}

export default Views;