import React from "react";
import ProductInfo from "./product-info";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product_id: this.props.match.params.productId,
      quantity: 1,
      clicked: false,
      show: "item-alert"
    };

    this.setProduct = this.setProduct.bind(this);
    this.addCart = this.addCart.bind(this);
    this.setBorder = this.setBorder.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.state.product_id);
    this.props.fetchCartItems();
  }

  setProduct(e) {
    let product = this.props.product;
 
    let quantity = e.target.value;
    this.setState({
      product_id: product.id,
      quantity
    });
  }

  addCart(e) {
    e.preventDefault();
    
    this.setState({show: "item-alert item-show"});
    setTimeout(() => {
      this.setState({show: "item-alert"});
    }, 900);

    const item = {
      product_id: this.state.product_id,
      quantity: this.state.quantity,
    };

    this.props.createCartItem(item);
  }

  setBorder() {
    this.state.clicked === false ? this.setState({clicked: true}) : this.setState({clicked: false});
  }

  render() {
    let product = this.props.product;
    if (!product) return null;

    let product_img = this.props.product.image_url;

    let border = this.state.clicked ? "showBorder" : "transparent";

    return (
      <div className="main-product container">
          <div className="product-image-col col">
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
                  <p>
                    <b>SPEND $50 FOR FREE SHIPPING</b>
                  </p>
                </div>
                <div className="p-details-3 col col-lg-auto">
                  <form className="product-checkbox">
                    <input type="checkbox" />
                    Yes, I want <b>FREE 2-Day Shipping</b>
                  </form>
                  
                  <div className="item-border">
                    <p id="item-alert" className={this.state.show}>
                      Item added to basket
                    </p>
                  </div>  
                  <div className="quantity-selector">
                    <select onChange={this.setProduct} id="selector">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    <button
                      id="cart-btn"
                      onClick={this.addCart}
                      className="basket-btn"
                    >
                      ADD TO BASKET
                    </button>
                  </div>
                 
                </div>
              </div>
              <div className="product-info container">
                <p className="p-color">
                  COLOR: {product.color[0] === "" ? "N/A" : product.color[0]}
                </p>
                <p>SIZE: {product.size}</p>
                <img
                  id="el"
                  className={ border }
                  onClick={this.setBorder}
                  src={product.image_url[1] ? product.image_url[1] : null}
                />
              </div>
              <ProductInfo product={product} />
              </div>
          </div>
      </div>
    );
  }
}

export default ProductDetail;
