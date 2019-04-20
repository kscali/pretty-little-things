import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="container">
        <img className="home-ad" src="https://www.sephora.com/contentimages/homepage/041619/Homepage/DesktopMweb/2019-04-16-hp-slide-just-arrived-cyoa-us-d-slice.jpg" alt="shopping" />
      </div>
      <div className="sec-section container">
        <h2>Just Arrived</h2>
      </div>
      <div className="container">
        <div className="slider">
          <div>
            <Link to="/products/8">
              <img src="https://www.sephora.com/productimages/sku/s2188258-main-grid.jpg" />
              <h6>BEAUTYBLENDER</h6>
              <p className="dot">the original</p>
            </Link>
          </div>
          <div>
            <img src="https://www.sephora.com/productimages/sku/s2182111-main-grid.jpg" />
            <h6>ANASTASIA</h6>
            <p>DIPBROW gel</p>
          </div>
          <div>
            <img src="https://www.sephora.com/productimages/sku/s2206100-main-grid.jpg" />
            <h6>FENTY BEAUTY</h6>
            <p>Body Lava</p>
          </div>
          <div>
            <img src="https://www.sephora.com/productimages/sku/s2181006-main-grid.jpg" />
            <h6>TATCHA</h6>
            <p>Dewy Skin Cream</p>
          </div>
          <div>
            <img src="https://www.sephora.com/productimages/sku/s2211167-main-grid.jpg" />
            <h6>FRESH</h6>
            <p>Sleeping Mask</p>
          </div>
          <div>
            <img src="https://www.sephora.com/productimages/sku/s2210482-main-grid.jpg" />
            <h6>LANEIGE</h6>
            <p>Lip Glowy Balm</p>
          </div>
        </div>
      </div>
      <div className="container">

      </div>
      <div className="container">

      </div>
    </div>



  )
}

export default Home; 