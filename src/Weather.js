import React from 'react';


class Weather extends React.Component {

  render() {
    console.log(this.props.weatherDataInfoArr);
    return (
      <>
        {this.props.weatherDataInfoArr.length > 0 ? this.props.weatherDataInfoArr.map((value, idx) => (
          <div key={idx}>
            <h2>{value.date}</h2>
            <p>{value.description}</p>
          </div>
        ))
          : ''}
      </>
    )
  }
};
export default Weather;
