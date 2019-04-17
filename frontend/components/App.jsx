import React from 'react';
import SignupFormContainer from './form/sign_up_form_container';
import LoginFormContainer from './form/login_form_container'
import { Route, Switch } from 'react-router-dom';
import MainNavContainer from './navbar/navbar_container';
import Title from './title';
import { AuthRoute, ProtectedRoute } from './../util/route_utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false }
  }

  render() {
   return (<div>
    <div className="top">
      <div className="container">
        <div className="row">
          <div className="col">
            <Title />
          </div>
          <div className="col">
            2 of 2
           </div>
        </div>
      </div>
    </div>
    <MainNavContainer />
    <Switch>
      <Route exact path="/" />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
       <Route render={() => (<div className="alert-error"><h1>404: Sorry, this page does not exist.</h1></div>)} />
    </Switch>
  </div>
   )
  } 
};

export default App;