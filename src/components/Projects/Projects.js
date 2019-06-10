import React, { Component } from "react";
import { Row, Col, Container, Collapse, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GameCard from "../GameCard";
import "./Projects.css";

class Games extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      openGames: false,
      openFS: false
    };
  }

  render() {
    const { openGames, openFS } = this.state;
    return (
      <>
        <Row className="project-title-bar">
          <Col md={6}>
            <h3>Front End Projects</h3>
          </Col>
          <Col md={{ span: 1, offset: 5 }}>
              <FontAwesomeIcon 
                icon={ openGames ? "chevron-up" : "chevron-down" }
                onClick={() => this.setState({ openGames: !openGames })}
              />
          </Col>
        </Row>
        <Row>
          <Collapse in={this.state.openGames}>
            <Row className="mx-5 px-5">
              <GameCard />
            </Row>
          </Collapse>
        </Row>

        <Row className="project-title-bar">
          <Col md="6">
            <h3>Full Stack Projects using MERN stack</h3>
          </Col>
          <Col md={{ span: 1, offset: 5 }}>
          <FontAwesomeIcon 
                icon={ openFS ? "chevron-up" : "chevron-down" }
                onClick={() => this.setState({ openFS: !openFS })}
              />
          </Col>
        </Row>
        <Row>
          <Collapse in={this.state.openFS}>
            <Row className="mx-5 px-5">
              <GameCard />
            </Row>
          </Collapse>
        </Row>
      </>
    );
  }
}

export default Games;
