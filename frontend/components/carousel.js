import React from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../actions/product_actions";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    let products = this.props.products.map((product, i) => {
      return (
        <div className="products-div" key={i}>
          <Link to={`/products/${product.id}`}>
            <img className="carousel-img" src={product.image_url[0]} />
            <h6>{product.brand_name}</h6>
            <p className="gel">{product.name}</p>
          </Link>
        </div>
      );
    });

    let random = Math.random() * this.props.products.length;
    let randomBegin = Math.random() * 8;
    if (random > 15) {
      return products.slice(randomBegin, random);
    } else {
      return products.slice(randomBegin, random);
    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    let products = this.getProducts();

    if (products.length === 0) return null;

    return (
      <>
        <Slider {...settings}>{products}</Slider>
      </>
    );
  }
}

const mstp = state => ({
  products: Object.values(state.entities.products)
});

const mdtp = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(
  mstp,
  mdtp
)(Carousel);
