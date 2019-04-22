import React from 'react';
import { Route } from 'react-router-dom';
import ProductIndexItem from './product_index_item';
import ProductDetailContainer from './product_detail_container';



class ProductsIndex extends React.Component {
  constructor(props) {
    super(props)
    
   }

  componentDidMount() {
    this.props.fetchProducts(); 
  }

  render () {
    // let style = window.location.href.slice(24);
    let products = this.props.products;
    if (!products) return null; 
    return (
    <section className="products">
      <div className="container">
          <div className="sidenav">
            <ProductIndexItem />
          </div>
          <div className="main">
            <ul className="inner-side">
              {this.props.products.map(product => {
               return ( <li className="item-li" key={product.id}>
                  <img src={product.image_url[0]} />
                  <h6>{product.brand_name}</h6>
                  <p>{product.name}</p>
                 <p><b>${product.price}</b></p>
               </li>
               )
              })}
            </ul>
          </div>
        </div>
       </section>
    )
  }

}

export default ProductsIndex; 


/* { style === "makeup" ? 
              <div><Makeup /></div> : style === "skincare" ? 
              <div><SkinCare /></div> : style === "tools" ?
              <div><Tools /></div> : style === "fragrance" ? 
              <div><Fragrance /></div> : <Bath />
            } */