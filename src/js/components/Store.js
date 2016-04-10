import React from 'react';
import autoBind from 'react-autobind';
import { Grid } from 'react-bootstrap';
import Header from './Header';
import Cart from './Cart';
import Products from './Products';
import Footer from './Footer';

// Firebase
import Rebase from 're-base';
const base = Rebase.createClass('https://the-beer-store.firebaseio.com/');

class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: {},
      cart: {}
    };

    autoBind(this, 'addToCart', 'removeFromCart');
  }

  componentWillMount() {
    base.syncState('beers', {
      context: this,
      state: 'beers',
      queries: {
        orderByValue: false
      }
    });

    this.loadBeers();
  }

  componentDidMount() {
    let localStorageData = localStorage.getItem('cart');

    if (localStorageData) {
      this.setState({
        cart: JSON.parse(localStorageData)
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('cart', JSON.stringify(nextState.cart));
  }

  loadBeers() {
    this.setState({
      beers: require('../utils/data-beers')
    });
  }

  addToCart(key, amount) {
    this.state.cart[key] = this.state.cart[key] + amount || amount;
    this.setState({
      cart: this.state.cart
    });
  }

  removeFromCart(key) {
    delete this.state.cart[key];
    this.setState({
      cart: this.state.cart
    });
  }

  render() {
    return (
      <Grid>
        <Header />
        <Cart
          beers={this.state.beers}
          cart={this.state.cart}
          removeFromCart={this.removeFromCart}
        />
        <Products beers={this.state.beers} addToCart={this.addToCart} />
        <Footer />
      </Grid>
    );
  }
}

export default Store;
