import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return (

      <>
      <Header />

      <Main />

      <Footer />

      </>

    )
  }
}

export default App;
