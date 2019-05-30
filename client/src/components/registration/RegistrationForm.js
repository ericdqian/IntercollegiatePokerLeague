import React from "react";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      reenteredPassword: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("localhost:8081/api/registration/", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })

  }

  render() {
    return (
      <form>
        <label>
          First Name:
          <input type="text" name = "firstName" value={this.state.firstName} onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name = "lastName" value={this.state.lastName} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name = "email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name = "password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <label>
          Reenter password:
          <input type="text" name = "reenteredPassword" value={this.state.reenteredPassword} onChange={this.handleChange} />
        </label>
      <input type="submit" value="Register" />
      </form>
    )
  }
}

export default RegistrationForm;