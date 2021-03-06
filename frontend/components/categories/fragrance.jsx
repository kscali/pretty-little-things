import React from "react";
import { Link } from "react-router-dom";
import ProductIndexItem from "../products/product_index_item";

class Fragrance extends React.Component {
  
  render() {
    if (!this.props.fragrances) return null;

    return (
      <div className="fragrances mobile container">
        <div className="fragrance-container">
          <div className="sidenav">
            <ProductIndexItem />
          </div>
          <ul className="mobile-list">
            {this.props.fragrances.map((fragrance, i) => (
              <li className="fragrance-li" key={i}>
                <Link to={`/products/${fragrance.id}`}>
                  <img src={fragrance.image_url[0]} alt={fragrance.name} />
                  <h6>{fragrance.brand_name}</h6>
                  <p>{fragrance.name}</p>
                  <p>
                    <b>${fragrance.price}</b>
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

export default Fragrance;
