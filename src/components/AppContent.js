import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductList from "./ProductsList";
import CartList from "./CartList";
import Profile from "./Profile";

function Routes({ route, products, cartItems, addCartItem, deleteCartItem }) {
  switch (route) {
    case "Cart":
      return (
        <CartList
          cartItems={cartItems}
          products={products}
          deleteCartItem={deleteCartItem}
        />
      );
    case "Profile":
      return <Profile />;
    default:
      return (
        <ProductList
          products={products}
          cartItems={cartItems}
          addCartItem={addCartItem}
        />
      );
  }
}

export default class AppContent extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Routes {...this.props} />
          </Col>
        </Row>
      </Container>
    );
  }
}
