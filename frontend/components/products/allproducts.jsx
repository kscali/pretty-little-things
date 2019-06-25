import React from "react";
import { Link } from "react-router-dom";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="inner-side">
        {this.props.products.map(product => {
          return (
            <li className="item-li" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image_url[1]} />
                <h6>{product.brand_name}</h6>
                <p>{product.name}</p>
                <p>
                  <b>${product.price}</b>
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default AllProducts;
