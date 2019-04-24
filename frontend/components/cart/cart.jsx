import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor(props){
  super(props);

  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCartItems();
  }

  render() {
    return <div>Hello</div>
  }
}

export default Cart; 