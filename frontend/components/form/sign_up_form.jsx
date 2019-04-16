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
  }

  updateField(field) {
    return e => this.setState({[field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => {
      this.props.history.push("/")
    });
  }


  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <p className="required-info">*Required information</p>
        
        <input 
          onChange={this.updateField("first_name")}
          type="text" 
          value={this.state.first_name} 
          placeholder="First Name*" 
        />
        <input 
          onChange={this.updateField("last_name")}
          type="text" 
          value={this.state.last_name} 
          placeholder="Last Name*" 
        />
        <input 
          onChange={this.updateField("email")}
          type="text" 
          value={this.state.email} 
          placeholder="Email address*" 
        />
        <input 
          id="password"
          onChange={this.updateField("password")}
          type="password" 
          value={this.state.password} 
          placeholder="Password (6 to 12 characters)*" 
        />

        <input type="submit" value="Register" />
      </form>
    </div>
    )
  }

}

export default SignUpForm;