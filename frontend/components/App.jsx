import React from "react";
import SignupFormContainer from "./form/sign_up_form_container";
import LoginFormContainer from "./form/login_form_container";
import { Route, Switch } from "react-router-dom";
import MainNavContainer from "./navbar/navbar_container";
import { AuthRoute, ProtectedRoute } from "./../util/route_utils";
import Home from "./Home";
import Footer from "./footer";
import ProductsIndexContainer from "./products/products_index_container";
import ProductsDetailContainer from "./products/product_detail_container";
import FragranceContainer from "./../components/categories/fragrance_container";
import LipContainer from "./../components/categories/lips_container";
import FaceContainer from "./../components/categories/face_container";
import EyeContainer from "./../components/categories/eyes_container";
import SkinContainer from "./../components/categories/skin_container";
import HairContainer from "./../components/categories/hair_container";
import CartContainer from "./../components/cart/cart_container";
import TopNav from "./../components/navbar/topnav";
import AboutUs from "../components/footer/aboutus";
import Foundation from "../components/howTos/foundation";
import Eyes from "../components/howTos/Eyes";
import Eyebrows from "../components/howTos/Eyebrows";
import Lips from "../components/howTos/Lips";
import Hair from "../components/howTos/Hair";
import ThankYou from "../components/cart/ThankYou";
// import Map from "../components/Map";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false };
  }

  render() {
    return (
      <div>
        <TopNav />
        <MainNavContainer />
        <Switch>
          <ProtectedRoute path="/cart_items" component={CartContainer} />
          <Route exact path="/" component={Home} />
          <Route
            path="/products/:productId"
            component={ProductsDetailContainer}
          />
          {/* <Route exact path="/store" component={Map} /> */}
          <Route exact path="/thankyou" component={ThankYou} />
          <Route exact path="/products" component={ProductsIndexContainer} />
          <Route exact path="/foundation-tutorial" component={Foundation} />
          <Route exact path="/eyeshadow-tutorial" component={Eyes} />
          <Route exact path="/eyebrow-tutorial" component={Eyebrows} />
          <Route exact path="/lip-tutorial" component={Lips} />
          <Route exact path="/hair-tutorial" component={Hair} />
          <Route exact path="/fragrance" component={FragranceContainer} />
          <Route exact path="/face" component={FaceContainer} />
          <Route exact path="/lip" component={LipContainer} />
          <Route exact path="/eye" component={EyeContainer} />
          <Route exact path="/skin" component={SkinContainer} />
          <Route exact path="/hair" component={HairContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route
            render={() => (
              <div className="alert-error">
                <h1>404: Sorry, this page does not exist.</h1>
              </div>
            )}
          />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
