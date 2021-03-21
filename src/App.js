import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  state = {
    secondsDecimal: 0,
    minutesDecimal: 0,
    hourDecimal: 0,
  };

  componentDidMount() {
    this.clockInterval = setInterval(() => this.setClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  setClock = () => {
    const currentDate = new Date();

    // These are multiplied by 360 in Clock component to get degrees for CSS rotate(#deg)
    let secondsDecimal = currentDate.getSeconds() / 60;
    let minutesDecimal = (secondsDecimal + currentDate.getMinutes()) / 60;
    let hourDecimal = (minutesDecimal + currentDate.getHours()) / 12;

    this.setState({ secondsDecimal: secondsDecimal });
    this.setState({ minutesDecimal });
    this.setState({ hourDecimal });
  };

  render() {
    const { secondsDecimal, minutesDecimal, hourDecimal } = this.state;

    return (
      <Clock
        secondsDecimal={secondsDecimal}
        minutesDecimal={minutesDecimal}
        hourDecimal={hourDecimal}
      />
    );
  }
}

export default App;
