import React from "react";
import Carousel from "./carousel";

const Home = () => {
  return (
    <div className="homepage">
      <div className="container">
        <img
          className="home-ad"
          src="https://www.sephora.com/contentimages/homepage/041619/Homepage/DesktopMweb/2019-04-16-hp-slide-just-arrived-cyoa-us-d-slice.jpg"
          alt="shopping"
        />
      </div>
      <div className="sec-section container">
        <h2>Just Arrived</h2>
      </div>
      <div className="container">
        <Carousel />
      </div>
      <div className="container">
        <div className="ad-images">
          <a href="https://www.sephora.com/happening/services/OLR-CD__makeup_deluxe_prom?icid2=has_perks_prombeauty_banner_image_desktop">
            <img
              src="https://www.sephora.com/contentimages/hashub-discover/2019-04-01-pill-happening-sephora-us-ca-d-slice.jpg"
              alt="ad"
            />
          </a>
        </div>
      </div>

      <div className="third-section container">
        <h2>Recommended For You</h2>
      </div>
      <div className="container carousel-container">
        <Carousel />
      </div>

      <div className="last-section">
        <div className="fourth-sec container">
          <h2>Spot it. Shop it.</h2>
        </div>
        <div className="container">
          <div className="last-sec">
            <a href="https://www.sephora.com/happening/services/OLR-CD__makeup_deluxe_prom?icid2=homepage_botnav1_color_program_has360_prom_sephora_us_desktop_image_041619">
              <img
                src="https://www.sephora.com/contentimages/homepage/041619/Homepage/DesktopMweb/2019-04-16-hp-botnav-happening-at-sephora-prom-us-d-slice.jpg"
                alt="ad"
              />
            </a>
            <a href="https://www.sephora.com/shop/face-makeup?icid2=homepage_botnav2_color_program_foundationao360_luxe_us_desktop_image_041619">
              <img
                src="https://www.sephora.com/contentimages/homepage/041619/Homepage/DesktopMweb/2019-04-22-hp-botnav-fao-luxe-us-d-slice.jpg"
                alt="ad"
              />
            </a>
            <a href="https://www.sephora.com/product/precisely-my-brow-pencil-P408219?icid2=homepage_botnav3_color_brand-sku-launch_benefitbrow360_benefit_us_desktop_image_042219">
              <img
                src="https://www.sephora.com/contentimages/homepage/041619/Homepage/DesktopMweb/2019-04-22-hp-botnav-benefit-brow-us-ca-d-slice.jpg"
                alt="ad"
              />
            </a>
            <a href="https://www.sephora.com/rewards?icid2=homepage_botnav4_reward_bazaar_d_us_040219_image">
              <img
                src="https://www.sephora.com/contentimages/homepage/MeganavRedesign/2018-03-20-hp-meganav-bi-us-ca-d-slice.jpg"
                alt="ad"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
