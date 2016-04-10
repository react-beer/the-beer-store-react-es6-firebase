import React from 'react';
import autoBind from 'react-autobind';
import {
  Row,
  Col,
  Modal,
  Button,
  Glyphicon
} from 'react-bootstrap';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalCart: false
    };

    autoBind(this, 'showModalCart', 'hideModalCart', 'renderCartItem');
  }

  showModalCart() {
    this.setState({
      modalCart: true
    });
  }

  hideModalCart() {
    this.setState({
      modalCart: false
    });
  }

  renderCartItem(key) {
    let product = this.props.beers[key];
    let count = this.props.cart[key];

    return (
      <Row className="item-cart" key={key}>
        <Col xs={9} sm={9} md={6}>
          <h5 className="title">{product.name}</h5>
          <div className="amount-price">{count}x $ {product.price}</div>
        </Col>
        <Col xs={3} sm={3} md={6}>
          <Button
            bsStyle="danger"
            className="pull-right"
            onClick={this.props.removeFromCart.bind(null, key)}
          >
            <Glyphicon glyph="remove" aria-hidden="true" />
          </Button>
        </Col>
      </Row>
    );
  }

  renderModalCart() {
    let cartIds = Object.keys(this.props.cart);
    let total = cartIds.reduce((prevTotal, key) => {
      let product = this.props.beers[key];
      let count = this.props.cart[key];
      let isAvailable = product && product.status === 'available';

      if (product && isAvailable) {
        return prevTotal + (count * parseFloat(product.price) || 0);
      }

      return prevTotal;
    }, 0);

    return (
      <Modal
        {...this.props}
        show={this.state.modalCart}
        onHide={this.hideModalCart}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">
            <Glyphicon glyph="shopping-cart" aria-hidden="true" /> Details Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartIds.map(this.renderCartItem)}
        </Modal.Body>
        <Modal.Footer>
          <h4 className="total">Total: $ {total.toFixed(2)}</h4>
        </Modal.Footer>
      </Modal>
    );
  }

  render() {
    let items = Object.keys(this.props.cart);

    return (
      <div>
        {this.renderModalCart()}
        <nav className="nav-cart">
          <Row>
            <Col md={12}>
              <div className="pull-right">
                <Button
                  bsStyle="success"
                  onClick={this.showModalCart}
                >
                  <Glyphicon
                    glyph="shopping-cart"
                    aria-hidden="true"
                  /> Show Cart ({items.length})
                </Button>
              </div>
            </Col>
          </Row>
        </nav>
      </div>
    );
  }
}

Cart.propTypes = {
  beers: React.PropTypes.object.isRequired,
  cart: React.PropTypes.object.isRequired,
  removeFromCart: React.PropTypes.func.isRequired
};

export default Cart;
