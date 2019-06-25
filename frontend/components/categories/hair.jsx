import React from "react";
import { Link } from "react-router-dom";
import ProductIndexItem from "../products/product_index_item";

class Hair extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchBrands();
  }
  render() {
    if (!this.props.hair) return null;
    return (
      <div className="hair container">
        <div className="hair-container">
          <div className="side-nav">
            <ProductIndexItem />
          </div>
          <ul>
            {this.props.hair.map((hair, i) => (
              <li className="hair-li" key={i}>
                <Link to={`/products/${hair.id}`}>
                  <img src={hair.image_url[1]} alt={hair.name} />
                  <h6>{hair.brand_name}</h6>
                  <p>{hair.name}</p>
                  <p>
                    <b>${hair.price}</b>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Hair;
