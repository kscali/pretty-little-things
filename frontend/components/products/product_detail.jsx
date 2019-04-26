import React from 'react';
import ProductInfo from './product-info';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      product_id: '',
      quantity: 1
    }

    this.setProduct = this.setProduct.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
    this.props.fetchCartItems();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.productId !== this.props.match.params.productId) {
      this.props.fetchProduct(this.props.match.params.productId);
    }
  }

  setBorder(e) {
    if (e.target.style.border === "3px solid black") {
      e.target.style.border = "3px solid transparent"
    } else {
      e.target.style.border = "3px solid black"
    }
  }

  setProduct() {
    let product = this.props.product;
    let quantity = +document.getElementById("selector").value;
    this.setState({ 
      product_id: product.id,
      quantity })
  }


  addCart(e) {
    this.props.createCartItem(this.state);
  }

  render() {
    debugger;
    let product = this.props.product;
    if (!product) return null; 
  
    let product_img = this.props.product.image_url;
    
    return (
      <div className="main-product container">
        <div className="row">
          <div className="col">
            <img id="image-main" src={product_img[0]} alt="product-img" />
          </div>
          <div className="details-2 col">
            
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="p-details-1 col">
                  <h6>{product.brand_name}</h6>
                  <p>{product.name}</p>
                </div>
                <div className="p-details-2 col">
                   <h6>${product.price}</h6>
                  <p><b>SPEND $50 FOR FREE SHIPPING</b></p>
                </div>
                <div className="p-details-3 col col-lg-auto">
                  <form className="product-checkbox">
                    <input type="checkbox" />Yes, I want <b>FREE 2-Day Shipping</b>
                  </form>
                  <select onChange={this.setProduct} id="selector">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <button onClick={this.addCart} className="basket-btn">ADD TO BASKET</button>
                </div>
              </div>
            <div className="product-info container">
              <p className="p-color">COLOR: {product.color[0] === "" ? "N/A" : product.color[0]}</p>
              <p>SIZE: {product.size}</p>
                <img onClick={this.setBorder} src={product.image_url[2] ? product.image_url[2] : null} />
            </div>
            <div>
              <ProductInfo product={product} />
            </div>
          </div>
          </div>
      </div>
    </div>
    
    )
  }
 
}

export default ProductDetail;