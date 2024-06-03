import ReactDOM from "react-dom";
import React, {useState} from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature) {
  const input = temperature
  if (Number.isNaN(input)) {
    return '';
  }
  const rounded = Math.round(input * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e)=> {
    // Before: this.setState({temperature: e.target.value});
    console.log("HANDLE CHANGE: " + JSON.stringify(this.props))
    this.props.onTemperatureChange(parseFloat(e.target.value));
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {celsius: '1.5'};
  }

  onChangeByFahrenheit = (f)=> {
    this.setState({celsius: toCelsius(f)})
  }

  onChangeByCelsius = (c) => {
    this.setState({celsius: c})
  }

  render() {
    let celsius = this.state.celsius
    return (
      <div>

        <TemperatureInput 
            temperature={tryConvert(celsius)} 
            scale="c" 
            onTemperatureChange={this.onChangeByCelsius}
        />

        <TemperatureInput 
            temperature={tryConvert(toFahrenheit(celsius))} 
            scale="f" 
            onTemperatureChange={this.onChangeByFahrenheit}
        />

        <BoilingVerdict celsius={celsius}/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Calculator/><hr></hr>
  </div>
);