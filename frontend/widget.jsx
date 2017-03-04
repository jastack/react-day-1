import React from 'react';
import ReactDOM from 'react-dom';

import Currencies from './currencies';


class Widget extends React.Component {
  constructor(){
    super();

    this.state = {baseCurrency: "EUR", rates: {}};
    this.fetchRates();
  }

  // componentWillMount() {debugger;}
  // componentDidMount() {debugger;}
  //
  // componentWillUpdate() {debugger;}
  // componentDidUpdate() {debugger;}

  setBaseCurrency(currency){
    this.setState({baseCurrency: currency}, this.fetchRates);
  }

  fetchRates(){
    console.log(this.state.baseCurrency);
    $.ajax({
      method: "GET",
      url: `http://api.fixer.io/latest?base=${this.state.baseCurrency}`
    }).then((response) => this.setState({rates: response.rates}));
  }

  render(){
    console.log('in render');
    const currencies = ["CNY", "GBP", "JPY", "CAD", "EUR", "USD"];
    let currencyDivs = currencies.map((currency, idx) => (
      <li key={`${currency}`+idx}
        onClick={this.setBaseCurrency.bind(this, currency)}>
        {currency}
      </li>
    ));

    return (
      <div>
        <h1>Currency Exchange Rates</h1>
        <h3>Base Currency: {this.state.baseCurrency}</h3>
        <div>
          Get Rates:
        </div>
        <ul>
          {currencyDivs}
        </ul>
        < Currencies rates={this.state.rates}/>
      </div>
    );
  }
}

export default Widget;
