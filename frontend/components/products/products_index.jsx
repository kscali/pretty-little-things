import React from 'react';
import { Route } from 'react-router-dom';
import ProductIndexItem from './product_index_item';
import ProductDetailContainer from './product_detail_container';

class ProductsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
   }

  componentDidMount() {
    this.props.fetchProducts(); 
  }

  render () {
    let style = window.location.href.slice(24);
    return (
      <section className="products">
      <div className="container">
          <div className="sidenav">
            <ProductIndexItem />
          </div>
          <div className="main">
            <div className="inner-side"></div>
            {/* { style === "makeup" ? 
              <div><Makeup /></div> : style === "skincare" ? 
              <div><SkinCare /></div> : style === "tools" ?
              <div><Tools /></div> : style === "fragrance" ? 
              <div><Fragrance /></div> : <Bath />
            } */}
          </div>
        </div>
       </section>
    )
  }

}

export default ProductsIndex; 