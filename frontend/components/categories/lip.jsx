import React from 'react';
import { Link } from 'react-router-dom';

class Lip extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchBrands();
  }
  render() {
    return <div className="lips container">
      <h4>Lips</h4>
      <ul>
        {this.props.lips.map((lip, i) => (
          <li className="lips-li" key={i}>
            <Link to={`/products/${lip.id}`}>
              <img src={lip.image_url[0]} alt={lip.name} />
              <h6>{lip.brand_name}</h6>
              <p>{lip.name}</p>
              <p><b>${lip.price}</b></p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  }
}

export default Lip;