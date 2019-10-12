import React from "react";
import { Link } from "react-router-dom";
import ProductIndexItem from "../products/product_index_item";

class Lip extends React.Component {
 
  render() {
    return (
      <div className="lips mobile container">
        <div className="lip-container">
          <div className="side-nav">
            <ProductIndexItem />
          </div>
          <ul className="mobile-list">
            {this.props.lips.map((lip, i) => (
              <li className="lips-li" key={i}>
                <Link to={`/products/${lip.id}`}>
                  <img src={lip.image_url[0]} alt={lip.name} />
                  <h6>{lip.brand_name}</h6>
                  <p>{lip.name}</p>
                  <p>
                    <b>${lip.price}</b>
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

export default Lip;
