import React from "react";
import { Link } from "react-router-dom";
import ProductIndexItem from "../products/product_index_item";

class Face extends React.Component {
  
  render() {
    if (!this.props.faces) return null;
    return (
      <div className="face mobile container">
        <div className="face-container">
          <div className="side-nav">
            <ProductIndexItem />
          </div>
          <ul className="mobile-list">
            {this.props.faces.map((face, i) => (
              <li className="face-li" key={i}>
                <Link to={`/products/${face.id}`}>
                  <img src={face.image_url[0]} alt={face.name} />
                  <h6>{face.brand_name}</h6>
                  <p>{face.name}</p>
                  <p>
                    <b>${face.price}</b>
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

export default Face;
