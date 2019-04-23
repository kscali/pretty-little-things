import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homepage">
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
            <Link to="/products/9">
              <img src="https://www.sephora.com/productimages/sku/s2182111-main-grid.jpg" />
              <h6>ANASTASIA</h6>
              <p className="gel">DIPBROW gel</p>
           </Link>
          </div>
          <div>
            <Link to="/products/10">
              <img src="https://www.sephora.com/productimages/sku/s2206100-main-grid.jpg" />
              <h6>FENTY BEAUTY</h6>
              <p className="gel">Body Lava</p>
            </Link>
          </div>
          <div>
            <Link to="/products/11">
              <img src="https://www.sephora.com/productimages/sku/s2181006-main-grid.jpg" />
              <h6>TATCHA</h6>
              <p className="gel">Dewy Skin Cream</p>
            </Link>
          </div>
          <div>
              <Link to="/products/12">
              <img src="https://www.sephora.com/productimages/sku/s2211167-main-grid.jpg" />
              <h6>FRESH</h6>
              <p className="gel">Sleeping Mask</p>
            </Link>
          </div>
          <div>
            <Link to="/products/13">
              <img src="https://www.sephora.com/productimages/sku/s1162650-main-grid.jpg" />
              <h6>Dior</h6>
              <p className="gel">Dior Lip Glow</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="ad-images">
          <a href="https://www.sephora.com/happening/services/OLR-CD__makeup_deluxe_prom?icid2=has_perks_prombeauty_banner_image_desktop" >
            <img src="https://www.sephora.com/contentimages/hashub-discover/2019-04-01-pill-happening-sephora-us-ca-d-slice.jpg" alt="ad" />
          </a>
         </div>
      </div>
     
     
      <div className="third-section container">
        <h2>Recommended For You</h2>
      </div>
      <div className="container">
        <div id="third" className=" slider">
          <div>
            <Link to="/products/1">
              <img src="https://www.sephora.com/productimages/sku/s1901008-main-grid.jpg" />
              <h6>Tarte</h6>
              <p className="dot">12-hr clay blush</p>
            </Link>
          </div>
          <div>
            <Link to="/products/9">
              <img src="https://www.sephora.com/productimages/sku/s2182111-main-grid.jpg" />
              <h6>ANASTASIA</h6>
              <p className="gel">DIPBROW gel</p>
            </Link>
          </div>
          <div>
            <Link to="/products/6">
              <img src="https://www.sephora.com/productimages/sku/s1233147-main-grid.jpg" />
              <h6>Viktor&Rolfe</h6>
              <p className="gel">Flowerbomb</p>
            </Link>
          </div>
          <div>
            <Link to="/products/11">
              <img src="https://www.sephora.com/productimages/sku/s2181006-main-grid.jpg" />
              <h6>TATCHA</h6>
              <p className="gel">Dewy Skin Cream</p>
            </Link>
          </div>
          <div>
            <Link to="/products/12">
              <img src="https://www.sephora.com/productimages/sku/s2211167-main-grid.jpg" />
              <h6>FRESH</h6>
              <p className="gel">Sleeping Mask</p>
            </Link>
          </div>
          <div>
            <Link to="/products/13">
              <img src="https://www.sephora.com/productimages/sku/s1162650-main-grid.jpg" />
              <h6>Dior</h6>
              <p className="gel">Dior Lip Glow</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="fourth-sec">
        <h2>Spot it. Shop it.</h2>
      </div>
      <div className="container">
        <div className="last-sec">
          <a href="https://www.sephora.com/happening/services/OLR-CD__makeup_deluxe_prom?icid2=homepage_botnav1_color_program_has360_prom_sephora_us_desktop_image_041619" >
            <img src="https://www.sephora.com/contentimages/homepage/041619/Homepage/DesktopMweb/2019-04-16-hp-botnav-happening-at-sephora-prom-us-d-slice.jpg" alt="ad" />
          </a>
          <a href="https://www.sephora.com/shop/face-makeup?icid2=homepage_botnav2_color_program_foundationao360_luxe_us_desktop_image_041619">
            <img src="https://www.sephora.com/contentimages/homepage/041619/Homepage/DesktopMweb/2019-04-22-hp-botnav-fao-luxe-us-d-slice.jpg" alt="ad" />
          </a>
          <a href="https://www.sephora.com/product/precisely-my-brow-pencil-P408219?icid2=homepage_botnav3_color_brand-sku-launch_benefitbrow360_benefit_us_desktop_image_042219">
            <img src="https://www.sephora.com/contentimages/homepage/041619/Homepage/DesktopMweb/2019-04-22-hp-botnav-benefit-brow-us-ca-d-slice.jpg" alt="ad" />
          </a>
          <a href="https://www.sephora.com/rewards?icid2=homepage_botnav4_reward_bazaar_d_us_040219_image">
            <img src="https://www.sephora.com/contentimages/homepage/MeganavRedesign/2018-03-20-hp-meganav-bi-us-ca-d-slice.jpg" alt="ad" />
          </a>
        </div>
      </div>
    </div>

  )
}

export default Home; 