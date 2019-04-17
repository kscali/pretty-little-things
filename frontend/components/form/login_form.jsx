import React from 'react';
import { Redirect } from 'react-router-dom';

class LogInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    let modal = document.getElementById("myModal");
    modal.style.height = "60%";
    this.props.clearErrors(this.props.errors);
  }

  componentDidUpdate() {
    const modal = document.getElementById('myModal');
    const main = document.getElementById('main-mod');
    modal.style.display = "block";
    main.style.display = "block"; 
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
    this.props.login(this.state)
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    const main = document.getElementById('main-mod');
    modal.style.display = "none";
    main.style.display = "none"; 
  }

  
  demoLogin(e) {
    this.setState({ email: "user@demo.com", password: "123456"}, () => {
      this.handleSubmit(e)
    })
  }


  render() {
    return (
      <div id="main-mod" className="modals">

        <div id="myModal" className="modal-contents">
          <span onClick={this.closeModal} className="close">&times;</span>
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
            <button onClick={this.closeModal}>Cancel</button>
            <button onClick={this.demoLogin}>Demo Login</button>
            <input className="login-btn" type="submit" value="Continue" />
          </div> 
          <div className="errors1">{this.renderErrors()}</div>
        </form>
          
      </div>
    </div>
    )
  }

}

export default LogInForm;