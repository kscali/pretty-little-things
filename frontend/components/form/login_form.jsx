import React from 'react';

class LogInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  updateField(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(()=> this.props.history.push("/"));
  }

  demoLogin(e) {
    this.setState({ email: "admin", password: "123456"}, () => {
      this.handleSubmit(e)
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>1.What is your email address?</h5>
          <input
            onChange={this.updateField("email")}
            type="text"
            value={this.state.email}
            placeholder="Email address*"
          />
          <h5>2.Do you have a prettylittlethings.com password?</h5>
          <input
            id="password"
            onChange={this.updateField("password")}
            type="password"
            value={this.state.password}
            placeholder="Password"
          />
          <button>Cancel</button>
          <button onClick={this.demoLogin}>Demo Login</button>
          <input type="submit" value="Continue" />
        </form>
        
      </div>
    )
  }

}

export default LogInForm;