import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';

const MainNav = ({user, logout, products}) => {
  
  let names = products.map(product => {
    return product.name; 
  })
  
    const greeting = () => (
      <div className="greeting">
        <h6 className="logout-dd" >
          Hi, {user.first_name}  <span id="carat">&#x25bc;</span>
        <ul className="logout-menu">
          <li><button className="btn-nav" onClick={() => logout()}>logout</button></li>
        </ul>
        </h6>
      </div>
    )

    const signin = () => (
        <div className="register">
          <h6>Hi, Beautiful</h6>
        <Link className="lnk" to="/login">Sign In</Link>
          <p>or</p>
          <Link className="lnk" to="/signup">Register</Link>
        </div>
    )
  
    return (
      <div className="mid-nav">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* <input className="form-control mx-sm-3" type="text" placeholder="&#x1F50D; Search" /> */}
              <SearchBar names={names} />
            </div>
            <div className="col">
              <h2><Link className="title-logo" to="/">Pretty Little Things</Link></h2>
            </div>
            <div className="col">
              { user ? greeting() : signin() }
              <img id="heart" src="http://www.lovejframe.com/uploads/3/0/9/8/30981033/s906654426785960500_p287_i28_w598.png" alt="black-heart" />
               <span>
                
               </span>
            </div>
          </div>
        </div>
        <nav>
          <ul className="nav justify-content-center">
            <li className="dropdown"><Link to="/products">SHOP ALL</Link>
              {/* <ul className="dropdown-content">
                <li><Link to="/makeup">MAKEUP</Link></li>
                <li><Link to="/skincare">SKIN CARE</Link></li>
                <li><Link to="/tools">TOOLS & BRUSHES</Link></li>
                <li><Link to="/hair">FRAGRANCE</Link></li>
                <li><Link to="/hair">BATH & BODY</Link></li>
              </ul> */}
            </li>
            <li className="dropdown">NEW
               <div className="new2 dropdown-content">
                 <div className="col">
                  <ul className="new-dd new">
                    <li><Link to="/new-makeup">MAKEUP</Link></li>
                    <li><Link to="/new-skincare">SKIN CARE</Link></li>
                    <li><Link to="/new-tools">TOOLS & BRUSHES</Link></li>
                    <li><Link to="/new-hair">FRAGRANCE</Link></li>
                    <li><Link to="/new-hair">BATH & BODY</Link></li>
                  </ul>
                </div>
                <div className="col">
                  <img id="new-img" src="https://www.sephora.com/contentimages/meganav/large/2019-04-01-global-nav-lg-april-wellness-us-ca-d-slice.jpg" alt="wellnewss"/>
                </div>
                <div id="new-imgs" className="col">
                  <img src="https://www.sephora.com/contentimages/meganav/medium/2018-11-18-global-nav-md-holiday-fragrance-us-ca-d-slice.jpg" alt="fragrance-gifts" />
                  <img id="second-img" src="https://www.sephora.com/contentimages/meganav/medium/2019-01-01-global-nav-play-md-us-d-slice.jpg"  alt="play" />
                </div>
              </div>  
            </li>
         
            <li className="dropdown">BRANDS
              <div className="new3 dropdown-content">
                <div className="col">
                  <ul className="new-dd">
                    <li><Link to="/patrickta">PATRICK TA</Link></li>
                    <li><Link to="/laneige">LANEIGE</Link></li>
                    <li><Link to="/fresh">FRESH</Link></li>
                    <li><Link to="/stila">STILA</Link></li>
                    <li><Link to="/tarte">TARTE</Link></li>
                  </ul>
                </div>
                <div className="col">
                  <img id="abh" src="https://www.sephora.com/contentimages/meganav/large/2019-03-07-global-nav-lg-anastasia-dip-brow-gel-us-ca-d-slice.jpg" alt="brand" />
                </div>
              </div>
            </li>
            <li className="dropdown">GIFTS
                 <div className="new4 dropdown-content">
                    <div className="col">
                      <ul className="new-dd2">
                        <li><Link to="/gift-finder"><b>GIFT FINDER</b></Link></li>
                        <li><Link to="/gifts"><b>VIEW ALL GIFTS</b></Link></li>
                        <li><Link to="/price"><b>BY PRICE</b></Link></li>
                        <li><Link to="/price-10">$10 and Under</Link></li>
                        <li><Link to="/price-25">$25 and Under</Link></li>
                        <li><Link to="/price-50">$50 and Under</Link></li>
                        <li><Link to="/price-75">$75 and Under</Link></li>
                        <li><Link to="/price-100">$100 and Under</Link></li>
                     </ul>
                    </div>
                    <div className="col">
                       <img id="gift-f" src="https://www.sephora.com/contentimages/homepage/042418/Meganav/2018-04-19-meganav-lg-button-gift-finder-evergreen-slice.jpg" alt="gifts" />
                    </div>
                </div>
            </li>
            <li className="dropdown">QUIZZES
              <div className="new4 dropdown-content">
                <div className="col">
                  <ul className="new-dd2">
                    <li><a href="#"><b>Quizzes</b></a></li>
                    <li><a href="https://www.sephora.com/beauty/foundation-finder?icid2=meganav_howto_quizzes_foundationfinder_link">Foundation Quiz</a></li>
                    <li><a href="https://www.sephora.com/beauty/skin-care-quiz?icid2=meganav_howto_quizzes_skincarefinder_link">Skincare Quiz</a></li>
                    <li><a href="https://www.sephora.com/beauty/lip-quiz?icid2=meganav_howto_quizzes_lipfinder_link">Lip Quiz</a></li>
                    <li><a href="https://www.sephora.com/beauty/hair-care-quiz?icid2=meganav_howto_quizzes_haircarefinder_link">Hair Quiz</a></li>
                    <li><a href="https://www.sephora.com/beauty/fragrance-gift-guide?icid2=meganav_howto_quizzes_fragrancefinder_link">Fragrance Quiz</a></li>
                    <li><a href="https://www.sephora.com/beauty/best-beauty-products">View All</a></li>
                  </ul>
                </div>
                <div className="col">
                  <a href="https://www.sephora.com/beauty/foundation-finder?icid2=meganav_howtos_foundationfinder_large_081618_image">
                    <img id="quiz" src="https://www.sephora.com/contentimages/meganav/large/2018-08-09-meganav-lrg-foundation-finder-us-ca-d-slice.jpg" alt="quizzez" />
                  </a>
                </div>
              </div> 
            </li>
            <li className="dropdown">COMMUNITY
              <div id="comm" className=" new dropdown-content">
                <div className="comm-col">
                  <div className="divs  col">
                    <a href="https://community.sephora.com/t5/custom/page/page-id/GroupsLandingPage?icid2=meganav_community_groups_041519_image">
                      <img id="img-1" src="https://www.sephora.com/contentimages/meganav/large/2019-03-15-meganav-community-groups-us-ca-d-slice.jpg"  alt="groups" />
                    </a>
                  </div>
                  <div className="divs  col">
                    <a href="https://community.sephora.com/?icid2=meganav_community_evergreen_conversations_041519_image">
                      <img id="img-2" src="https://www.sephora.com/contentimages/meganav/large/2019-03-15-meganav-community-conversations-us-ca-d-slice.jpg" alt="convos" />
                    </a>
                  </div>
                  <div className="divs col">
                    <a href="https://www.sephora.com/community/gallery" >
                      <img id="img-3" src="https://www.sephora.com/contentimages/meganav/large/2019-03-15-meganav-community-gallery-us-ca-d-slice.jpg" alt="gallery" />
                    </a>
                  </div>
                  <div className="divs col">
                    <a href="https://community.sephora.com/t5/Exclusive-Events/bd-p/events-tips?icid2=meganav_community_evergreen_events_d_0415_image">
                      <img id="img-4" src="https://www.sephora.com/contentimages/meganav/large/2019-03-15-meganav-community-events-us-ca-d-slice.jpg" alt="events" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <hr className="nav-line" />
      </div>
      
    )
   
}

export default MainNav;


