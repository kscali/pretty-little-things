import React from 'react';

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

    let product = this.props.product;
  
    if (!product) return null; 
    let product_img = this.props.product.image_url;
    
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={product_img[0]} alt="product-img" />
          </div>
          <div className="col">
            
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col col-lg-2">
                  1 of 3
                </div>
                <div className="col-md-auto">
                   Variable width content
                </div>
                <div className="col col-lg-2">
                    3 of 3
                </div>
              </div>
            <div classNameName="container">
              makeup samples 
            </div>
            <div>
              information tab 
            </div>
          </div>
          </div>
      </div>
    </div>
    
    )
  }
 
}

export default ProductDetail;