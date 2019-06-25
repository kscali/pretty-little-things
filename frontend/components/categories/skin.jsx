import React from "react";
import { Link } from "react-router-dom";
import ProductIndexItem from "../products/product_index_item";

class Skin extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchBrands();
  }
  render() {
    if (!this.props.skin) return null;
    return (
      <div className="skin container">
        <div className="skin-container">
          <div className="side-nav">
            <ProductIndexItem />
          </div>
          <ul>
            {this.props.skin.map((skin, i) => (
              <li className="skin-li" key={i}>
                <Link to={`/products/${skin.id}`}>
                  <img src={skin.image_url[1]} alt={skin.name} />
                  <h6>{skin.brand_name}</h6>
                  <p>{skin.name}</p>
                  <p>
                    <b>${skin.price}</b>
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

export default Skin;
