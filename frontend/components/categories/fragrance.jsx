import React from 'react';
import { Link } from 'react-router-dom';

class Fragrance extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchBrands(); 
  }
  render() {
    if (!this.props.fragrances) return null; 
    
    return <div className="fragrances container">
    <h4>Fragrances</h4>
      <ul>
    {this.props.fragrances.map((fragrance, i) => (
      <li className="fragrance-li" key={i}>
        <Link to={`/products/${fragrance.id}`}>
          <img src={fragrance.image_url[0]} alt={fragrance.name} />
          <h6>{fragrance.brand_name}</h6>
          <p>{fragrance.name}</p>
          <p><b>${fragrance.price}</b></p>
        </Link>
      </li>
    ))}
      </ul>
    </div>
  }
}

export default Fragrance;