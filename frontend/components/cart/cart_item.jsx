import React from 'react';

class CartItem extends React.Component {
 constructor(props) {
   super(props);

   this.removeProduct = this.removeProduct.bind(this);
 }

 componentDidMount() {
   this.props.props.fetchProducts();
   this.props.props.fetchCartItems();
  }

  // This is getting passed into onClick handler Remove button
 removeProduct(item) {
   return () => {
    //  let amount = +document.getElementById("selector-2").value;
     this.props.props.deleteCartItem(item.id);
   }
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
                <div className="li-div">
                  <h6>{product.brand_name}</h6>
                  <p>{product.name}</p>
                  <p>{product.size}</p>
                  <p>COLOR: {product.color[0]}</p>
                </div>
                <div className="con-1 container">
                  <select id="selector-2">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
               
                <button onClick={this.removeProduct(item)} className="con-2 remove-btn">Remove</button>
                  <p className="quantity">quantity: {item.quantity} </p>
                  <h6 className="price-li">${product.price}</h6>
                
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