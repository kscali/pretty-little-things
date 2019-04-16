import React from 'react';
import SignupFormContainer from './form/sign_up_form_container';
import LoginFormContainer from './form/login_form_container'
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting_container';

const App = () => (
  <div>
    <div className="top">
      <GreetingContainer />
    </div>

    <Route path="/signup" component={SignupFormContainer} />
    <Route path="/login" component={LoginFormContainer} />
  </div>
);

export default App;