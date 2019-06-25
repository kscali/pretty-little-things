import { Link } from "react-router-dom";
import React from "react";

class ProductIndexItem extends React.Component {
  render() {
    return (
      <div className="side-nav-menu">
        <ul>
          <li>
            <Link to="/face">Face</Link>
          </li>
          <li>
            <Link to="/eye">Eye</Link>
          </li>
          <li>
            <Link to="/lip">Lip</Link>
          </li>
          <li>
            <Link to="/skin">Skin</Link>
          </li>
          <li>
            <Link to="/fragrance">Fragrance</Link>
          </li>
          <li>
            <Link to="/hair">Hair</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductIndexItem;
