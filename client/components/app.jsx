import React from 'react';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Header text="$ Wicked Sales"/>
    );
  }
}

export default App;
