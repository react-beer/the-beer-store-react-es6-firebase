'use strict';

import React   from 'react';
import autoBind from 'react-autobind';
import { Row } from 'react-bootstrap';
import Product from './Product';

class Products extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this, 'renderBeer');
  }

  renderBeer(key) {
    return (
      <Product
        index={key}
        key={key}
        product={this.props.beers[key]}
        addToCart={this.props.addToCart}
      />
    )
  }

  render() {
    return (
      <main className="products">
        <Row>
          {Object.keys(this.props.beers).map(this.renderBeer)}
        </Row>
      </main>
    );
  }
}

Products.propTypes = {
  beers: React.PropTypes.object.isRequired,
  addToCart: React.PropTypes.func.isRequired
};

export default Products;
