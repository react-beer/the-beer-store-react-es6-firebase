import React from 'react';

class GitHubFork extends React.Component {
  render() {
    return (
      <a href="https://github.com/react-beer">
        <img
          className="fork-ribbon"
          src="build/img/fork-ribbon.png"
          alt="Fork me on GitHub"
        />
      </a>
    );
  }
}

export default GitHubFork;
