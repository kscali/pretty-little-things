import React from 'react';
import SignupFormContainer from './form/sign_up_form_container';
import LoginFormContainer from './form/login_form_container'
import { Route, Switch } from 'react-router-dom';
import MainNavContainer from './navbar/navbar_container';
import Title from './title';
import { AuthRoute, ProtectedRoute } from './../util/route_utils';
import Home from './Home';
import Footer from './footer';
import ProductsIndexContainer from './products/products_index_container';
import ProductsDetailContainer from './products/product_detail_container';
import BrandsContainer from './brands/brands_container';
import FragranceContainer from './../components/categories/fragrance_container';
import LipContainer from './../components/categories/lips_container';
import FaceContainer from './../components/categories/face_container';
import EyeContainer from './../components/categories/eyes_container';
import SkinContainer from './../components/categories/skin_container';
import HairContainer from './../components/categories/hair_container';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false }
  }

  render() {
   return (<div>
    <img className="ad" src="https://www.sephora.com/contentimages/homepage/041619/Homepage/DesktopMweb/2019-04-16-hp-persistent-banner-mday-fragrance-samplebag-SEVENSCENT-us-d-slice.jpg" alt="ad" />
    <div className="top">
      <div className="container">
        <div className="row">
          <div className="col">
            <Title />
          </div>
          <div className="right-top-nav col">
            <a href="#">Reorder</a>
             <a href="#">Track Order</a>
             <a href="#">Find a Store</a>
             <a className="last-a" href="#"><h6 className="flag">🇺🇸</h6><p>US</p><p id="span">&#x25bc;</p>
             <ul className="flag-content">
               <li>
                   <span className="flags">🇨🇦</span>
                 <p id="engs">ENG</p>
               </li>
               <li>
                   <span className="flag2">🇨🇦</span>
                 <p id="france">FR</p>  
               </li>
             </ul>
             </a>
          </div>
        </div>
      </div>
    </div>
    <MainNavContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products/:productId" component={ProductsDetailContainer} />
      <Route exact path="/products" component={ProductsIndexContainer} />
      <Route exact path="/brands" component={BrandsContainer} />
      <Route exact path="/fragrance" component={FragranceContainer} />
      <Route exact path="/face" component={FaceContainer} />
      <Route exact path="/lip" component={LipContainer} />
      <Route exact path="/eye" component={EyeContainer} />
      <Route exact path="/skin" component={SkinContainer} />
      <Route exact path="/hair" component={HairContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <Route render={() => (<div className="alert-error"><h1>404: Sorry, this page does not exist.</h1></div>)} />
    </Switch>
    <footer>
      <Footer />
    </footer>
  </div>
   )
  } 
};

export default App;