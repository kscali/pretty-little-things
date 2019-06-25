import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search_bar";

const MainNav = ({ user, logout, products, fetchProducts }) => {
  let names = products.map(product => {
    return product.name;
  });

  const greeting = () => (
    <div className="greeting">
      <h6 className="logout-dd">
        Hi, {user.first_name} <span id="carat">&#x25bc;</span>
        <ul className="logout-menu">
          <li>
            <button className="btn-nav" onClick={() => logout()}>
              logout
            </button>
          </li>
        </ul>
      </h6>
    </div>
  );

  const signin = () => (
    <div className="register">
      <h6>Hi, Beautiful</h6>
      <Link className="lnk" to="/login">
        Sign In
      </Link>
      <p>or</p>
      <Link className="lnk" to="/signup">
        Register
      </Link>
    </div>
  );

  return (
    <div className="mid-nav">
      <div className="container">
        <div className="row">
          <div className="col">
            <SearchBar
              names={names}
              products={products}
              fetchProducts={fetchProducts}
            />
          </div>
          <div className="col">
            <h2 className="title-logo-header">
              <Link className="title-logo" to="/">
                Pretty Little Things
              </Link>
            </h2>
          </div>
          <div className="col">{user ? greeting() : signin()}</div>
          <div className="icon-container">
            <img
              id="heart"
              src={require("../../assets/images/icons8-heart-filled-50.png")}
              alt="black-heart"
            />
            <span className="basket">
              <Link to="/cart_items">
                <img
                  src="https://previews.123rf.com/images/tkacchuk/tkacchuk1411/tkacchuk141100038/34157112-basket-simple-icon-on-white-background-.jpg"
                  alt="basket"
                  width="70"
                  height="70"
                />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <nav>
        <ul className="nav justify-content-center">
          <li className="dropdown">
            <Link to="/products">SHOP ALL</Link>
          </li>
          <li className="dropdown">
            CATEGORIES
            <div className="new2 dropdown-content">
              <div className="col">
                <ul className="new-dd new">
                  <li>
                    <Link to="/face">FACE</Link>
                  </li>
                  <li>
                    <Link to="/eye">EYE</Link>
                  </li>
                  <li>
                    <Link to="/lip">LIP</Link>
                  </li>
                  <li>
                    <Link to="/skin">SKIN</Link>
                  </li>
                  <li>
                    <Link to="/fragrance">FRAGRANCE</Link>
                  </li>
                  <li>
                    <Link to="/hair">HAIR</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <img
                  id="new-img"
                  src="https://www.sephora.com/contentimages/meganav/large/2019-04-01-global-nav-lg-april-wellness-us-ca-d-slice.jpg"
                  alt="wellnewss"
                />
              </div>
              <div id="new-imgs" className="col">
                <img
                  src="https://www.sephora.com/contentimages/meganav/medium/2018-11-18-global-nav-md-holiday-fragrance-us-ca-d-slice.jpg"
                  alt="fragrance-gifts"
                />
                <img
                  id="second-img"
                  src="https://www.sephora.com/contentimages/meganav/medium/2019-01-01-global-nav-play-md-us-d-slice.jpg"
                  alt="play"
                />
              </div>
            </div>
          </li>

          <li className="dropdown">
            HOW TO VIDEOS
            <div className="new4 dropdown-content">
              <div className="col">
                <ul className="new-dd2">
                  <li>
                    <Link to="/foundation-tutorial">FOUNDATION TUTORIAL</Link>
                  </li>
                  <li>
                    <Link to="/eyeshadow-tutorial">EYESHADOW TUTORIAL</Link>
                  </li>
                  <li>
                    <Link to="/eyebrow-tutorial">EYEBROW TUTORIAL</Link>
                  </li>
                  <li>
                    <Link to="/lip-tutorial">LIP TUTORIAL</Link>
                  </li>
                  <li>
                    <Link to="/hair-tutorial">HAIR TUTORIAL</Link>
                  </li>
                  <li>
                    <Link to="/blush-tutorial">BLUSH TUTORIAL</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="dropdown">
            COMMUNITY
            <div id="comm" className=" new dropdown-content">
              <div className="comm-col">
                <div className="divs  col">
                  <a href="https://community.sephora.com/t5/custom/page/page-id/GroupsLandingPage?icid2=meganav_community_groups_041519_image">
                    <img
                      id="img-1"
                      src="https://www.sephora.com/contentimages/meganav/large/2019-03-15-meganav-community-groups-us-ca-d-slice.jpg"
                      alt="groups"
                    />
                  </a>
                </div>
                <div className="divs  col">
                  <a href="https://community.sephora.com/?icid2=meganav_community_evergreen_conversations_041519_image">
                    <img
                      id="img-2"
                      src="https://www.sephora.com/contentimages/meganav/large/2019-03-15-meganav-community-conversations-us-ca-d-slice.jpg"
                      alt="convos"
                    />
                  </a>
                </div>
                <div className="divs col">
                  <a href="https://www.sephora.com/community/gallery">
                    <img
                      id="img-3"
                      src="https://www.sephora.com/contentimages/meganav/large/2019-03-15-meganav-community-gallery-us-ca-d-slice.jpg"
                      alt="gallery"
                    />
                  </a>
                </div>
                <div className="divs col">
                  <a href="https://community.sephora.com/t5/Exclusive-Events/bd-p/events-tips?icid2=meganav_community_evergreen_events_d_0415_image">
                    <img
                      id="img-4"
                      src="https://www.sephora.com/contentimages/meganav/large/2019-03-15-meganav-community-events-us-ca-d-slice.jpg"
                      alt="events"
                    />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <hr className="nav-line" />
    </div>
  );
};

export default MainNav;
