import React from 'react';

class Brands extends React.Component {
  componentDidMount() {
    this.props.fetchBrands(); 
  }

  render() {
    <div>
      <h5>All Brands</h5>
      <ul>
        {this.props.brands.map(brand => (
          <li key={brand.id}>brand.name</li>
        ))}
      </ul>
    </div>
  }
}

export default Brands;