import React from 'react';
import ReactDOM from 'react-dom';


class Currencies extends React.Component {
  constructor(props){
    super(props);

    //this constructor is only run once -- at the
    // creation of the component.

    // this.rates = this.props.rates;
      // this.rates = {}; for the life of this component! :(
      // because it stays the value of this.props.rates at
      // the component's creation

    // only bind functions here
    //also ok are variables you don't want to be updated when the props update
  }

  // componentWillReceiveProps() {debugger;}



  render(){
    this.rates = this.props.rates;
    //here, this.rates is updated when the props update


    let responseRates = Object.keys(this.rates).map((currency) => (
      <li key={currency}
        className={this.rates[currency] > 1 ? "green" : "red"}>
        {currency} {this.rates[currency]}
      </li>
    ));

    return (
      <ul>
        {responseRates}
      </ul>
    );
  }
}


export default Currencies;
