import React from 'react';
import GitHubFork from './GitHubFork';
import {
  Row,
  Col
} from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <div>
        <GitHubFork />
        <header className="header">
          <Row>
            <Col md={3} />
            <Col md={6}>
              <h1 className="neon">The <div className="blink">Beer</div> Store</h1>
            </Col>
            <Col md={3} />
          </Row>
        </header>
      </div>
    );
  }
}

export default Header;
