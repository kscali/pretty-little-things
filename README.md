# PRETTY LITTLE THINGS

Pretty Little Things is a retail clone inspired by Sephora.

Please visit the live site [here](https://pretty-little-things.herokuapp.com)

![alt text](https://ks-plt.s3-us-west-1.amazonaws.com/plt.png "Pretty Little Things")

## Technologies:

- Ruby on Rails
- JavaScript
- React
- Redux
- PostgreSQL

## Functionality

### Sign In/ Sign Up / Demo User

Users are able to sign in, sign up, or use the demo user account to browse the site.

![alt text](https://ks-plt.s3-us-west-1.amazonaws.com/Screen+Shot+2019-06-12+at+11.36.39+AM.png "Pretty Little Things")
![alt text](https://ks-plt.s3-us-west-1.amazonaws.com/Screen+Shot+2019-06-12+at+11.37.15+AM.png "Pretty Little Things")

## Products Listing

![alt text](https://ks-plt.s3-us-west-1.amazonaws.com/Screen+Shot+2019-06-12+at+11.40.09+AM.png "Pretty Little Things")

## Shopping Basket

User can add/remove product to(from) the basket.
![alt text](https://ks-plt.s3-us-west-1.amazonaws.com/Screen+Shot+2019-06-12+at+11.44.54+AM.png "Pretty Little Things")

## Code Snippet

#### face.jsx

```
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
```

### Bonus

- Filter by Categories
- Search bar
- Free Shipping for orders \$50 or more

## Future Todos

- Add reviews and product ratings
- Filter by brand
