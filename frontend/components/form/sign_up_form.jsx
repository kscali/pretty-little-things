import React from 'react';
import Home from './../Home';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      className: "modals"
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.clear(this.props.errors);
    this.setState({className: "modals show"});
  }


  updateField(field) {
    return e => this.setState({[field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const info = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    }
   
    this.props.processForm(info);
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
  
  closeModal(e) {
    if (e.target === e.currentTarget) {
     this.setState({className: "modals"})
    }
  }
  
  
  render() {
    return (
      <div className="back-modal" >
      <Home />
    <div onClick={this.closeModal} id="main-mod" className={this.state.className}>
        <div id="myModal" className="modal-contents">
          <span id="sp-btn" onClick={this.closeModal} className="close">&times;</span>
          
          <form onSubmit={this.handleSubmit}>
            <h6>Register with Pretty Little Things</h6>
            <hr/>
            <p className="required-info">*Required information</p>

            <div className="rows">
               <div className="first cols">
                <input
                  onChange={this.updateField("first_name")}
                  type="text"
                  value={this.state.first_name}
                  placeholder="First Name*"
                />
              </div>
              <div className="sec cols">
                <input
                  onChange={this.updateField("last_name")}
                  type="text"
                  value={this.state.last_name}
                  placeholder="Last Name*"
                />
               </div>
            </div>
              <div className="cols">
                <input
                  onChange={this.updateField("email")}
                  type="text"
                  value={this.state.email}
                  placeholder="Email address*"
                />
              </div>
              <div className="cols">
                <input
                  id="password"
                  onChange={this.updateField("password")}
                  type="password"
                  value={this.state.password}
                  placeholder="Password (6 to 12 characters)*"
                />
            </div>
            <hr />
            <img className="b-i" src="https://ks-plt.s3-us-west-1.amazonaws.com/logo-beauty-insider.svg" alt="beauty-insider" />
            <div className="checks-box">
              <input type="checkbox" name="" id=""/><strong>Yes, join the rewards program and earn points on every purchase.</strong>
              <p>By joing you agree to <a href="#">Terms & Conditions</a></p>
            </div>  
            
            <input className="btm-input" type="submit" value="Register" />
            <Link className="sign-in-link" to="/login">Sign In</Link>
          </form>
          <div className="errors">
            {this.renderErrors()}
          </div>
          <p className="terms">
            Pretty Little Things uses Google ReCaptcha 
            and user's are subject to Google's
            <a href="https://policies.google.com/privacy?hl=en"> 
             {" "} privacy policy 
            </a> & 
            <a href="https://policies.google.com/terms?hl=en">
              {" "}terms.
            </a>
          </p>
        </div>
      </div> 
    </div>
    )
  }

}

export default SignUpForm;