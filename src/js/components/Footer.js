import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p>
          Made with <span className="love">♥</span>
          <span> by </span>
          <a href="https://github.com/brenopolanski">Breno Polanski</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
