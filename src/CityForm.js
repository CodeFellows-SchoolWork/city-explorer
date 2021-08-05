import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './CityForm.css';
import Weather from './Weather'
import Movies from './Movies'


class CityForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movieDataArr: [],
      weatherDataInfoArr: [],
      renderDisplayedCity: false,
      city: '',
      lat: 0,
      lon: 0,
      renderMap: false,
      displayMap: '',
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

      let imageUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${cityDataInfo.data[0].lat},${cityDataInfo.data[0].lon}&zoom=12`;

      this.setState({
        renderDisplayedCity: true,
        city: cityDataInfo.data[0].display_name,
        lat: cityDataInfo.data[0].lat,
        lon: cityDataInfo.data[0].lon,
        renderMap: true,
        displayMap: imageUrl,
        displayError: false,
      });

    } catch (error) {
      this.setState({
        displayError: true,
        errorMessage: `Error Occurred: ${error.response.status}, ${error.response.data.error}`,
      });
    };
    this.getWeatherData();
  };

  getWeatherData = async () => {
    try {
      let weatherDataInfo = await axios.get(`http://localhost:3001/weather`, {
        params: {
          searchQuery: this.state.city,
          lat: this.state.lat,
          lon: this.state.lon,
        }
      });

      this.setState({
        weatherDataInfoArr: weatherDataInfo.data,
      });

    } catch (error) {
      this.setState({
        displayError: true,
        errorMessage: `Error Occurred: ${error.response.status}, ${error.response.data.error}`,
      });
    };
  };

  getMovieData = async () => {

    try {
      let movieDataInfo = await axios.get(``);

      this.setState({
        movieDataArr: movieDataInfo.data,

      });

    } catch (error) {
      this.setState({
        displayError: true,
        errorMessage: `Error Occurred: ${error.response.status}, ${error.response.data.error}`,
      });
    };
  };



  render() {
    return (

      <>

        <h1>City Explorer</h1>
        <Form onSubmit={this.getLocationInfo}>
          <input onChange={this.handleEvent} />
          <Button type="submit">Explore!</Button>
        </Form>

        {this.state.renderDisplayedCity ? <h4>{this.state.city}, <br /> lat:{this.state.lat}, long: {this.state.lon}</h4> : ''}
        {this.state.renderMap ? <img src={this.state.displayMap} alt="map" /> : ''}

        {this.state.displayError ? <h3>{this.state.errorMessage}</h3> : ''}

        <Weather weatherDataInfoArr={this.state.weatherDataInfoArr} />

        <Movies movieDataArr={this.state.movieDataArr} />
      </>
    );
  };
};

export default CityForm;
