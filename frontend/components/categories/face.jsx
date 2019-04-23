import React from 'react';
import { Link } from 'react-router-dom';

class Face extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchBrands();
  }
  render() {
    if (!this.props.faces) return null;
    return <div className="face container">
      <h4>Face</h4>
      <ul>
        {this.props.faces.map((face, i) => (
          <li className="face-li" key={i}>
            <Link to={`/products/${face.id}`}>
              <img src={face.image_url[0]} alt={face.name} />
              <h6>{face.brand_name}</h6>
              <p>{face.name}</p>
              <p><b>${face.price}</b></p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  }
}

export default Face;