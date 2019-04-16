import React from 'react';
import SignupFormContainer from './form/sign_up_form_container';
import LoginFormContainer from './form/login_form_container'
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import MainNav from './navbar/main_nav';
import Title from './title';

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
    <MainNav />
    <GreetingContainer />
    <Route path="/signup" component={SignupFormContainer} />
    <Route path="/login" component={LoginFormContainer} />
  </div>
   )
  } 
};

export default App;