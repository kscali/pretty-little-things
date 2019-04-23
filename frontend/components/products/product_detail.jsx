import React from 'react';
import ProductInfo from './product-info';
// import Details from './details';
// import Ingredients from './ingredients';
// import HowToUse from './how_to_use';

class ProductDetail extends React.Component {

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.productId !== this.props.match.params.productId) {
      this.props.fetchProduct(this.props.match.params.productId);
    }
  }

  render() {
    // debugger;

    let product = this.props.product;
    if (!product) return null; 

    const panes = [
      {title: "Details"},
      {title: "How To Use"} ,
      {title: "Ingredients"}
    ]
  
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
                  <select>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                  </select>
                  <button className="basket-btn">ADD TO BASKET</button>
                </div>
              </div>
            <div className="product-info container">
              <p className="p-color">COLOR: {product.color[0] === "" ? "N/A" : product.color[0]}</p>
              <p>SIZE: {product.size}</p>
              <img src={product.image_url[2] ? product.image_url[2] : null} />
            </div>
            <div>
              <ProductInfo product={product} panes={panes} />
            </div>
          </div>
          </div>
      </div>
    </div>
    
    )
  }
 
}

export default ProductDetail;