import React from "react";
import { Link } from "react-router-dom";
import ProductIndexItem from "./../products/product_index_item";

class Eye extends React.Component {
  
  render() {
    if (!this.props.eyes) return null;
    
    return (
      <div className="eyes mobile container">
        <div className="eye-container">
          <div className="sidenav">
            <ProductIndexItem />
          </div>
          <ul className="mobile-list">
            { this.props.eyes.map((eye, i) => (
                <li className="eyes-li" key={i}>
                  <Link to={`/products/${eye.id}`}>
                    <img src={eye.image_url[0]} alt={eye.name} />
                    <h6>{eye.brand_name}</h6>
                    <p>{eye.name}</p>
                    <p>
                      <b>${eye.price}</b>
                    </p>
                  </Link>
                </li>
              )) 
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Eye;
