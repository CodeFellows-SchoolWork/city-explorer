import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class CityForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      renderDisplayedCity: false,
      lat: 0,
      lon: 0,
      displayError: false,
      errorMessage: '',
    }
  }

  handleEvent = (e) => {
    this.setState({
      city: e.target.value,
      renderDisplayedCity: false,
    })
  };


  getLocationInfo = async (e) => {
    e.preventDefault();


    try {
      let cityDataInfo = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`);


      this.setState({
        renderDisplayedCity: true,
        city: cityDataInfo.data[0].display_name,
        lat: cityDataInfo.data[0].lat,
        lon: cityDataInfo.data[0].lon,
        displayError: false,

      });
    } catch (error) {

      this.setState({
        displayError: true,
        errorMessage: `Error Occured: ${error.response.status}, ${error.response.data.error}`,

      })
    }
  }


  render() {
    return (

      <>

        <h1>City Explorer</h1>
        <Form onSubmit={this.getLocationInfo}>
          <input onChange={this.handleEvent} />
          <Button>Explore!</Button>
        </Form>

        {this.state.renderDisplayedCity ? <h4> city: {this.state.city}, lat:{this.state.lat}, long: {this.state.lon}</h4> : ''}
        {this.state.renderError ? <h3>{this.state.errorMessage}</h3> : ''}

      </>
    )
  }
}

export default CityForm;
