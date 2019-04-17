import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    let modal = document.getElementById("myModal");
    modal.style.height = "83%";
  }

  updateField(field) {
    return e => this.setState({[field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
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
  
  closeModal() {
    const modal = document.getElementById('myModal');
    const main = document.getElementById('main-mod');
    modal.style.display = "none";
    main.style.display = "none";
  }
  
  render() {
    return (
    <div id="main-mod" className="modals">

        <div id="myModal" className="modal-contents">
          <span onClick={this.closeModal} className="close">&times;</span>
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

            <input className="btm-input" type="submit" value="Register" />
            <p className="terms">Pretty Little Things uses Google ReCaptcha 
            and user's are subject to Google's
            <a href="https://policies.google.com/privacy?hl=en"> privacy policy </a>
              & <a href="https://policies.google.com/terms?hl=en">terms.</a></p>
          </form>
          <div className="errors">{this.renderErrors()}</div>
        </div>
       
    </div>
    )
  }

}

export default SignUpForm;