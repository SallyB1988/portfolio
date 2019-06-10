import React, { Component } from 'react';
import { Image, Container } from 'react-bootstrap';
import Games from "./components/Projects";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add(faChevronUp, faChevronDown);

class App extends Component {
  render() {
    return (
      <Container fluid >
        <Image src="/images/mainImage.jpg" className="d-block mx-auto my-0" style={{width: "80%"}} />
        <Games />
        {/* <Other /> */}
        {/* <MainDisplayRegion /> */}
      </Container>
    );
  }
}

export default App;
