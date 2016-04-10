import React from 'react';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import {
  Row,
  Col,
  Input,
  Button,
  Image
} from 'react-bootstrap';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };

    autoBind(this, 'onClickAddToCart');
  }

  onClickAddToCart() {
    let key = this.props.index;
    let amount = parseInt(this.refs.amount.getValue());

    this.setState({ isLoading: true });
    this.props.addToCart(key, amount);
    this.refs.amount.refs.input.value = 1;

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  renderButton(isAvailable) {
    let isLoading = this.state.isLoading;
    let buttonTextLoading = (isLoading ? 'Adding...' : 'Add to Cart');
    let buttonText = (isAvailable ? buttonTextLoading : 'SOLD OUT!');

    if (isAvailable) {
      return (
        <Button
          bsStyle="primary"
          bsSize="large"
          className="btn-add-cart"
          disabled={isLoading}
          block
          onClick={this.onClickAddToCart}
        >
          {buttonText}
        </Button>
      );
    }
    else {
      return (
        <Button
          className="sold-out"
          disabled
        >
          {buttonText}
        </Button>
      );
    }
  }

  render() {
    let product = this.props.product;
    let isAvailable = (product.status === 'available' ? true : false);
    let hideBox = (!isAvailable ? 'hidden' : '');

    return (
      <Col md={3} className="product">
        <h4 className="title text-center">{product.name}</h4>
        <Image
          src={product.image}
          className="center-block"
          responsive
          thumbnail
          alt={product.name}
        />
        <Row className={classNames('box', hideBox)}>
          <Col xs={9} sm={9} md={6}>
            <span className="price">
              <b>Price:</b> $ {product.price}
            </span>
          </Col>
          <Col xs={3} sm={3} md={6}>
            <Input
              type="text"
              className="amount"
              ref="amount"
              defaultValue="1"
              standalone
            />
          </Col>
        </Row>
        {this.renderButton(isAvailable)}
      </Col>
    );
  }
}

Product.propTypes = {
  index: React.PropTypes.string.isRequired,
  product: React.PropTypes.object.isRequired,
  addToCart: React.PropTypes.func.isRequired
};

export default Product;
