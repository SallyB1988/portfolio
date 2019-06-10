import React, { Component } from "react";
import { Card, Button, Collapse } from "react-bootstrap";
// import './Games.css';

class GameCard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/hangman.jpg" />
        <Card.Body>
          <Card.Title>Hangman</Card.Title>
          <Collapse in={this.state.open}>
            <Card.Text>
              Describe technologies used here.
            </Card.Text>

          </Collapse>
          <Button variant="primary" onClick={() => this.setState({ open: !open })}>About</Button>
          <Button variant="primary">Play</Button>
        </Card.Body>
      </Card>

    )
  }
}

export default GameCard;