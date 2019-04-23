import React from 'react';
import { Link } from 'react-router-dom';

class Skin extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchBrands();
  }
  render() {
    if (!this.props.skin) return null;
    return <div className="skin container">
      <h4>Skin</h4>
      <ul>
        {this.props.skin.map((skin, i) => (
          <li className="skin-li" key={i}>
            <Link to={`/products/${skin.id}`}>
              <img src={skin.image_url[0]} alt={skin.name} />
              <h6>{skin.brand_name}</h6>
              <p>{skin.name}</p>
              <p><b>${skin.price}</b></p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  }
}

export default Skin;