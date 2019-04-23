import React from 'react';
import { Link } from 'react-router-dom';

class Hair extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchBrands();
  }
  render() {
    if (!this.props.hair) return null;
    return <div className="hair container">
      <h4>Hair</h4>
      <ul>
        {this.props.hair.map((hair, i) => (
          <li className="hair-li" key={i}>
            <Link to={`/products/${hair.id}`}>
              <img src={hair.image_url[0]} alt={hair.name} />
              <h6>{hair.brand_name}</h6>
              <p>{hair.name}</p>
              <p><b>${hair.price}</b></p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  }
}

export default Hair;