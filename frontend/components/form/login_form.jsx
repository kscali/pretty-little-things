import React from 'react';
import Home from './../Home';
import { Link } from 'react-router-dom';

class LogInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      className: "modals"
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors(this.props.errors);
    this.setState({className: "modals show"})
  }

  updateField(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.session.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({email: this.state.email, password: this.state.password})
  }

  closeModal(e) {
    if (e.currentTarget === e.target) {
      e.preventDefault();
      this.setState({className: "modals"})
    }
  }

  
  demoLogin(e) {
    this.setState({ email: "user@demo.com", password: "123456"}, () => {
      this.handleSubmit(e)
    })
  }


  render() {
    return (
      <div className="back-modal" >
        <Home />
      <div onClick={this.closeModal} id="main-mod" className={this.state.className}>

        <div id="myModal" className="modal-contents small">
          <span id="sp-btn" onClick={this.closeModal} className="close">&times;</span>
          <h5>Please sign into Pretty Little Things</h5>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <h6>1.What is your email address?</h6>
            <input
              className="login"
              onChange={this.updateField("email")}
              type="text"
              value={this.state.email}
              placeholder="Email address*"
            />
            <h6>2.Do you have a prettylittlethings.com password?</h6>
            <input
              className="login"
              id="password"
              onChange={this.updateField("password")}
              type="password"
              value={this.state.password}
              placeholder="Password"
            />
          <div className="form-input">
            <button type="button" onClick={this.closeModal}>Cancel</button>
            <button type="button" onClick={this.demoLogin}>Demo Login</button>
            <input className="login-btn" type="submit" value="Continue" />
          </div> 
           <Link className="signup-link" to="/signup">Register</Link>
          <div className="errors1">{this.renderErrors()}</div>
        </form>
        </div>  
      </div>
    </div>
    )
  }

}

export default LogInForm;