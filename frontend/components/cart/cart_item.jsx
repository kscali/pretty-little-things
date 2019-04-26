import React from 'react';

class CartItem extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     product_id: "",
     quantity: 0
   }

 
 }

 componentDidMount() {
   this.props.props.fetchProducts();
   this.props.props.fetchCartItems();
 }

 removeProduct() {

 }

 render() {

  return (
    <div className="items-list">
      <ul>
        {this.props.props.cartItems.map((item, i) => {
          let product = this.props.props.products[item.product_id - 1];
          return (
            <li key={i}>
              <div className={`div-li div-${i}`}>
                <img src={product.image_url[0]} alt="makeup" />
                <div className="">
                  <h6>{product.brand_name}</h6>
                  <p>{product.name}</p>
                  <p>{product.size}</p>
                  <p>COLOR: {product.color[0]}</p>
                </div>
                <div>
                  <select onChange={this.removeProduct} id="selector">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <button>Remove</button>
                <h6>${product.price}</h6>
              </div>
            </li>
          )
        }) }
      </ul>
    </div>
  )
  
 }
}

export default CartItem;