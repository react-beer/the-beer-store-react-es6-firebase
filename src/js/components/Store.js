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
    base.syncState('cart', {
      context: this,
      state: 'cart'
    });

    this.loadBeers();
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
    this.state.cart[key] = null;
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
