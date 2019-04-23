import React from 'react';
import { Link } from 'react-router-dom';

class Brands extends React.Component {
  componentDidMount() {
    this.props.fetchBrands(); 
  }

  render() {
    let brands = this.props.brands; 
    if (!brands) return null; 
    return ( <div className="brands-div container">
      <h4>All Brands</h4>
      <ul className="grid-container">
        {this.props.brands.map((brand, i) => (
           <li className="grid-item brands-list" key={i}>
             <Link to={`/brands/${brand.id}`}>{brand.name}</Link>
           </li>
        ))}
      </ul>
    </div>
    )
  }
}

export default Brands;