
import React from 'react';
import Header from './Header';
import CityForm from './CityForm';
import Footer from './Footer';
import './App.css';





export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (

      <div>
        
        <Header />

        
        <CityForm />
        

        <Footer />

      </div>

    )
  }
}


